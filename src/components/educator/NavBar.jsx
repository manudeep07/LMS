import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
const NavBar = () => {
  const educatordata=dummyEducatorData;
  const {user}=useUser();
  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-500'>
      <Link to='/'>
      <Logo/>
      </Link>
      <div className='flex items-center gap-4 text-gray-500 relative'>
        <p>Hi! {user? user.fullName :'Developers'}</p>
        {user? <UserButton/> :  
        <img src={assets.user_icon} className='max-w-8' alt="user_icon" />
        }
      </div>
    </div>
  )
}

export default NavBar