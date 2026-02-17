import { clerkClient } from "@clerk/express";
import Course from "../models/Course.js";
import { v2 as cloudinary } from 'cloudinary'
import Purchase from "../models/Purchase.js";
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
export const getEducatorCourses = async (req, res) => {
    try {
        const educatorId = req.auth().userId;
        const courses = await Course.find({
            educator: educatorId
        })
        res.json({ success: true, courses })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
// Get Educator dashboard data (Total earning,Enrolled Students,No of courses)
export const getEducatorDashboardData = async (req, res) => {
    try {
        const educatorId = req.auth().userId;
        const courses = await Course.find({ educator: educatorId });
        // total no of courses
        const totalCourses = courses.length;
        //total earning of the educator
        const courseIds = courses.map(course => course._id);
        const purchases = await Purchase.find({
            courseId: { $in: courseIds },
            status: 'success'
        })
        const totalEarnings = purchases.reduce((sum, purchase) => sum += purchase.amount, 0);

        //enrolled student data
        const enrolledStudentsData = [];

        for (const course of courses) {
            const studentIds = course.enrolledStudents.map(student => student.userId);
            const students = await User.find({
                _id: { $in: studentIds }
            });

            for (const student of students) {
                enrolledStudentsData.push({
                    courseTitle: course.courseTitle,
                    student
                })
            }
        }
        res.json({ success: true, totalCourses, totalEarnings, enrolledStudentsData })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


export const getStudentsEnrolledData = async (req, res) => {
    try {
        const educatorId = req.auth().userId;
        const courses = await Course.find({ educator: educatorId });
        const courseIds = courses.map(course => course._id);
        const purchases = await Purchase.find({
            courseId: { $in: courseIds },
            status: 'success'
        }).populate('userId', 'name imageUrl').populate('courseId', 'courseTitle')
        const enrolledStudentsData = [];
        for (const purchase of purchases) {
            enrolledStudentsData.push({
                courseTitle: purchase.courseId.courseTitle,
                student: purchase.userId,
                purchaseDate: purchase.createdAt,
            })
        }
        res.json({ success: true, enrolledStudentsData })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}