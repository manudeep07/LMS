import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
const NavBar = () => {
  const educatordata = dummyEducatorData;
  const { user } = useUser();
  return (
    <div className='flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-200/80 bg-white sticky top-0 z-50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300'>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='flex items-center gap-5 text-sm font-semibold text-slate-600'>
        <p className="hidden md:block pr-4 border-r border-gray-200">Hi, <span className="text-slate-900">{user ? user.fullName : 'Educator'}</span></p>
        {user ? <UserButton appearance={{ elements: { userButtonAvatarBox: "w-10 h-10 border border-gray-200 shadow-sm transition-shadow hover:shadow-md" } }} /> :
          <img src={assets.user_icon} className='w-10 h-10 rounded-full border border-gray-200 shadow-sm' alt="user_icon" />
        }
      </div>
    </div>
  )
}

export default NavBar