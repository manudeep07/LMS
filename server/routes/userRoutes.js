import express from "express";
import { getUserData, getUserEnrolledCourses, purchaseCourse } from "../controllers/userController.js";
const userRouter=express.Router();

userRouter.get('/user-data',getUserData)
userRouter.get('/my-enrolled-courses',getUserEnrolledCourses)
userRouter.post('/purchase',purchaseCourse)
export default userRouter