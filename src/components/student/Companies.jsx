import React from 'react'
import { assets } from '../../assets/assets'
const Companies = () => {
  return (
    <div className='mt-0'>
        <p className='text-center text-base text-gray-500 mt-0'>Trusted by learners from</p>
        <div className='flex flex-wrap items-center justify-center gap-6 md:gap16 md:mt-10 mt-5'>
            <img src={assets.accenture_logo} alt="accenture" />
            <img src={assets.microsoft_logo} alt="microsoft" />
            <img src={assets.walmart_logo} alt="walmart" />
            <img src={assets.adobe_logo} alt="adobe" />
            <img src={assets.paypal_logo} alt="paypal" />
        </div>
    </div>
  )
}

export default Companies