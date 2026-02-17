import Stripe from "stripe";
import Course from "../models/Course.js";
import Purchase from "../models/Purchase.js";
import User from "../models/User.js";
export const getUserData=async(req,res)=>{
    try{
        const userId=req.auth().userId;
        const user=await User.findById(userId);
        res.json({success:true,user})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export const getUserEnrolledCourses=async(req,res)=>{
    try{
        const userId=req.auth().userId;
        const user=await User.findById(userId).populate('enrolledCourses');
        res.json({success:true,enrolledCourses:user.enrolledCourses})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export const purchaseCourse = async (req,res)=>{
    try {
        const { courseId }=req.body
        const { origin } = req.headers
        const userId = req.auth().userId
        const userData = await User.findById(userId)
        const courseData= await Course.findById(courseId)
        if(!userData || !courseData){
            return res.json({ success:false, message: 'Data Not Found'})
        }
        
        const purchaseData = {
            courseId,
            userId:userId,
            amount:(courseData.coursePrice-courseData.coursePrice*courseData.discount/100).toFixed(2),
        }
        const newPurchase=await Purchase.create(purchaseData)

        // Stript Gateway Intitialize
        const stripeInstance=new Stripe(process.env.STRIPE_SECRET_KEY)
        const currency=process.env.CURRENCY.toLowerCase()

        // Creating line items for Stripe
        const line_items=[{
            price_data:{
                currency,
                product_data:{
                    name:courseData.courseTitle,
                },
                unit_amount:Math.floor(newPurchase.amount*100)
            },
            quantity:1,
        }]

        const session=await stripeInstance.checkout.sessions.create({
            mode: 'payment',
            line_items,
            customer_email: `${userData.email}`,
            success_url: `${origin}/loading/my-enrollments`,
            cancel_url: `${origin}/`,
            metadata: {
                purchaseId:newPurchase._id.toString()
            }
        })
        res.json({success:true,paymentUrl:session.url})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}