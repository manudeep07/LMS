import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white px-6 md:px-20 lg:px-40 py-10">
      
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Left Section */}
        <div className="flex flex-col gap-4 text-left sm:text-center">
          <Logo />
          <p className="max-w-full md:max-w-xs text-gray-300 md:text-left text-sm leading-relaxed">
            We’re committed to delivering reliable, affordable, 
            and high-value learning experiences that help you grow 
            professionally and personally.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-start sm:items-center justify-center gap-5">
          <h3 className="font-semibold text-lg">Company</h3>

          {/* Better responsive layout */}
          <ul className="flex flex-wrap md:flex-col gap-16 md:gap-2 md:items-center text-gray-300 text-sm">
            <li className="hover:text-white transition cursor-pointer"><a href="#">Home</a></li>
            <li className="hover:text-white transition cursor-pointer"><a href="#">About us</a></li>
            <li className="hover:text-white transition cursor-pointer">
              <a href="#femail" onClick={() => document.querySelector('#femail').focus()}>
                Contact us
              </a>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <a href="#femail">Privacy policy</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col gap-5">
          <h3 className="font-semibold text-left text-lg">
            Subscribe to our newsletter
          </h3>

          <p className="text-left text-gray-300 text-sm leading-relaxed max-w-xs">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-3">
            <input 
              type="email" 
              id="femail"
              placeholder="Enter your email"
              className="px-3 py-2 rounded bg-gray-700 border border-gray-600 text-gray-200 
                         w-64 lg:w-72 outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button className="bg-blue-600 rounded px-6 py-2 hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EduLite. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
