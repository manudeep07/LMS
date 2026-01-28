import React, { useState } from "react";
import { assets } from "../../assets/assets";

const CourseContentSection = ({ course }) => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (index) => {
    setOpenChapter(openChapter === index ? null : index);
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Course Content</h2>

      <div className="space-y-4">
        {course.courseContent.map((chapter, idx) => (
          <div
            key={idx}
            className="border rounded-lg bg-white shadow hover:shadow-md transition"
          >
            {/* Chapter Header */}
            <button
              onClick={() => toggleChapter(idx)}
              className="w-full flex justify-between items-center px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <img src={assets.lesson_icon} className="w-5" alt="" />
                <h3 className="text-lg font-semibold">
                  {chapter.chapterOrder}. {chapter.chapterTitle}
                </h3>
              </div>

              <img
                src={openChapter === idx ? assets.down_arrow_icon : assets.arrow_icon}
                className={`w-5 transition-transform ${
                  openChapter === idx ? "rotate-180" : "rotate-0"
                }`}
                alt="toggle"
              />
            </button>

            {/* Chapter Content */}
            {openChapter === idx && (
              <div className="px-4 pb-4 space-y-3">
                {chapter.chapterContent.map((lec, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2"
                  >
                    {/* Lecture Title */}
                    <div className="flex items-center gap-3">
                      <img src={assets.play_icon} className="w-4 opacity-70" alt="" />
                      <p className="font-medium">
                        {lec.lectureOrder}. {lec.lectureTitle}
                      </p>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2">
                      <img
                        src={assets.time_clock_icon}
                        className="w-4 opacity-70"
                        alt=""
                      />
                      <p className="text-sm text-gray-600">
                        {lec.lectureDuration} min
                      </p>
                    </div>

                    {/* Free Preview Badge */}
                    {lec.isPreviewFree && (
                      <span className="text-green-600 text-sm font-semibold">
                        Free Preview
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContentSection;
