import { createContext, use, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
export const AppContext = createContext();


const serverUrl = import.meta.env.VITE_BACKEND_URL
export const AppContextProvider = (props) => {
    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(false)
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const [userData, setUserData] = useState(null)

    // currency
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const { getToken, isLoaded } = useAuth();
    const { user } = useUser();

    // calculate rating
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return Math.floor(totalRating / course.courseRatings.length)
    }

    //Function to Calculate Course Chapter Time
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
    }

    //Function to Calculate Course Duration
    const calculateCourseDuration = (course) => {
        let time = 0;

        course.courseContent.forEach((chapter) => {
            chapter.chapterContent.forEach((lecture) => {
                time += lecture.lectureDuration;
            });
        });

        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };

    //function to calculate total no of lectures in the course
    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length
            }
        });
        return totalLectures;
    }


    // fetch all courses
    const fetchAllCourses = async () => {
        try {
            const { data } = await axios.get(`${serverUrl}/api/course/all-courses`)
            if (data.success) {
                setAllCourses(data.courses)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // fetch userData
    const fetchUserData = async () => {
        if (user.publicMetadata.role === 'educator') {
            setIsEducator(true);
        }
        try {
            const token = await getToken();

            const { data } = await axios.get(`${serverUrl}/api/user/user-data`, {
                headers:
                    { Authorization: `Bearer ${token}` }
            })

            if (data.success) {
                setUserData(data.user)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // CALLING ALL THE FUNCTIONS
    useEffect(() => {
        fetchAllCourses()


    }, [])

    //fetch enrolled courses
    const fetchUserEnrolledCourses = async () => {
        const token = await getToken();
        const { data } = await axios.get(`${serverUrl}/api/user/my-enrolled-courses`, {
            headers:
                { Authorization: `Bearer ${token}` }
        })
        if (data.success) {
            setEnrolledCourses(data.enrolledCourses.reverse())
        } else {
            toast.error(data.message)
        }
    }

    useEffect(() => {
        if (user) {
            fetchUserData()
            fetchUserEnrolledCourses()
        }
    }, [user])


    // value
    const value = {
        currency, allCourses, navigate, calculateRating,
        isEducator, setIsEducator, calculateChapterTime,
        calculateCourseDuration, calculateNoOfLectures,
        enrolledCourses, fetchUserEnrolledCourses, setUserData, getToken, serverUrl, fetchAllCourses, userData
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
