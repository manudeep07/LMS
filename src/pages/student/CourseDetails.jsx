import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
const CourseDetails = () => {
  const {id}=useParams()
  const {allCourses,calculateRating,calculateChapterTime,calculateCourseDuration,calculateNoOfLectures}=useContext(AppContext)
  const [courseData,setCourseData]=useState(null);
  const [openSection,setopenSection]=useState({});
  const fetchCourseData= async ()=>{
    const findCourse= allCourses.find(course=>course._id==id)
    setCourseData(findCourse)
  }
  useEffect(()=>{
    fetchCourseData();
  },[])

  const toggleSection=(index)=>{
    setopenSection((prev)=>(
      {...prev,
        [index]:!prev[index]
      }
    )

    )
  }

  return courseData ? (
    <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start
      justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
       <div className="absolute top-0 left-0 w-full h-40 z-10 bg-linear-to-b from-cyan-100/70"></div>

 
      {/* leftcolumn */}
      <div className='max-w-xl z-10 text-gray-500'>
        <h1 className='md:text-course-deatai1s-heading-1arge
        font-semibold text-gray-800'>{courseData.courseTitle}</h1>
        <p dangerouslySetInnerHTML={{__html:courseData.courseDescription.slice(0,200)}} className='pt-4 text-base '>{}</p>
        {/* review and rating */}
        <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
            <p className='text-gray-700'>{calculateRating(courseData)}</p>
            <div className='flex items-center'>
                {[...Array(5)].map((_,i)=>(
                    <img key={i} src={i<Math.floor(calculateRating(courseData))? assets.star : assets.star_blank} className='w-3.5 h-3.5' alt="stars" />
                )
             )}
            </div>
        <p className='text-gray-500'>({courseData.courseRatings.length}{courseData.courseRatings>1 ? ' ratings':' rating'})</p>
        <p>({courseData.enrolledStudents.length} {courseData.enrolledStudents.length>1 ? 'students':'student'})</p>
        </div>
        <p className='text-sm'>Course by <span className='text-blue-600 underline'>Manudeep</span></p> 

        {/* course structure section */}
        <div className='pt-8 text-gray-800'>
             <h2 className='text-xl font-semibold'>Course Structure</h2>

             
             <div className='pt-5'>
              {courseData.courseContent.map((chapter,index)=>(
                <div key={index} className='border border-gray-300 bg-white  rounded'>

                  {/* chapter section */}

                  <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none'>
                    <div className='flex items-center gap-2'>
                        <img src={assets.down_arrow_icon} alt="arrow_icon" />
                        <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-base'>{chapter.chapterContent.length} lectures-{calculateChapterTime(chapter)}</p>
                  </div>

                  {/* lecture section */}

                  <div className='overflow-hidden transition-all duration-300 max-h-96 '>
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture,i)=>(
                        <li key={index} className='flex items-start gap-2 py-2'>
                          
                          <img src={assets.play_icon} alt="playicon" className='mt-1' />
                          
                          <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-base'>
                            <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-2'>
                            {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer'>Preview</p>}
                          <p>{humanizeDuration(lecture.lectureDuration*60*1000,{units:["h","m"]})}</p>

                          </div>
                         </div>

                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
             </div>
        </div>
        
      </div>
      {/* rightcolumn */}
      <div></div>
    </div>
      </>
  ) : <Loading/>

}


export default CourseDetails