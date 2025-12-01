import { createContext, use, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();

export const AppContextProvider=(props)=>{
    const[allCourses,setAllCourses]=useState([]);
    const currency=import.meta.env.VITE_CURRENCY
    const navigate=useNavigate()
    const calculateRating=(course)=>{
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating=0;
        course.courseRatings.forEach(rating=>{
            totalRating+=rating.rating
        })
        return totalRating/course.courseRatings.length
    }
     const fetchAllCourses= async ()=>{
        setAllCourses(dummyCourses);
    }
    const [isEducator,setisEducator]=useState(true)
    useEffect(()=>{fetchAllCourses()},[])
    const value={
        currency,allCourses,navigate,calculateRating,isEducator,setisEducator
    }
    
   
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
