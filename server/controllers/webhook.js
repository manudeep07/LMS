import { Webhook } from "svix";
import User from "../models/User.js";

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