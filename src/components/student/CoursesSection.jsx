import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const {allCourses}=useContext(AppContext)

  return (
    <div className='flex flex-col items-center text-center px-6 py-20 max-w-3xl mx-auto'>
        <h1 className='text-3xl font-medium text-gray-800'>Learn from the best</h1>
       <p className="mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed">
  Discover our top-rated courses across various categories.From coding and design to 
  
  <span className="md:block md:text-center">
    business and wellness, our courses are crafted to deliver results.
  </span>
</p>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                gap-6 px-4 md:px-0 max-w-7xl mx-auto my-8">

  {allCourses.slice(0, 4).map(course => (
    <CourseCard key={course._id} course={course} />
  ))}
</div>


        <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
        className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection