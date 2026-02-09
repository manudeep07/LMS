import express, { json } from 'express'
import { getEducatorDashboardData, getStudentsEnrolledData, updateRoleToEducator } from '../controllers/educatorController.js'
import { protectEducatorRoute } from '../middlewares/authMiddleware.js'
import { addCourse, getEducatorCourses } from '../controllers/educatorController.js'
import upload from '../configs/multer.js'
const EducatorRouter = express.Router();

// add Educator role
EducatorRouter.get('/update-role', updateRoleToEducator)
EducatorRouter.post('/add-course',upload.single('image'),protectEducatorRoute,addCourse)
EducatorRouter.get('/my-courses',protectEducatorRoute,getEducatorCourses)
EducatorRouter.get('/dashboard',protectEducatorRoute,getEducatorDashboardData)
EducatorRouter.get('/enrolled-students',protectEducatorRoute,getStudentsEnrolledData)


export default EducatorRouter