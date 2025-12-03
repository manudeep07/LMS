import React, { useContext } from 'react'
import NavBar from '../../components/student/NavBar'
import SearchBar from '../../components/student/SearchBar'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/student/CourseCard'
import { useParams } from 'react-router-dom'
import Footer from '../../components/student/Footer'
const CoursesList = () => {
    const {allCourses,navigate}=useContext(AppContext);
    const {input}=useParams()
  return (
    <>
    <div className='relative md:px-36 px-8 pt-10 text-left'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 '>
        <div className=''>
        <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
        <p className='text-gray-500'><span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/')}>Home</span>/<span>Course List</span></p>
      </div>
      <div >
        <SearchBar data={input}/>
      </div>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
               my-16 gap-3 px-2 md:p-0">
        {allCourses.map(course => (
        <CourseCard key={course._id} course={course} />
         ))}
      </div>
      
     
    </div>
    <Footer/>
    </>
  )
}

export default CoursesList