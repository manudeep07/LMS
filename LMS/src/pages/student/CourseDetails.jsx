import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Footer from '../../components/student/Footer'
import YouTube from 'react-youtube'
import { toast } from 'react-toastify'
import axios from 'axios'
const CourseDetails = () => {
  const { id } = useParams()
  const { allCourses, calculateRating, calculateChapterTime
    , calculateCourseDuration, calculateNoOfLectures,
    currency, serverUrl, userData, getToken } = useContext(AppContext)
  const [courseData, setCourseData] = useState(null);
  const [openSection, setopenSection] = useState({});
  const [isAlreadyEnrolled, setisAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(false);

  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const fetchCourseData = async () => {
    try {
      const { data } = await axios.get(`${serverUrl}/api/course/${id}`)
      if (data.success) {
        setCourseData(data.course)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const enrollCourse = async () => {
    try {
      if (!userData) {
        return toast.warn("Login first to enroll in the course")
      }
      if (isAlreadyEnrolled) {
        return toast.warn("Already Enrolled")
      }

      const token = await getToken();
      const { data } = await axios.post(
        `${serverUrl}/api/user/purchase`,
        { courseId: courseData._id },  // request body
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )

      if (data.success) {
        const { paymentUrl } = data;
        window.location.replace(paymentUrl)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {

    fetchCourseData();
  }, [])
  useEffect(() => {
    if (userData && courseData) {
      setisAlreadyEnrolled(userData.enrolledCourses.includes(courseData._id))
    }
  }, [userData, courseData])

  const toggleSection = (index) => {
    setopenSection((prev) => (
      {
        ...prev,
        [index]: !prev[index]
      }
    )

    )
  }

  return courseData ? (
    <>
      <div className='flex md:flex-row flex-col-reverse relative items-start gap-12 justify-between md:px-36 px-8 py-16 text-left bg-white min-h-screen'>
        {/* leftcolumn */}
        <div className='max-w-xl z-10 text-slate-500 w-full'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight'>{courseData.courseTitle}</h1>
          <p dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }} className='pt-4 text-base leading-relaxed hidden sm:block'>{ }</p>

          {/* review and rating */}
          <div className='flex items-center space-x-2 pt-4 pb-2 text-sm'>
            <p className='text-slate-700 font-medium'>{calculateRating(courseData)}</p>
            <div className='flex items-center'>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} className='w-3.5 h-3.5 opacity-90' alt="stars" />
              ))}
            </div>
            <p className='text-slate-400'>({courseData.courseRatings.length}{courseData.courseRatings > 1 ? ' ratings' : ' rating'})</p>
            <span className="text-slate-300">•</span>
            <p className="text-slate-500">{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}</p>
          </div>
          <p className='text-sm text-slate-500'>Course by <span className='text-indigo-600 font-medium ml-1'>{courseData.educator.name}</span></p>

          {/* course structure section */}
          <div className='pt-12 text-slate-800'>
            <h2 className='text-2xl font-bold mb-6'>Course Structure</h2>

            <div className='space-y-3'>
              {courseData.courseContent.map((chapter, index) => (
                <div key={index} className='border border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm'>
                  {/* chapter section */}
                  <div className='flex items-center justify-between px-5 py-4 cursor-pointer select-none hover:bg-slate-50 transition-colors' onClick={() => toggleSection(index)}>
                    <div className='flex items-center gap-3'>
                      <img src={assets.down_arrow_icon} className={`w-4 h-4 transform transition-transform duration-200 ${openSection[index] ? 'rotate-180' : ''}`} alt="arrow_icon" />
                      <p className='font-semibold text-slate-800 text-sm md:text-base'>{chapter.chapterTitle}</p>
                    </div>
                    <p className='text-sm text-slate-500 font-medium'>{chapter.chapterContent.length} lectures <span className="mx-1">•</span> {calculateChapterTime(chapter)}</p>
                  </div>

                  {/* lecture section */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className='flex flex-col px-5 py-3 text-slate-600 border-t border-gray-100 bg-slate-50/50'>
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className='flex items-start gap-3 py-2.5'>
                          <img src={assets.play_icon} alt="playicon" className='w-4 h-4 mt-0.5 opacity-70' />
                          <div className='flex items-center justify-between w-full text-sm font-medium'>
                            <p className="text-slate-700">{lecture.lectureTitle}</p>
                            <div className='flex gap-4 items-center'>
                              {lecture.isPreviewFree && <span className='text-indigo-600 cursor-pointer hover:underline text-xs tracking-wide uppercase' onClick={() => setPlayerData({ videoId: getYoutubeId(lecture.lectureUrl) })}>Preview</span>}
                              <p className="text-slate-400 tabular-nums">{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ["h", "m"] })}</p>
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
            <div className='py-16'>
              <h3 className='text-2xl font-bold text-slate-900 mb-6'>Course Description</h3>
              <div className='rich-text text-slate-600 leading-relaxed' dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></div>
            </div>

            {/* Educator Profile Section */}
            <div className='py-10 border-t border-gray-100'>
              <h3 className='text-2xl font-bold text-slate-900 mb-8'>About the Educator</h3>
              <div className='flex items-start gap-6'>
                <img src={courseData.educator.imageUrl} alt={courseData.educator.name} className='w-20 h-20 rounded-full object-cover border border-gray-200 shadow-sm' />
                <div>
                  <h4 className='text-lg font-bold text-slate-900'>{courseData.educator.name}</h4>
                  <div className='mt-4 flex items-center gap-2'>
                    <span className='px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg uppercase tracking-wider'>
                      {allCourses.filter(c => c.educator._id === courseData.educator._id).length} Courses Created
                    </span>
                  </div>
                </div>
              </div>

              {/* More Courses by this Educator */}
              {allCourses.filter(c => c.educator._id === courseData.educator._id && c._id !== courseData._id).length > 0 && (
                <div className="mt-12">
                  <h4 className='text-lg font-bold text-slate-900 mb-6'>More courses by {courseData.educator.name}</h4>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {allCourses.filter(c => c.educator._id === courseData.educator._id && c._id !== courseData._id).slice(0, 3).map((course, idx) => (
                      <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-slate-50 relative group" onClick={() => window.location.href = `/course/${course._id}`}>
                        <img src={course.courseThumbnail} className="w-full h-32 object-cover" />
                        <div className="p-4">
                          <h5 className="font-bold text-slate-800 text-sm truncate group-hover:text-indigo-600 transition-colors">{course.courseTitle}</h5>
                          <div className="flex justify-between items-center mt-3">
                            <p className="text-xs font-medium text-slate-500">{calculateCourseDuration(course)}</p>
                            <p className="text-sm font-bold text-slate-900">{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Course Card Sticky */}
        <div className="w-full md:w-[380px] bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden sticky top-24 shrink-0">
          {
            playerData ? (
              <div className="relative aspect-video bg-black">
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
                <button onClick={() => setPlayerData(null)} className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-full cursor-pointer transition-colors backdrop-blur-sm z-10">
                  <svg xmlns="http://www.w3.org/-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            ) : (
              <img src={courseData.courseThumbnail} alt="" className="w-full aspect-video object-cover" />
            )
          }

          <div className="p-6">
            {/* Time left */}
            <div className="flex items-center gap-2 mb-4 bg-red-50 text-red-600 px-3 py-1.5 rounded-md w-fit">
              <svg xmlns="http://www.w3.org/-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <p className="text-xs font-semibold uppercase tracking-wide">
                5 days left at this price
              </p>
            </div>

            {/* Price + Discount */}
            <div className="flex items-end gap-3 mb-6">
              <p className="text-4xl font-extrabold text-slate-900 tracking-tight">
                {currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}
              </p>
              <p className="line-through text-slate-400 text-lg mb-1 font-medium">
                {currency}{courseData.coursePrice}
              </p>
              <p className="text-indigo-600 font-bold mb-1.5 bg-indigo-50 px-2 py-0.5 rounded text-sm">
                {courseData.discount}% off
              </p>
            </div>

            {/* Enroll Button */}
            <button onClick={enrollCourse} className="bg-indigo-600 text-white text-lg font-semibold py-3.5 rounded-xl w-full mb-6 cursor-pointer hover:bg-indigo-700 hover:shadow-md transition-all duration-200">
              {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
            </button>

            {/* Rating, Duration, Lessons details */}
            <div className="flex flex-col gap-3 py-5 border-t border-gray-100 text-sm font-medium text-slate-600">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><img className="w-4 h-4 opacity-70" src={assets.lesson_icon} /> Lessons</span>
                <span className="text-slate-900">{calculateNoOfLectures(courseData)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><img className="w-4 h-4 opacity-70" src={assets.time_clock_icon} /> Duration</span>
                <span className="text-slate-900">{calculateCourseDuration(courseData)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><img className="w-4 h-4 opacity-70" src={assets.star} /> Rating</span>
                <span className="text-slate-900">{calculateRating(courseData)} / 5</span>
              </div>
            </div>

            {/* What's in the course */}
            <div className="pt-5 border-t border-gray-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Includes</h3>
              <ul className="text-slate-600 text-sm space-y-3 font-medium">
                <li className="flex gap-2"><span className="text-indigo-500">✓</span> Lifetime access & updates</li>
                <li className="flex gap-2"><span className="text-indigo-500">✓</span> Hands-on project guidance</li>
                <li className="flex gap-2"><span className="text-indigo-500">✓</span> Downloadable resources</li>
                <li className="flex gap-2"><span className="text-indigo-500">✓</span> Certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>


      </div >
      <Footer />
    </>
  ) : <Loading />

}


export default CourseDetails