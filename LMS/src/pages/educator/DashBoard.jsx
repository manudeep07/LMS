import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const DashBoard = () => {
    const {currency}=useContext(AppContext)
    const [dashboardData,setDashboardData]=useState(null)

    const fetchDashboardData=()=>{
      setDashboardData(dummyDashboardData)
    }

    useEffect(()=>{
      fetchDashboardData()
    },[])
    


  return dashboardData?(
    <div className='min-h-screen flex flex-col items-start  gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0 '>
      {/* data */}
      <div className='space-y-5'>
        <div className='flex flex-wrap gap-5 items-center'>


        <div className='flex items-center gap-4 border-2 border-blue-500 rounded-md p-3.5 '>
          <img src={assets.patients_icon} alt="patients_icon" />
          <div className='flex flex-col '>
          <p className='text-semi-bold text-2xl'>{dashboardData.enrolledStudentsData.length}</p>
          <p>Total Enrollments</p>
          </div>
        </div>

        <div className='flex items-center gap-4 border-2 border-blue-500 rounded p-3.5 '>
          <img src={assets.appointments_icon} alt="totalCourses_icon" />
          <div className='flex flex-col '>
          <p className='text-semi-bold text-2xl'>{dashboardData.totalCourses}</p>
          <p>Total Enrollments</p>
          </div>
        </div>

        <div className='flex items-center gap-4 border-2 border-blue-500 rounded p-3.5 '>
          <img src={assets.earning_icon} alt="patients_icon" />
          <div className='flex flex-col '>
          <p className='font-medium text-2xl text-gray-600'>{`${currency}${dashboardData.totalEarnings}`}</p>
          <p className='tex-base text-gray-500'>Total Enrollments</p>
          </div>
        </div>
      </div>
      </div>

      {/* Enrollments Section */}
<div className="w-full mt-8">
  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-4">
    Latest Enrollments
  </h2>

  <div className="w-full overflow-x-auto">
    <div className="flex flex-col items-center max-w-5xl w-full overflow-hidden rounded-md bg-white border">
      <table className="table-fixed md:table-auto w-full">
        {/* Table Header */}
        <thead className="sticky top-0 bg-blue-50 z-10 border-b border-gray-500/20">
          <tr className="text-gray-900 text-sm text-left">
            <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">
              S.No
            </th>
            <th className="px-4 py-3 font-semibold">
              Student Name
            </th>
            <th className="px-4 py-3 font-semibold">
              Course Title
            </th>
            <th className="px-4 py-3 font-semibold hidden sm:table-cell">
              Date
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="text-sm text-gray-500">
          {dashboardData.enrolledStudentsData.map((item, index) => (
            <tr
              key={index}
              className="
                border-b border-gray-500/20
                odd:bg-white
                even:bg-gray-50
                hover:bg-blue-50
                transition
              "
            >
              <td className="px-4 py-3 text-center hidden sm:table-cell">
                {index + 1}
              </td>

              <td className="md:px-4 px-2 py-3 flex items-center space-x-3">
                <img
                  src={item.student.imageUrl}
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover border"
                />
                <span className="truncate font-medium text-gray-700">
                  {item.student.name}
                </span>
              </td>

              <td className="px-4 py-3 truncate">
                {item.courseTitle}
              </td>

              <td className="px-4 py-3 hidden sm:table-cell">
                {item.date || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>




    </div>
  ): <Loading/>
}

export default DashBoard