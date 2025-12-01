import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold text-gray-800'>Learn anything, anytime, anywhere</h1>
        <p className="mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed">Empower your education with on-demand lessons designed for modern learners. Study <span className='md:block md:text-center'>from anywhere, and build the future you imagine</span></p>
        </div>
       <div className='flex items-center justify-center gap-6 mt-5 px-5 py-6'>
        <button className='bg-blue-600 rounded px-5 py-3 font-medium text-white w-36 cursor-pointer'>Get Started</button>
        <button className='font-medium flex items-center justify-center gap-2'>Learn more <img src={assets.arrow_icon} alt="" /></button>
       </div>
    </div>
  )
}

export default CallToAction