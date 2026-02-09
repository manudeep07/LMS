import express from "express";
import { getAllCourses, getCourseById } from "../controllers/courseController.js";
const CourseRouter=express.Router();

CourseRouter.get('/all-courses',getAllCourses)
CourseRouter.get('/:id',getCourseById)

export default CourseRouter
