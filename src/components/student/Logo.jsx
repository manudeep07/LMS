import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
const Logo = () => {
  const {navigate}=useContext(AppContext);
  return (
    <div>
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate('/')} >
            <img src={assets.logo1} className="w-6 lg:w-7" alt="logo" />
            <h1 className="font-semibold text-lg lg:text-xl tracking-wide">EduLite</h1>
          </div>
    </div>
  )
}

export default Logo