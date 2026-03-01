import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/educator/NavBar'
import Sidebar from '../../components/educator/Sidebar'
import Footer from '../../components/educator/Footer'

const Educator = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen flex flex-col">
      {/* Top Navbar */}
      <NavBar />

      {/* Sidebar + Page Content */}
      <div className="h-full flex flex-1 w-full max-w-7xl mx-auto">
        <Sidebar />

        <main className="flex-1 h-full ">
          <Outlet />
        </main>

      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Educator
