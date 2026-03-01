import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../components/student/NavBar'
import SearchBar from '../../components/student/SearchBar'
import { AppContext } from '../../context/AppContext'
import CourseCard from '../../components/student/CourseCard'
import { useParams } from 'react-router-dom'
import Footer from '../../components/student/Footer'
import { assets } from '../../assets/assets'
const CoursesList = () => {
  const { allCourses, navigate } = useContext(AppContext);
  const { input } = useParams()
  const [filteredcourses, setFilteredcourses] = useState([])
  useEffect(
    () => {
      const temp = allCourses.slice();
      input ?
        setFilteredcourses(temp.filter(item => item.courseTitle.toLowerCase().includes(input.toLowerCase())))
        : setFilteredcourses(temp)
    }
    , [input, allCourses])
  return (
    <>
      <div className='relative md:px-36 px-8 pt-12 pb-24 text-left min-h-screen bg-white'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-8 border-b border-gray-100'>
          <div>
            <h1 className='text-4xl font-extrabold tracking-tight text-slate-900 mb-2'>
              Course Catalog
            </h1>
            <p className="text-slate-500 font-medium text-sm md:text-base flex items-center gap-2">
              <span className='hover:text-indigo-600 transition-colors cursor-pointer' onClick={() => navigate('/')}>Home</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-900">Course List</span>
            </p>
          </div>
          <div className="w-full md:w-80">
            <SearchBar data={input} />
          </div>
        </div>

        {input && (
          <div className="inline-flex items-center gap-3 px-4 py-2 mt-8 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-slate-700 shadow-sm">
            <p>Showing results for "<span className="text-indigo-600">{input}</span>"</p>
            <button
              onClick={() => navigate('/course-list')}
              className="p-1 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            >
              <img className='w-3 h-3 opacity-60' src={assets.cross_icon} alt="clear filter" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mt-8">
          {filteredcourses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>


      </div>
      <Footer />
    </>
  )
}

export default CoursesList