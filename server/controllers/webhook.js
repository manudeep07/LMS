import { Webhook } from "svix";
import User from "../models/User.js";
import Stripe from "stripe";
import Purchase from "../models/Purchase.js";
import Course from "../models/Course.js";

export const clerkWebhooks = async (req, res) => {
    try {
        console.log("Webhook received");

        if (!process.env.CLERK_WEBHOOK_SECRET) {
            throw new Error('Error: Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
        }

        const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        const evt = wh.verify(req.body, {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        const { data, type } = evt;
        console.log("Webhook verified, type:", type);

        switch (type) {
            case "user.created": {
                console.log("Handling user.created");
                const { id, email_addresses, first_name, last_name, image_url } = data;

                await User.create({
                    _id: id,
                    name: `${first_name} ${last_name}`,
                    email: email_addresses[0].email_address,
                    imageUrl: image_url,
                });
                console.log("User created in DB");
                break;
            }

            case "user.updated": {
                console.log("Handling user.updated");
                const { id, email_addresses, first_name, last_name, image_url } = data;

                await User.findByIdAndUpdate(id, {
                    name: `${first_name} ${last_name}`,
                    email: email_addresses[0].email_address,
                    imageUrl: image_url,
                });
                console.log("User updated in DB");
                break;
            }
            case "user.deleted": {
                console.log("Handling user.deleted");
                const { id } = data;
                await User.findByIdAndDelete(id);
                console.log("User deleted from DB");
                break;
            }
            default: {
                console.log(`Unhandled event type: ${type}`);
                break;
            }
        }

        res.status(200).json({ success: true });

    } catch (error) {
        console.log("Webhook error:", error.message);
        res.status(500).json({ message: error.message });
    }
};

export const stripeWebhooks = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    }
    catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            {
                const paymentIntent = event.data.object;
                const paymentIntentId=paymentIntent.id;
                
                const session = await stripe.checkout.sessions.list({
                    payment_intent:paymentIntentId
                })
                const {purchaseId}=session.data[0].metadata;
                const purchaseData=await Purchase.findById(purchaseId);
                const userData = await User.findById(purchaseData.userId);
                const courseData=await Course.findById(purchaseData.courseId.toString());
                courseData.enrolledStudents.push(userData._id);
                await courseData.save();
                userData.enrolledCourses.push(courseData._id);
                await userData.save();
                if(purchaseData){
                    purchaseData.status="success";
                    await purchaseData.save();
                }
                res.json({success:true,message:"Payment successful"})
                break
            }
            
        case 'payment_intent.payment_failed':
            {
                const paymentIntent = event.data.object;
                const paymentIntentId=paymentIntent.id;
                
                const session = await stripe.checkout.sessions.list({
                    payment_intent:paymentIntentId
                })
                const { purchaseId }=session.data[0].metadata;
                const purchaseData=await Purchase.findById(purchaseId);
                if(purchaseData){
                    purchaseData.status="failed";
                    await purchaseData.save();
                }
                res.json({success:true,message:"Payment failed"})
                break
            }
        default:
            console.log(`Unhandled event type ${event.type}`);
            break;
    }
}
