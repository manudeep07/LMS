import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';
import { assets } from '../../assets/assets';
import Footer from '../../components/student/Footer';
import Rating from '../../components/student/Rating'

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);

  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);

  const { courseId } = useParams();

  // Get selected course
  useEffect(() => {
    if (enrolledCourses.length > 0) {
      const course = enrolledCourses.find(
        (course) => course._id === courseId
      );
      setCourseData(course);
    }
  }, [enrolledCourses, courseId]);

  // Toggle chapter accordion
  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* PAGE WRAPPER */}
      <div className="flex justify-center">
        <div className="w-full max-w-6xl px-4 my-14 ">

          {/* VIDEO PLAYER */}
          <div className="aspect-video flex justify-center mb-6">
            {playerData ? (
              <div className="w-full">
                <YouTube
                  videoId={playerData.lectureUrl.split('/').pop()}
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                      controls: 1,
                      modestbranding: 1,
                      rel: 0,
                    },
                  }}
                  iframeClassName="w-full aspect-video"
                />

                <div className="flex justify-between items-center mt-1">
                  <p className="font-medium">
                    {playerData.chapter}.{playerData.lecture}{' '}
                    {playerData.lectureTitle}
                  </p>
                  <button className="text-blue-600 font-medium">
                    Mark Complete
                  </button>
                </div>
              </div>
            ) : (
              <img
                src={courseData?.courseThumbnail}
                alt="Course Thumbnail"
                className="w-full aspect-video object-cover rounded"
              />
            )}
          </div>

          {/* COURSE STRUCTURE */}
          <div className="mb-16 text-gray-800 mt-16">
            <h1 className="text-xl font-semibold mb-4">
              Course Structure
            </h1>

            {courseData?.courseContent?.map((chapter, index) => (
              <div
                key={index}
                className="border border-gray-300 bg-white rounded mb-3"
              >
                {/* CHAPTER HEADER */}
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={assets.down_arrow_icon}
                      alt="arrow"
                      className={`transition-transform ${
                        openSection[index] ? 'rotate-180' : ''
                      }`}
                    />
                    <p className="font-medium">
                      {chapter.chapterTitle}
                    </p>
                  </div>

                  <p className="text-sm">
                    {chapter.chapterContent.length} lectures •{' '}
                    {calculateChapterTime(chapter)}
                  </p>
                </div>

                {/* LECTURES */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSection[index] ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <ul className="border-t border-gray-300 px-4 py-2">
                    {chapter.chapterContent.map((lecture, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 py-2"
                      >
                        <img
                          src={
                            playerData?.chapter === index + 1 &&
                            playerData?.lecture === i + 1
                              ? assets.blue_tick_icon
                              : assets.play_icon
                          }
                          alt="icon"
                          className="mt-1"
                        />

                        <div className="flex justify-between w-full text-sm md:text-base">
                          <p>{lecture.lectureTitle}</p>

                          <div className="flex gap-3">
                            {lecture.lectureUrl && (
                              <p
                                className="text-blue-500 cursor-pointer"
                                onClick={() =>
                                  setPlayerData({
                                    ...lecture,
                                    chapter: index + 1,
                                    lecture: i + 1,
                                  })
                                }
                              >
                                Watch
                              </p>
                            )}
                            <p className="text-gray-600">
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ['h', 'm'] }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h1>Rate this Course:</h1>
            <Rating />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Player;
