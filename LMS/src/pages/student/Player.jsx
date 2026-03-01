import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';
import { assets } from '../../assets/assets';
import Footer from '../../components/student/Footer';
import Rating from '../../components/student/Rating';
import axios from 'axios';
import { toast } from 'react-toastify';

const Player = () => {
  const { enrolledCourses, calculateChapterTime, serverUrl, getToken, userData, fetchUserEnrolledCourses } = useContext(AppContext);

  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [completedLectures, setCompletedLectures] = useState([]);
  const [initialRating, setInitialRating] = useState(0);

  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const { courseId } = useParams();

  // Get selected course
  useEffect(() => {
    if (enrolledCourses.length > 0) {
      const course = enrolledCourses.find(
        (course) => course._id === courseId
      );
      setCourseData(course);

      if (course && userData && course.courseRatings) {
        const userRatingObj = course.courseRatings.find(r =>
          r.userId === userData._id || (r.userId && r.userId._id === userData._id)
        );
        if (userRatingObj) {
          setInitialRating(userRatingObj.rating);
        }
      }
    }
  }, [enrolledCourses, courseId, userData]);

  // Fetch initial progress when course is loaded
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        if (!userData || !courseId) return;
        const token = await getToken();
        const { data } = await axios.post(`${serverUrl}/api/user/get-course-progress`, { courseId }, { headers: { Authorization: `Bearer ${token}` } });
        if (data.success && data.courseProgress) {
          setCompletedLectures(data.courseProgress.lectureCompleted || []);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchProgress();
  }, [userData, courseId]);

  // Toggle chapter accordion
  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const markLectureAsCompleted = async (lectureId) => {
    try {
      if (!userData) return toast.error("Please login first")

      const token = await getToken()
      const { data } = await axios.post(`${serverUrl}/api/user/update-course-progress`, { courseId, lectureId }, { headers: { Authorization: `Bearer ${token}` } })

      if (data.success) {
        toast.success(data.message)
        setCompletedLectures((prev) => {
          if (prev.includes(lectureId)) return prev;
          return [...prev, lectureId];
        });
        // Refresh progress logic or enrollments if needed, depending on how UI reads it
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleRate = async (rating) => {
    try {
      if (!userData) return toast.error("Please login first")

      const token = await getToken()
      const { data } = await axios.post(`${serverUrl}/api/user/add-rating`, { courseId, rating }, { headers: { Authorization: `Bearer ${token}` } })

      if (data.success) {
        toast.success(data.message)
        fetchUserEnrolledCourses();
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 max-w-screen-2xl mx-auto my-8">

        {/* LEFT COLUMN: COURSE STRUCTURE (SIDEBAR) */}
        <div className="lg:w-1/3 xl:w-1/4 order-2 lg:order-1 border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden flex-shrink-0 h-[calc(100vh-120px)] flex flex-col">
          <div className="p-5 border-b border-gray-100 bg-slate-50">
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">
              Course Content
            </h2>
          </div>

          <div className="overflow-y-auto flex-1 custom-scrollbar">
            {courseData?.courseContent?.map((chapter, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 bg-white">
                <div
                  className="flex items-center justify-between px-5 py-4 cursor-pointer select-none hover:bg-slate-50 transition-colors"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-3">
                    <img src={assets.down_arrow_icon} alt="arrow" className={`w-3.5 h-3.5 transform transition-transform duration-200 ${openSection[index] ? 'rotate-180' : ''}`} />
                    <p className="font-semibold text-slate-800 text-sm">{chapter.chapterTitle}</p>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{chapter.chapterContent.length} / {calculateChapterTime(chapter)}</p>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="bg-slate-50/50 flex flex-col border-t border-gray-50">
                    {chapter.chapterContent.map((lecture, i) => {
                      const isPlaying = playerData && playerData.chapter === index + 1 && playerData.lecture === i + 1;
                      const isCompleted = completedLectures.includes(lecture.lectureId);

                      return (
                        <li key={i} className={`flex items-start justify-between px-5 py-3 cursor-pointer transition-colors ${isPlaying ? 'bg-indigo-50 border-l-2 border-indigo-600' : 'hover:bg-gray-100 border-l-2 border-transparent'}`}
                          onClick={() => setPlayerData({ ...lecture, chapter: index + 1, lecture: i + 1 })}>
                          <div className="flex gap-3 items-start flex-1 min-w-0">
                            <div className="mt-0.5 flex-shrink-0">
                              {isCompleted ? (
                                <svg className="w-4 h-4 text-indigo-500" xmlns="http://www.w3.org/-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                              ) : isPlaying ? (
                                <svg className="w-4 h-4 text-indigo-600 animate-pulse" xmlns="http://www.w3.org/-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                              ) : (
                                <svg className="w-4 h-4 text-slate-300" xmlns="http://www.w3.org/-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm truncate ${isPlaying ? 'text-indigo-900 font-semibold' : isCompleted ? 'text-slate-500 font-medium' : 'text-slate-700 font-medium'}`}>{lecture.lectureTitle}</p>
                              <p className="text-xs text-slate-400 mt-0.5 tabular-nums tracking-wide">{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: VIDEO PLAYER */}
        <div className="lg:w-2/3 xl:w-3/4 order-1 lg:order-2 flex flex-col gap-6">
          <div className="w-full bg-black rounded-2xl overflow-hidden shadow-sm aspect-video flex justify-center items-center group relative">
            {playerData ? (
              <YouTube
                videoId={getYoutubeId(playerData.lectureUrl)}
                opts={{ width: '100%', height: '100%', playerVars: { autoplay: 1, controls: 1, modestbranding: 1, rel: 0 } }}
                iframeClassName="w-full h-full absolute inset-0"
                className="w-full h-full"
              />
            ) : (
              <img src={courseData?.courseThumbnail} alt="Course Thumbnail" className="w-full h-full object-cover" />
            )}
          </div>

          {playerData && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div>
                <p className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-1">
                  Chapter {playerData.chapter} • Lecture {playerData.lecture}
                </p>
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {playerData.lectureTitle}
                </h1>
              </div>

              <button
                onClick={() => markLectureAsCompleted(playerData.lectureId)}
                className={`py-2.5 px-6 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer 
                  ${completedLectures.includes(playerData.lectureId)
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow-md'}`}
              >
                {completedLectures.includes(playerData.lectureId) ? (
                  <><svg className="w-4 h-4" xmlns="http://www.w3.org/-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed</>
                ) : 'Mark as Complete'}
              </button>
            </div>
          )}

          <div className='flex gap-4 items-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm'>
            <h3 className='font-bold text-slate-800 tracking-tight'>Rate this Course</h3>
            <Rating initialRating={initialRating} onRate={handleRate} />
          </div>
        </div>
      </div>
      <Footer />
    </>


  );
};

export default Player;
