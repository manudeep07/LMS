import Stripe from "stripe";
import Course from "../models/Course.js";
import Purchase from "../models/Purchase.js";
import User from "../models/User.js";
import CourseProgress from "../models/CourseProgress.js";
export const getUserData = async (req, res) => {
    try {
        const userId = req.auth().userId;
        const user = await User.findById(userId);
        res.json({ success: true, user })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export const getUserEnrolledCourses = async (req, res) => {
    try {
        const userId = req.auth().userId;
        const user = await User.findById(userId).populate('enrolledCourses');
        res.json({ success: true, enrolledCourses: user.enrolledCourses })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export const purchaseCourse = async (req, res) => {
    try {
        const { courseId } = req.body
        const { origin } = req.headers
        const userId = req.auth().userId
        const userData = await User.findById(userId)
        const courseData = await Course.findById(courseId)
        if (!userData || !courseData) {
            return res.json({ success: false, message: 'Data Not Found' })
        }

        const purchaseData = {
            courseId,
            userId: userId,
            amount: (courseData.coursePrice - courseData.coursePrice * courseData.discount / 100).toFixed(2),
        }
        const newPurchase = await Purchase.create(purchaseData)

        // Stript Gateway Intitialize
        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)
        const currency = process.env.CURRENCY.toLowerCase()

        // Creating line items for Stripe
        const line_items = [{
            price_data: {
                currency,
                product_data: {
                    name: courseData.courseTitle,
                },
                unit_amount: Math.floor(newPurchase.amount * 100)
            },
            quantity: 1,
        }]

        const session = await stripeInstance.checkout.sessions.create({
            mode: 'payment',
            line_items,
            customer_email: `${userData.email}`,
            success_url: `${origin}/loading/my-enrollments`,
            cancel_url: `${origin}/`,
            metadata: {
                purchaseId: newPurchase._id.toString()
            }
        })
        res.json({ success: true, paymentUrl: session.url })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Update User Course Progress

export const updateCourseProgress = async (req, res) => {
    try {
        const { courseId, lectureId } = req.body;
        const userId = req.auth().userId;
        const courseProgress = await CourseProgress.findOne({ userId, courseId });
        const courseData = await Course.findById(courseId);

        if (courseProgress) {
            if (courseProgress.lectureCompleted.includes(lectureId)) {
                return res.json({ success: false, message: "Lecture already completed" })
            }
            courseProgress.lectureCompleted.push(lectureId);
            if (courseProgress.lectureCompleted.length === courseData.courseContent.length) {
                courseProgress.completed = true;
            }
            await courseProgress.save();

        } else {
            const newCourseProgress = await CourseProgress.create({ userId, courseId, lectureCompleted: [lectureId] });
            if (courseData.courseContent.length === 1) {
                newCourseProgress.completed = true;
            }
            await newCourseProgress.save();
        }
        res.json({ success: true, message: "Progress updated successfully" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Get User Course Progress
export const getUserCourseProgress = async (req, res) => {
    try {
        const { courseId } = req.body;
        const userId = req.auth().userId;
        const courseProgress = await CourseProgress.findOne({ userId, courseId });
        res.json({ success: true, courseProgress });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Add User Ratings to Course

export const addUserRating = async (req, res) => {
    const { courseId, rating } = req.body;
    const userId = req.auth().userId;
    if (!courseId || !userId || !rating || rating < 1 || rating > 5) {
        return res.json({ success: false, message: 'Invalid Details' })
    }

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.json({ success: false, message: "Course not found" });
        }
        const user = await User.findById(userId);
        if (!user || !user.enrolledCourses.includes(courseId)) {
            return res.json({ success: false, message: "User not enrolled in this course" });
        }

        const existingRatingIndex = course.courseRatings.findIndex((obj) => (obj.userId.toString() === userId.toString()));

        if (existingRatingIndex < 0) {
            const newCourseRating = { userId, rating };
            course.courseRatings.push(newCourseRating);
        } else {
            course.courseRatings[existingRatingIndex].rating = rating;
        }
        await course.save();
        return res.json({ success: true, message: "CourseRating added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}