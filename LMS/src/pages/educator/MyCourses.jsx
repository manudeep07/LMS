import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyCourses = () => {
  const { currency, serverUrl, isEducator, getToken } = useContext(AppContext)
  const [courses, setCourses] = useState(null)

  const fetchEducatorCourses = async () => {
    try {
      const token = await getToken()
      const { data } = await axios.get(`${serverUrl}/api/educator/my-courses`, { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        setCourses(data.courses)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (isEducator) {
      fetchEducatorCourses()
    }
  }, [isEducator])

  if (!courses) return <Loading />

  return (
    <div className="flex flex-col items-start gap-8 md:p-10 p-6 w-full max-w-7xl mx-auto">
      <div className="w-full">
        <h2 className="pb-4 text-2xl font-bold text-slate-900 tracking-tight">
          My Courses
        </h2>

        <div className="w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
          <div className="w-full overflow-x-auto custom-scrollbar">
            <table className="w-full text-left whitespace-nowrap">
              {/* Table Header */}
              <thead className="bg-slate-50/50 border-b border-gray-100">
                <tr className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  <th className="px-8 py-4">
                    Course
                  </th>
                  <th className="px-8 py-4">
                    Earnings
                  </th>
                  <th className="px-8 py-4 hidden sm:table-cell">
                    Students
                  </th>
                  <th className="px-8 py-4 hidden md:table-cell">
                    Published On
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-50 text-sm font-medium text-slate-600">
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/60 transition-colors duration-200 group"
                  >
                    {/* Course */}
                    <td className="px-8 py-5 flex items-center gap-4">
                      <img
                        src={course.courseThumbnail}
                        alt="course"
                        className="w-12 h-12 rounded-lg object-cover shadow-sm bg-gray-100"
                      />
                      <span className="text-slate-900 font-semibold group-hover:text-indigo-600 transition-colors truncate max-w-xs block">
                        {course.courseTitle}
                      </span>
                    </td>

                    <td className="px-8 py-5 text-slate-500">
                      {currency}
                      {Math.floor(
                        course.enrolledStudents.length *
                        (course.coursePrice -
                          (course.discount * course.coursePrice) / 100)
                      )}
                    </td>

                    {/* Students */}
                    <td className="px-8 py-5 hidden sm:table-cell text-slate-500">
                      {course.enrolledStudents.length}
                    </td>

                    {/* Published Date */}
                    <td className="px-8 py-5 hidden md:table-cell text-slate-400">
                      {new Date(course.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCourses
