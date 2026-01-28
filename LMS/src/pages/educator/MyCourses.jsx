import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'

const MyCourses = () => {
  const { allCourses, currency } = useContext(AppContext)
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    setCourses(allCourses)
  }, [allCourses])

  if (!courses) return <Loading />

  return (
    <div className="flex flex-col items-start gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0 w-full">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium text-gray-800">
          My Courses
        </h2>

        <div className="w-full overflow-x-auto mb-4">
          <div className="flex flex-col items-center max-w-5xl w-full rounded-md bg-white border">
            <table className="table-fixed md:table-auto w-full">

              {/* Table Header */}
              <thead className="sticky top-0 bg-blue-50 z-10 border-b border-gray-500/20">
                <tr className="text-gray-900 text-sm text-left">
                  <th className="px-4 py-3 font-semibold">
                    Course
                  </th>
                  <th className="px-4 py-3 font-semibold ">
                    Earnings
                  </th>
                  <th className="px-4  py-3 font-semibold hidden sm:table-cell">
                    Students
                  </th>
                  <th className="px-4 py-3 font-semibold hidden md:table-cell">
                    Published On
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-sm text-gray-500">
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-500/20 odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition"
                  >
                    {/* Course */}
                    <td className="md:px-4 px-2 py-3 flex items-center gap-3">
                      <img
                        src={course.courseThumbnail}
                        alt="course"
                        className="w-10 h-10 rounded-md object-cover border"
                      />
                      <span className="truncate font-medium text-gray-700">
                        {course.courseTitle}
                      </span>
                    </td>

                  
                    <td className="px-4 py-3 ">
                      {currency}
                      {Math.floor(
                        course.enrolledStudents.length *
                        (course.coursePrice -
                          (course.discount * course.coursePrice) / 100)
                      )}
                    </td>

                    {/* Students */}
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {course.enrolledStudents.length}
                    </td>

                    {/* Published Date */}
                    <td className="px-4 py-3 hidden md:table-cell">
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
