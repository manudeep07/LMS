import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const Sidebar = () => {
  const {isEducator}=useContext(AppContext)
  const menuItems=[
    {name:'Dashboard',path:'/educator',icon:assets.home_icon},
    {name:'Add Course',path:'/educator/add-course',icon:assets.add_icon},
    {name:'My Courses',path:'/educator/my-courses',icon:assets.my_course_icon},
    {name:'Students Enrolled',path:'/educator/student-enrolled',icon:assets.person_tick_icon}
  ]
  return isEducator &&(
    <div className='md:w-64 w-12 flex flex-col border-r border-gray-500 min-h-screen text-base'>
      {menuItems.map((item)=>(
        <NavLink to={item.path} key={item.name} end={item.path==='/educator'}
         className={({isActive})=> isActive? "flex items-center gap-3 border-r-4 border-indigo-300 bg-gray-300  md:px-8 px-4 md:py-2 py-4 text-blue-600 font-bold":
         "flex items-center gap-3 md:px-8 px-4 md:py-2 py-4 text-gray-600"}>
         
          {({ isActive }) => (
           <>
            <img
            src={item.icon}
              alt="icon"
            className={`${isActive ? "opacity-100" : "opacity-80"}`}
            />
      <p className="md:block hidden text-center">{item.name}</p>
    </>
  )}


        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar