import { clerkClient } from "@clerk/express";
import Course from "../models/Course.js";
import { v2 as cloudinary } from 'cloudinary'

// update role to educator
export const updateRoleToEducator = async (req, res) => {
    try {
        const { userId } = req.auth();
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: "educator",
            }
        })
        res.json({ success: true, message: 'You can publish a course now' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Something went wrong' })
    }
}

// Add New Course

export const addCourse = async (req, res) => {
    try {
        const { courseData } = req.body;
        const imageFile = req.file;
        const educatorId = req.auth().userId;
        if (!imageFile) {
            return res.json({ success: false, message: "Please upload a course thumbnail" })
        }
        const parsedCourseData = JSON.parse(courseData);
        parsedCourseData.educator = educatorId;
        const newCourse = new Course(parsedCourseData);
        const imageUpload = await cloudinary.uploader.upload(imageFile.path); 
        newCourse.courseThumbnail = imageUpload.secure_url;
        await newCourse.save();
        res.json({ success: true, message: "Course added successfully" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Something went wrong" })
    }
}


// Get Educator Courses
export const getEducatorCourses = async (req,res)=>{
    try{
        const educatorId=req.auth().userId;
        const courses=await Course.find({
            educator:educatorId
        })
        res.json({success:true,courses})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}