import express from "express";
import { addUserRating, getUserCourseProgress, getUserData, getUserEnrolledCourses, purchaseCourse, updateCourseProgress } from "../controllers/userController.js";
const userRouter=express.Router();

userRouter.get('/user-data',getUserData)
userRouter.get('/my-enrolled-courses',getUserEnrolledCourses)
userRouter.post('/purchase',purchaseCourse)
userRouter.post('/update-course-progress',updateCourseProgress)
userRouter.post('/get-course-progress',getUserCourseProgress)
userRouter.post('/add-rating',addUserRating)
export default userRouter