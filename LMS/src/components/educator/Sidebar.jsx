import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const Sidebar = () => {
  const { isEducator } = useContext(AppContext)
  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
    { name: 'Students Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon }
  ]
  return isEducator && (
    <div className='md:w-64 w-16 flex flex-col border-r border-gray-200 min-h-screen bg-white text-sm font-medium py-6 px-3 gap-2'>
      {menuItems.map((item) => (
        <NavLink to={item.path} key={item.name} end={item.path === '/educator'}
          className={({ isActive }) => isActive ?
            "flex items-center gap-3 bg-indigo-50 md:px-4 px-0 justify-center md:justify-start py-2.5 rounded-lg text-indigo-600 transition-colors duration-200" :
            "flex items-center gap-3 md:px-4 px-0 justify-center md:justify-start py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200"
          }>
          {({ isActive }) => (
            <>
              <img
                src={item.icon}
                alt="icon"
                className={`w-5 h-5 ${isActive ? "opacity-100 invert-[.3] sepia-[1] saturate-[5] hue-rotate-[220deg]" : "opacity-60"}`}
              />
              <p className="md:block hidden">{item.name}</p>
            </>
          )}
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar