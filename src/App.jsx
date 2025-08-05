import React, { useState, useEffect } from 'react'
import { Route, Routes, NavLink, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Booking from './Pages/Booking'
import ThankYou from './components/Thank'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1200) 
    return () => clearTimeout(timer)
  }, [location])

  return (
   <>
    <ScrollToTop />
    {loading && <Preloader />}
    <nav className='flex justify-between items-center px-10 py-5 bg-darkred text-white sticky top-0'>
      <NavLink to='/' className="text-xl font-bold flex">makeupbyastral</NavLink>
      <button
       className='ml-auto md:hidden'
       onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? 'bx bx-x-circle absolute left-9 bottom-5' : 'bxr  bx-menu'}  /> 
      </button>
      <ul className={`flex flex-col md:flex-row md:flex ml-auto space-y-4 md:space-y-0 md:space-x-10 font-medium md:static top-16 left-0 md:w-auto bg-darkred mb:bg-transparent transition-all duration-300 z-10 ${menuOpen ? 'flex' : 'hidden'}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "border-b-2 font-bold" : "text-white"}`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "border-b-2 font-bold" : "text-white"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `nav-link ${isActive ? "border-b-2 font-bold" : "text-white"}`
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              `nav-link ${isActive ? "border-b-2 font-bold" : "text-white"}`
            }
          >
            Booking
          </NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/booking' element={<Booking />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
   </>
  )
}

export default App