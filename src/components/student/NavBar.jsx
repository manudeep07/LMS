import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'
const NavBar = () => {

  const isCourseListPage=location.pathname.includes('/course-list');
  const {openSignIn}=useClerk();
  const {user}=useUser();
  return (
   <div className={`flex items-center justify-between px-4 sm:px-10 lg:px-36 py-4 border-b ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      
  <div className="flex items-center gap-2 cursor-pointer">
    <img src={assets.logo1} className="w-6 lg:w-7" alt="logo" />
    <h1 className="font-semibold text-lg lg:text-xl tracking-wide">EduLite</h1>
  </div>

  <div className="hidden md:flex items-center gap-6 text-gray-600">
    <div className="flex gap-2">
      {user && <><button className="hover:text-blue-600 transition cursor-pointer">Become Educator</button><span>|</span><Link className="hover:text-blue-600 transition" to="/my-enrollments">My Enrollments</Link></>}
      
    </div>

    {user? <UserButton/>:<button onClick={()=>openSignIn()} className="bg-blue-600 hover:bg-blue-900 cursor-pointer transition text-white px-5 py-2 rounded-full">
      Create Account
    </button>
}
  </div>
   
  <div className='md:hidden flex items-center gap-2 sm:gap-5  text-gray-500'>
    <div >
      {user && <><button className="hover:text-blue-600 transition cursor-pointer">Become Educator</button><span>|</span><Link className="hover:text-blue-600 transition" to="/my-enrollments">My Enrollments</Link></>}
    </div>
    {user? <UserButton/> :<button onClick={()=>openSignIn()} className='cursor-pointer' ><img src={assets.user_icon} alt="usericon" /></button>}
    
  </div>
</div>

  )
}   

export default NavBar