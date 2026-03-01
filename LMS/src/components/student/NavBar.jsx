import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const NavBar = () => {

  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { navigate, isEducator, serverUrl, setIsEducator, getToken } = useContext(AppContext)

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator')
        return;
      }
      const token = await getToken();
      const { data } = await axios.get(`${serverUrl}/api/educator/update-role`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (data.success) {
        setIsEducator(true);
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className={`flex items-center justify-between px-6 sm:px-12 lg:px-36 py-4 sticky top-0 z-50 transition-all duration-300 ${isCourseListPage ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'}`}>

      <Logo />

      <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
        <div className="flex gap-2 items-center">
          {user && (
            <>
              <button onClick={becomeEducator} className="px-4 py-2 hover:bg-slate-50 rounded-xl text-slate-600 hover:text-indigo-600 transition-all duration-200 cursor-pointer">
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              <div className="w-[1px] h-5 bg-slate-200 mx-2"></div>
              <Link className="px-4 py-2 hover:bg-slate-50 rounded-xl text-slate-600 hover:text-indigo-600 transition-all duration-200" to="/my-enrollments">
                My Enrollments
              </Link>
            </>
          )}
        </div>

        {user ? (
          <div className="pl-2 border-l border-gray-100 ml-2">
            <UserButton appearance={{ elements: { userButtonAvatarBox: "w-10 h-10 border border-gray-200 shadow-sm transition-shadow hover:shadow-md" } }} />
          </div>
        ) : (
          <button onClick={() => openSignIn()} className="bg-slate-900 hover:bg-indigo-600 shadow-sm hover:shadow-md transition-all duration-300 text-white px-7 py-2.5 rounded-full font-bold ml-2">
            Create Account
          </button>
        )}
      </div>

      <div className='md:hidden flex items-center gap-4 text-sm font-medium text-slate-500'>
        <div>
          {user && (
            <div className="flex items-center gap-3">
              <button onClick={becomeEducator} className="hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
                {isEducator ? 'Educator' : 'Teach'}
              </button>
              <div className="w-[1px] h-3 bg-slate-200"></div>
              <Link className="hover:text-indigo-600 transition-colors duration-200" to="/my-enrollments">
                Enrollments
              </Link>
            </div>
          )}
        </div>
        {user ?
          <UserButton appearance={{ elements: { userButtonAvatarBox: "w-8 h-8" } }} /> :
          <button onClick={() => openSignIn()} className='cursor-pointer text-indigo-600 font-semibold'>
            Sign In
          </button>
        }
      </div>

    </div>
  )
}

export default NavBar