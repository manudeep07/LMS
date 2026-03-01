import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/Loading'
import axios from 'axios'
import { toast } from 'react-toastify'

const DashBoard = () => {
  const { currency, serverUrl, isEducator, getToken } = useContext(AppContext)
  const [dashboardData, setDashboardData] = useState(null)

  const fetchDashboardData = async () => {
    try {
      const token = await getToken()
      const { data } = await axios.get(`${serverUrl}/api/educator/dashboard`, { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        setDashboardData({
          ...data,
          enrolledStudentsData: data.enrolledStudentsData || []
        })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (isEducator) {
      fetchDashboardData()
    }
  }, [isEducator])



  return dashboardData ? (
    <div className='min-h-screen flex flex-col items-start gap-8 md:p-10 p-6 w-full max-w-7xl mx-auto'>
      {/* data */}
      <div className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>

          <div className='flex items-center gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-md'>
            <div className="w-14 h-14 bg-indigo-50/80 rounded-xl flex items-center justify-center shrink-0">
              <img src={assets.patients_icon} alt="patients_icon" className="w-7 h-7 opacity-80" />
            </div>
            <div className='flex flex-col'>
              <p className='text-3xl font-extrabold text-slate-900 tracking-tight'>{dashboardData.enrolledStudentsData.length}</p>
              <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Total Enrollments</p>
            </div>
          </div>

          <div className='flex items-center gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-md'>
            <div className="w-14 h-14 bg-indigo-50/80 rounded-xl flex items-center justify-center shrink-0">
              <img src={assets.appointments_icon} alt="totalCourses_icon" className="w-7 h-7 opacity-80" />
            </div>
            <div className='flex flex-col'>
              <p className='text-3xl font-extrabold text-slate-900 tracking-tight'>{dashboardData.totalCourses}</p>
              <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Total Courses</p>
            </div>
          </div>

          <div className='flex items-center gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-md'>
            <div className="w-14 h-14 bg-indigo-50/80 rounded-xl flex items-center justify-center shrink-0">
              <img src={assets.earning_icon} alt="earnings_icon" className="w-7 h-7 opacity-80" />
            </div>
            <div className='flex flex-col'>
              <p className='text-3xl font-extrabold text-slate-900 tracking-tight'>{currency}{dashboardData.totalEarnings}</p>
              <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Total Revenue</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollments Section */}
      <div className="w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Latest Enrollments
          </h2>
        </div>

        <div className="w-full overflow-x-auto custom-scrollbar">
          <table className="w-full text-left whitespace-nowrap">
            {/* Table Header */}
            <thead className="bg-slate-50/50 border-b border-gray-100">
              <tr className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                <th className="px-8 py-4 hidden sm:table-cell w-20">
                  ID
                </th>
                <th className="px-8 py-4">
                  Student Name
                </th>
                <th className="px-8 py-4">
                  Course Title
                </th>
                <th className="px-8 py-4 hidden sm:table-cell">
                  Date
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-50 text-sm font-medium text-slate-600">
              {dashboardData.enrolledStudentsData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/60 transition-colors duration-200 group"
                >
                  <td className="px-8 py-5 hidden sm:table-cell text-slate-400 font-mono text-xs">
                    #{String(index + 1).padStart(3, '0')}
                  </td>

                  <td className="px-8 py-5 flex items-center gap-4">
                    <img
                      src={item.student.imageUrl}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100"
                    />
                    <span className="text-slate-900 font-semibold group-hover:text-indigo-600 transition-colors">
                      {item.student.name}
                    </span>
                  </td>

                  <td className="px-8 py-5 text-slate-500">
                    {item.courseTitle}
                  </td>

                  <td className="px-8 py-5 hidden sm:table-cell text-slate-400">
                    {item.date ? new Date(item.date).toLocaleDateString() : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>




    </div>
  ) : <Loading />
}

export default DashBoard