import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'
const CourseCard = ({ course }) => {
    const { currency, calculateRating } = useContext(AppContext);
    return (
        <Link to={'/course/' + course._id} onClick={() => scrollTo(0, 0,)}
            className='group border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 pb-5 overflow-hidden rounded-xl flex flex-col h-full'>
            <div className="aspect-[16/9] w-full bg-gray-50 overflow-hidden">
                <img className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' src={course.courseThumbnail} alt="" />
            </div>
            <div className='p-4 text-left flex flex-col flex-grow'>
                <h3 className='text-lg font-semibold text-slate-800 line-clamp-2 leading-tight mb-2'>{course.courseTitle}</h3>
                <p className='text-sm text-slate-500 mb-3'>{course.educator.name}</p>
                <div className='mt-auto'>
                    <div className='flex items-center space-x-2 mb-2'>
                        <p className='text-sm font-medium text-slate-700'>{calculateRating(course)}</p>
                        <div className='flex items-center'>
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} className='w-3.5 h-3.5 opacity-90' alt="stars" />
                            )
                            )}
                        </div>
                        <p className='text-xs text-slate-400'>({course.courseRatings.length})</p>
                    </div>
                    <p className='text-lg font-bold text-slate-900'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard