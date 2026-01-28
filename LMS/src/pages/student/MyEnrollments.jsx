import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

const MyEnrollments = () => {
  const { enrolledCourses, fetchUserEnrolledCourses, calculateCourseDuration, navigate } =
    useContext(AppContext);

  useEffect(() => {
    fetchUserEnrolledCourses();
  }, []);

  // ✅ FIXED progress array
  const [progressArray] = useState(
    [{ lectureCompleted: 1, totalLectures: 4 },
      { lectureCompleted: 0, totalLectures: 4 },
      { lectureCompleted: 3, totalLectures: 4 },
      { lectureCompleted: 4, totalLectures: 4 },
      { lectureCompleted: 2, totalLectures: 4 },
      { lectureCompleted: 3, totalLectures: 4 },
      { lectureCompleted: 1, totalLectures: 4 },
      { lectureCompleted: 3, totalLectures: 4 },
      { lectureCompleted: 1, totalLectures: 4 },
      { lectureCompleted: 4, totalLectures: 4 },
      { lectureCompleted: 0, totalLectures: 4 },
      { lectureCompleted: 1, totalLectures: 4 },
      { lectureCompleted: 3, totalLectures: 4 },
      { lectureCompleted: 1, totalLectures: 4 },
      { lectureCompleted: 2, totalLectures: 4 },
      { lectureCompleted: 2, totalLectures: 4 },
      { lectureCompleted: 2, totalLectures: 4 },
      { lectureCompleted: 2, totalLectures: 4 },
      { lectureCompleted: 2, totalLectures: 4 },

    ]
  );

  // Calculate percentage for a given course
  const calculatePercentage = (index) => {
    const p = progressArray[index];
    return (p.lectureCompleted / p.totalLectures) * 100;
  };

  return (
    <>
      <div className="md:px-36 px-6 pt-10 pb-20">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>

        {enrolledCourses.length === 0 && (
          <p className="mt-10 text-gray-500">You haven’t enrolled in any courses yet.</p>
        )}

        {/* DESKTOP TABLE */}
        <table className="table-auto w-full mt-10 hidden md:table border-collapse">
          <thead className="bg-gray-100 text-gray-900 border text-sm text-left">
            <tr>
              <th className="px-4 py-3 font-semibold w-[50%]">Course</th>
              <th className="px-2 py-3 font-semibold w-32">Duration</th>
              <th className="px-4 py-3 font-semibold w-40">Completed</th>
              <th className="px-4 py-3 font-semibold w-32">Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 duration-200">
                <td className="px-2 py-4 flex items-center gap-2">
                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className="h-16 rounded object-cover cursor-pointer"
                    onClick={() => navigate(`/player/${course._id}`)}
                  />
                  <span className="font-medium">{course.courseTitle}</span>
                </td>

                <td className="px-2 py-4 w-32">
                  {calculateCourseDuration(course) || "8h 30m"}
                </td>

                <td className="px-4 py-4 w-40">
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="h-2 bg-green-500 rounded"
                      style={{ width: `${calculatePercentage(index)}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">
                    {Math.round(calculatePercentage(index))}%
                  </span>
                </td>

                <td className="px-4 py-4 w-32">
                  {calculatePercentage(index) === 100 ? (
                    <span className="text-green-600 font-semibold">Completed</span>
                  ) : (
                    <span className="text-blue-600 font-semibold">In Progress</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* MOBILE CARDS */}
        <div className="md:hidden mt-10 space-y-6">
          {enrolledCourses.map((course, index) => (
            <div key={index} className="border rounded-xl p-4 shadow-sm bg-white">
              <div className="flex items-center gap-4">
                <img
                  src={course.courseThumbnail}
                  alt={course.courseTitle}
                  className="h-20 rounded object-cover cursor-pointer"
                  onClick={() => navigate(`/player/${course._id}`)}
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{course.courseTitle}</h2>
                  <p className="text-sm text-gray-500">
                    {calculateCourseDuration(course)}
                  </p>

                  <div className="mt-3">
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className="h-2 bg-green-500 rounded"
                        style={{ width: `${calculatePercentage(index)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {Math.round(calculatePercentage(index))}% Completed
                    </span>
                  </div>

                  <p className="mt-2 font-semibold">
                    {calculatePercentage(index) === 100 ? (
                      <span className="text-green-600">Completed</span>
                    ) : (
                      <span className="text-blue-600">In Progress</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyEnrollments;
