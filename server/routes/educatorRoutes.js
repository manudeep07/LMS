import express, { json } from 'express'
import { updateRoleToEducator } from '../controllers/educatorController.js'
import { protectEducatorRoute } from '../middlewares/authMiddleware.js'
import { addCourse, getEducatorCourses } from '../controllers/educatorController.js'
import upload from '../configs/multer.js'
const router = express.Router();

// add Educator role
router.get('/update-role', updateRoleToEducator)
router.post('/add-course',upload.single('image'),protectEducatorRoute,addCourse)
router.get('/my-courses',protectEducatorRoute,getEducatorCourses)

export default router