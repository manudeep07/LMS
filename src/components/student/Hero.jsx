import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-20 max-w-3xl mx-auto">
      
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight relative">
        Unlock expert-led courses <br />built to <span className='text-blue-500'>help you grow faster.</span>
      </h1>

      <img 
        src={assets.sketch} 
        alt="sketch underline decoration"
        className="md:block hidden absolute-bottom-7 right-0"
      />

      <p className="mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed">
        Whether you're starting fresh or leveling up, our platform helps you learn smarter with guided lessons, 
        personalized pacing, and meaningful results.
      </p>
      <SearchBar/>
    </div>
  )
}

export default Hero
