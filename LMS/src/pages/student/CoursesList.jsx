import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/student/NavBar'
import SearchBar from '../../components/student/SearchBar'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/student/CourseCard'
import { useParams } from 'react-router-dom'
import Footer from '../../components/student/Footer'
import { assets } from '../../assets/assets'
const CoursesList = () => {
    const {allCourses,navigate}=useContext(AppContext);
    const {input}=useParams()
    const [filteredcourses,setFilteredcourses]=useState([])
    useEffect(
      ()=>{
        const temp=allCourses.slice();
        input? 
        setFilteredcourses(temp.filter(item=>item.courseTitle.toLowerCase().includes(input.toLowerCase())))
        :setFilteredcourses(temp)
      }
    ,[input,allCourses])
  return (
    <>
    <div className='relative md:px-36 px-8 pt-10 text-left'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 space-y-2 md:space-y-0'>
        <div>
        <h1 className='text-4xl font-bold tracking-tight text-gray-800'>
          Course List</h1>
        <p className="text-gray-500 text-sm md:text-base">
        <span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/')}>Home</span>/
        <span>Course List</span></p>
      </div>
      <div >
        <SearchBar data={input}/>
      </div>
      </div>
     
        {input && <div className="inline-flex items-center gap-4 px-4 py-2 border rounded-xl shadow-sm bg-gray-50 mt-8 mb-8 text-gray-800">
          <p>{input}</p>
          <img className='cursor-pointer'src={assets.cross_icon} alt="cross icon" onClick={()=>navigate('/course-list')}/>
          </div>}
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                gap-3 mb-24 px-2 md:p-0 mt-8">
        {filteredcourses.map(course => (
        <CourseCard key={course._id} course={course} />
         ))}
      </div>
      
     
    </div>
    <Footer/>
    </>
  )
}

export default CoursesList