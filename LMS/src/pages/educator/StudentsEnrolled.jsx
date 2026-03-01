import React, { useContext, useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets'
import Loading from '../../components/student/Loading'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const StudentsEnrolled = () => {
  const { serverUrl, getToken, isEducator } = useContext(AppContext)
  const [enrolledStudents, setEnrolledStudents] = useState(null)

  const fetchEnrolledStudents = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${serverUrl}/api/educator/enrolled-students`, { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        setEnrolledStudents(data.enrolledStudentsData || [])
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (isEducator) {
      fetchEnrolledStudents()
    }
  }, [isEducator])

  if (!enrolledStudents) return <Loading />

  return (
    <div className='min-h-screen flex flex-col items-start gap-8 md:p-10 p-6 w-full max-w-7xl mx-auto'>
      <div className='w-full'>
        <div className="flex items-center justify-between pb-4">
          <h2 className='text-2xl font-bold text-slate-900 tracking-tight'>Students Enrolled</h2>
        </div>

        <div className='w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden'>
          <div className="w-full overflow-x-auto custom-scrollbar">
            <table className='w-full text-left whitespace-nowrap'>
              {/* Table Header */}
              <thead className='bg-slate-50/50 border-b border-gray-100'>
                <tr className='text-xs font-bold text-slate-500 uppercase tracking-widest'>
                  <th className='px-8 py-4 hidden sm:table-cell w-20'>ID</th>
                  <th className='px-8 py-4'>Student Name</th>
                  <th className='px-8 py-4'>Course Title</th>
                  <th className='px-8 py-4 hidden sm:table-cell'>Date</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-50 text-sm font-medium text-slate-600'>
                {enrolledStudents.map((item, index) => (
                  <tr key={index} className='hover:bg-slate-50/60 transition-colors duration-200 group'>
                    <td className='px-8 py-5 hidden sm:table-cell text-slate-400 font-mono text-xs'>#{String(index + 1).padStart(3, '0')}</td>
                    <td className='px-8 py-5 flex items-center gap-4'>
                      <img src={item.student.imageUrl} alt="" className='w-10 h-10 rounded-full object-cover shadow-sm bg-gray-100' />
                      <span className='text-slate-900 font-semibold group-hover:text-indigo-600 transition-colors'>{item.student.name}</span>
                    </td>
                    <td className='px-8 py-5 text-slate-500 max-w-xs truncate'>{item.courseTitle}</td>
                    <td className='px-8 py-5 hidden sm:table-cell text-slate-400'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
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

export default StudentsEnrolled