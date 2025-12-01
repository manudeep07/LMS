import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white px-6 md:px-20 lg:px-40 py-10">
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-left max-w-xs text-gray-300">
            We’re committed to delivering reliable, affordable, 
            and high-value learning experiences that help you grow 
            professionally and personally.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-start sm:items-center gap-5">
          <h3 className="font-semibold text-lg">Company</h3>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 sm:hidden md:block lg:block">
          <h3 className="font-semibold text-left text-lg">
            Subscribe to our newsletter
          </h3>

          <p className="text-left text-gray-300 max-w-xs">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-gray-700 border-white text-gray w-60 outline-none"
            />
            <button className="bg-blue-600 rounded px-6 py-2 hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EduLite. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
