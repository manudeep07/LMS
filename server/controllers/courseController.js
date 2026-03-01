import Course from "../models/Course.js";

// Get All Courses
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isPublished: true }).select(['-courseContent', '-enrolledStudents'])
            .populate({ path: 'educator', select: 'name imageUrl email' })
            .populate({ path: 'courseRatings.userId', select: 'name imageUrl' })
        res.json({ success: true, courses });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// get courseById
export const getCourseById = async (req, res) => {
    const { id } = req.params
    try {
        const course = await Course.findById(id)
            .populate({ path: 'educator', select: 'name imageUrl email' })
            .populate({ path: 'courseRatings.userId', select: 'name imageUrl' })
        course.courseContent.forEach(chapter => {
            chapter.chapterContent.forEach(lecture => {
                if (!lecture.isPreviewFree) lecture.lectureUrl = "";
            })
        })
        res.json({ success: true, course })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}