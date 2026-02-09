import { clerkClient } from "@clerk/express";


// Middleware to protect educator routes
export const protectEducatorRoute=async(req,res,next)=>{
    try {
        const userId=req.auth().userId;
        const user=await clerkClient.users.getUser(userId);
        if(user.publicMetadata.role !== "educator"){
            return res.json({success:false,message:"You are not authorized"})
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Something went wrong"})
    }
}