import React from 'react'
import Logo from '../common/Logo'

const Footer = () => {
  return (
    <div>
        <div className="w-full flex items-center justify-between bg-gray-800 text-white px-10 py-3.5 md:px-32 md:py-4">
            <div>
                <Logo/>
             </div>
           <p> © {new Date().getFullYear()} EduLite. All rights reserved.</p>

           
        </div>

        
    </div>
  )
}

export default Footer