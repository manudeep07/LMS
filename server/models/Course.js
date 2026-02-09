import mongoose from "mongoose";

// lecture schema
const lectureSchema = new mongoose.Schema({
    lectureId: { type: String, required: true },
    lectureTitle: { type: String, required: true },
    lectureDuration: { type: Number, required: true },
    lectureUrl: { type: String, required: true },
    isPreviewFree: { type: Boolean, required: true },
    lectureOrder: { type: Number, required: true }
}, { _id: false });

// chapter schema
const chapterSchema = new mongoose.Schema({
    chapterId: { type: String, required: true },
    chapterOrder: { type: Number, required: true },
    chapterTitle: { type: String, required: true },
    chapterContent: [lectureSchema]
}, { _id: false });

// course schema
const courseSchema = new mongoose.Schema({
    courseTitle: { type: String, required: true },
    courseDescription: { type: String },
    courseThumbnail: { type: String },
    coursePrice: { type: Number, required: true },
    isPublished: { type: Boolean, default: true },
    discount: { type: Number, min: 0, max: 100, default: 0 },
    courseContent: [chapterSchema],
    courseRatings: [
        {
            userId: { type: String, ref: "User" },
            rating: {
                type: Number,
                min: 1, max: 5,
                required: true
            }
        }],
    educator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    enrolledStudents: [
        {
            userId: {
                type: String,
                ref: "User"
            },
            enrolledAt: {
                type: Date,
                default: Date.now
            }
        }
    ]

}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);
export default Course;