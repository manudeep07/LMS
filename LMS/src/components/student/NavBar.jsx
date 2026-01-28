import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext';
const NavBar = () => {
  
  const isCourseListPage=location.pathname.includes('/course-list');
  const {openSignIn}=useClerk();
  const {user}=useUser();
  const {navigate,isEducator}=useContext(AppContext)
  return (
   <div className={`flex items-center justify-between px-4 sm:px-10 lg:px-36 py-4 border-b ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      
 <Logo />
  <div className="hidden md:flex items-center gap-6 text-gray-600">
    <div className="flex gap-2">
      {user && <><button onClick={()=>{navigate('/educator')}} className="hover:text-blue-600 transition cursor-pointer">
        {isEducator? 'Educator Dashboard':'Become Educator'}
        </button><span>|</span><Link className="hover:text-blue-600 transition" to="/my-enrollments">My Enrollments
        </Link></>}
      
    </div>

    {user? <UserButton/>:<button onClick={()=>openSignIn()} className="bg-blue-600 hover:bg-blue-900 cursor-pointer transition text-white px-5 py-2 rounded-full">
      Create Account
    </button>
}
  </div>
   
  <div className='md:hidden flex items-center gap-2 sm:gap-5  text-gray-500'>
    <div >
      {user && <><button onClick={()=>{navigate('/educator')}} className="hover:text-blue-600 transition cursor-pointer">{isEducator? 'Educator Dashboard':'Become Educator'}</button><span>|</span><Link className="hover:text-blue-600 transition" to="/my-enrollments">My Enrollments</Link></>}
    </div>
    {user? <UserButton/> :<button onClick={()=>openSignIn()} className='cursor-pointer' ><img src={assets.user_icon} alt="usericon" /></button>}
    
  </div>
  
</div>

  )
}   

export default NavBar