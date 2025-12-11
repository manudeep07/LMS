import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../../components/student/Footer'
import YouTube from 'react-youtube'
const CourseDetails = () => {
  const {id}=useParams()
  const {allCourses,calculateRating,calculateChapterTime,calculateCourseDuration,calculateNoOfLectures,currency}=useContext(AppContext)
  const [courseData,setCourseData]=useState(null);
  const [openSection,setopenSection]=useState({});
  const [isAlreadyEnrolled,setisAlreadyEnrolled]=useState(true);
  const [playerData,setPlayerData]=useState(false);
  const fetchCourseData= async ()=>{
    const findCourse= allCourses.find(course=>course._id==id)
    setCourseData(findCourse)
  }
  useEffect(()=>{
    fetchCourseData();
  },[allCourses])

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
    <div className='flex md:flex-row flex-col-reverse relative items-start gap-10
      justify-between md:px-36 px-8 md:pt-30 pt-20 text-left '>
       <div className="absolute top-0 left-0 w-full h-24 z-10 bg-linear-to-b from-cyan-100/70"></div>

 
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

                  <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none' onClick={()=>toggleSection(index)}>
                    <div className='flex items-center gap-2'>
                        <img src={assets.down_arrow_icon} className={`transform transition  ${openSection[index]? 'rotate-180': ''}`} alt="arrow_icon" />
                        <p className='font-medium md:text-base text-sm' >{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm md:text-base'>{chapter.chapterContent.length} lectures-{calculateChapterTime(chapter)}</p>
                  </div>

                  {/* lecture section */}

                  <div className={`overflow-hidden transition-all duration-300 ${openSection[index]? 'max-h-96' : 'max-h-0'}`}>
                    <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture,i)=>(
                        <li key={i} className='flex items-start gap-2 py-2'>
                          
                          <img src={assets.play_icon} alt="playicon" className='mt-1' />
                          
                          <div className='flex items-center justify-between w-full text-gray-800 text-xs md:text-base'>
                            <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-2'>
                            {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer' onClick={()=>setPlayerData({videoId:lecture.lectureUrl.split('/').pop()})}>Preview</p>}
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
             {/* course description */}
             <div>
                <div className='flex flex-col leading-relaxed py-20 text-sm md:text-lg '>
                  <h3 className='text-xl font-semibold text-gray-800'>Course Description</h3>
                   <p className='pt-3 rich-text'
                    dangerouslySetInnerHTML={{__html:courseData.courseDescription}}>{}
                    </p>
                </div>
             </div>
        </div>
        
      </div>

      {/* rightcolumn */}
      {/* course card section for enrollment */}
      {/* Right Column - Course Card */}


<div className="w-full md:w-80 bg-white shadow-lg border-none p-4  md:top-24 mr-32">
  {
  playerData ? (
    <div className="relative">

      {/* YouTube Player */}
      <YouTube
        videoId={playerData.videoId}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
        }}
        iframeClassName='w-full aspect-video'
      />

      {/* Remove Video & Show Thumbnail Again */}
      <button
        onClick={() => setPlayerData(null)}
        className="absolute top-3 right-0 cursor-pointer text-white px-3 py-1 rounded shadow"
      >
        x
      </button>

    </div>
  ) : (
    <img
      src={courseData.courseThumbnail}
      alt=""
      className="w-full aspect-video object-cover cursor-pointer"
    />
  )
}




  <div className="pt-4">
    {/* Time left */}
    <div className="flex items-center gap-2 mb-2">
      <img className="w-3.5" src={assets.time_left_clock_icon} alt="time left clock icon" />
      <p className="text-red-500 text-sm">
        <span className="font-medium">5 days</span> left at this price!
      </p>
    </div>
  

    {/* Price + Discount */}
    <div className="flex items-center gap-3 mb-3">
      <p className="text-2xl font-bold text-gray-800">
        {currency}
        {(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}
      </p>

      <p className="line-through text-gray-500 text-sm">
        {currency}{courseData.coursePrice}
      </p>

      <p className="text-red-500 text-sm font-semibold">
        {courseData.discount}% off
      </p>
    </div>
   


    {/* Rating, Duration, Lessons */}
    <div className="flex items-center gap-2 text-gray-700 text-sm mb-5">
      
      <div className="flex items-center gap-1">
        <img className="w-4 h-4" src={assets.star} />
        <p>{calculateRating(courseData)}</p>
      </div>
                <span>|</span>
      <div className="flex items-center gap-1 ">
        <img className="w-4 h-4" src={assets.time_clock_icon} />
        <p>{calculateCourseDuration(courseData)}</p>
      </div>
       <span>|</span>
      <div className="flex items-center gap-1">
        <img className="w-4 h-4" src={assets.lesson_icon} />
        <p>{calculateNoOfLectures(courseData)} lessons</p>
      </div>
    </div>

    {/* Enroll Button */}
    <button className="bg-blue-600 text-white text-base font-medium py-2.5 rounded-lg w-full mb-5 cursor-pointer hover:bg-blue-700">
      {isAlreadyEnrolled? 'Already Enrolled':'Enroll Now'}
      
    </button>

    {/* What's in the course */}
    <div>
      <h3 className="text-lg font-semibold mb-2">What's in the course?</h3>

      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
        <li>Lifetime access with free updates.</li>
        <li>Step-by-step, hands-on project guidance.</li>
        <li>Downloadable resources and source code.</li>
        <li>Quizzes to test your knowledge.</li>
        <li>Certificate of completion.</li>
      </ul>
    </div>

  </div>
</div>


    </div>
    <Footer/>
      </>
  ) : <Loading/> 

}


export default CourseDetails