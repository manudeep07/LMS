import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-20 md:py-32 w-full max-w-4xl mx-auto relative">

      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] relative z-10">
        Unlock expert-led courses <br className="hidden md:block" />built to <span className='text-indigo-600 relative'>
          help you grow faster.
          <img
            src={assets.sketch}
            alt="sketch underline decoration"
            className="hidden md:block absolute -bottom-5 left-0 w-full opacity-60 pointer-events-none"
          />
        </span>
      </h1>

      <p className="mt-8 text-slate-500 text-base md:text-xl max-w-2xl leading-relaxed font-light">
        Whether you're starting fresh or leveling up, our platform helps you learn smarter with guided lessons,
        personalized pacing, and meaningful results.
      </p>

      <div className="mt-10 w-full max-w-xl">
        <SearchBar />
      </div>
    </div>
  )
}

export default Hero
