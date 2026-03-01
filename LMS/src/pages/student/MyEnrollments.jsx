import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const MyEnrollments = () => {
  const { enrolledCourses, fetchUserEnrolledCourses, calculateCourseDuration, calculateNoOfLectures, navigate, serverUrl, getToken, userData } = useContext(AppContext);



  const [progressArray, setProgressArray] = useState([]);
  const getCourseProgress = async () => {
    try {
      const token = await getToken();
      const tempProgressArray = await Promise.all(
        enrolledCourses.map(async (course) => {
          const { data } = await axios.post(
            `${serverUrl}/api/user/get-course-progress`,
            { courseId: course._id }, // body
            {
              headers: { Authorization: `Bearer ${token}` }
            }
          );
          const totalLectures = calculateNoOfLectures(course)
          const lecturesCompleted = data.courseProgress ? data.courseProgress.lectureCompleted.length : 0;
          return { lecturesCompleted, totalLectures }
        })
      )
      setProgressArray(tempProgressArray)
    } catch (error) {
      toast.error(error.message)
    }
  }


  useEffect(() => {
    if (userData) {
      fetchUserEnrolledCourses();
    }
  }, [userData]);

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      getCourseProgress();
    }
  }, [enrolledCourses]);

  // Calculate percentage for a given course
  const calculatePercentage = (index) => {
    const p = progressArray[index];

    if (!p || p.totalLectures === 0) return 0;

    return (p.lecturesCompleted / p.totalLectures) * 100;
  };

  return (
    <>

      <div className="max-w-7xl mx-auto md:px-10 px-6 pt-12 pb-24 w-full">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Enrollments</h1>

        {enrolledCourses.length === 0 && (
          <div className="mt-10 bg-slate-50 border border-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-bold text-slate-800 mb-2">No active enrollments</h3>
            <p className="text-slate-500 max-w-sm">You haven't enrolled in any courses yet. Explore our catalog to start learning.</p>
            <button
              onClick={() => navigate('/')}
              className="mt-6 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
            >
              Browse Courses
            </button>
          </div>
        )}

        {/* DESKTOP TABLE */}
        <div className="hidden md:block w-full mt-8 bg-white border border-gray-200 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-slate-50/50 border-b border-gray-100">
              <tr className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                <th className="px-8 py-4 w-[50%]">Course</th>
                <th className="px-8 py-4 w-32">Duration</th>
                <th className="px-8 py-4 w-40">Completed</th>
                <th className="px-8 py-4 w-32">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 text-sm font-medium text-slate-600">
              {enrolledCourses.map((course, index) => (
                <tr key={index} className="hover:bg-slate-50/60 transition-colors duration-200 group">
                  <td className="px-8 py-5 flex items-center gap-4">
                    <img
                      src={course.courseThumbnail}
                      alt={course.courseTitle}
                      className="w-14 h-14 rounded-lg object-cover cursor-pointer shadow-sm bg-gray-100 border border-gray-200"
                      onClick={() => navigate(`/player/${course._id}`)}
                    />
                    <span
                      className="text-slate-900 font-semibold cursor-pointer group-hover:text-indigo-600 transition-colors truncate block max-w-xs"
                      onClick={() => navigate(`/player/${course._id}`)}
                    >
                      {course.courseTitle}
                    </span>
                  </td>

                  <td className="px-8 py-5 text-slate-500">
                    {calculateCourseDuration(course) || "8h 30m"}
                  </td>

                  <td className="px-8 py-5 w-40">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${calculatePercentage(index) === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                          style={{ width: `${calculatePercentage(index)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 tabular-nums">
                        {Math.round(calculatePercentage(index))}%
                      </span>
                    </div>
                  </td>

                  <td className="px-8 py-5 w-32">
                    {calculatePercentage(index) === 100 ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-600 uppercase tracking-wider">
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-50 text-indigo-600 uppercase tracking-wider">
                        In Progress
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden mt-8 space-y-4">
          {enrolledCourses.map((course, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className="w-20 h-20 rounded-lg object-cover cursor-pointer shadow-sm border border-gray-100 shrink-0"
                    onClick={() => navigate(`/player/${course._id}`)}
                  />

                  <div className="flex-1 min-w-0">
                    <h2
                      className="font-bold text-slate-900 leading-tight mb-1 cursor-pointer truncate"
                      onClick={() => navigate(`/player/${course._id}`)}
                    >
                      {course.courseTitle}
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mb-2">
                      {calculateCourseDuration(course) || "8h 30m"}
                    </p>

                    <div>
                      {calculatePercentage(index) === 100 ? (
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 uppercase tracking-wider">
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-600 uppercase tracking-wider">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full pt-3 border-t border-gray-50">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Progress</span>
                    <span className="text-xs font-bold text-slate-700 tabular-nums">{Math.round(calculatePercentage(index))}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${calculatePercentage(index) === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                      style={{ width: `${calculatePercentage(index)}%` }}
                    ></div>
                  </div>
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
