import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext)

  return (
    <div className='flex flex-col items-center text-center px-6 py-24 mx-auto w-full'>
      <h2 className='text-3xl md:text-4xl font-bold text-slate-900 tracking-tight'>Learn from the best</h2>
      <p className="mt-4 md:mt-6 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Discover our top-rated courses across various categories. From coding and design to
        business and wellness, our courses are crafted to deliver results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                gap-8 md:gap-6 px-4 md:px-0 w-full max-w-7xl mx-auto my-12 md:my-16">
        {allCourses.slice(0, 4).map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
      <Link to={'/course-list'} onClick={() => scrollTo(0, 0)}
        className='text-slate-700 font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors duration-200 px-10 py-3 rounded-full'>
        Explore all courses
      </Link>
    </div>
  )
}

export default CoursesSection