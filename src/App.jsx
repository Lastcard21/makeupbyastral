// import React, { useState, useEffect } from "react";
// import { Route, Routes, NavLink, useLocation } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Portfolio from "./Pages/Portfolio";
// import Booking from "./Pages/Booking";
// import ThankYou from "./components/Thank";
// import Preloader from "./components/Preloader";
// import ScrollToTop from "./components/ScrollToTop";
// const App = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, [location]);

//   // Close menu when route changes
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   return (
//     <>
//       <ScrollToTop />
//       {loading && <Preloader />}
//       <nav className="flex justify-between items-center px-10 py-5 bg-darkred text-white sticky top-0 z-19">
//         <NavLink to="/" className="text-xl font-bold flex">
//           makeupbyastral
//         </NavLink>
//         <button
//           className="ml-auto md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <i
//             className={menuOpen ? "bx bx-x text-3xl" : "bx bx-menu text-3xl"}
//           />
//         </button>
//         <ul
//           className={`flex flex-col md:flex-row md:flex ml-auto space-y-4 md:space-y-0 md:space-x-10 font-medium md:static left-0 md:w-auto bg-darkred mb:bg-transparent transition-all duration-300 z-10 ${
//             menuOpen ? "flex" : "hidden"
//           }`}
//         >
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `nav-link ${isActive ? "border-b-2 font-bold" : "text-white"}`
//               }
//               end
//               onClick={() => setMenuOpen(false)}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `nav-link ${isActive ? "border-b-2 font-bold" : "text-white"}`
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/portfolio"
//               className={({ isActive }) =>
//                 `nav-link ${isActive ? "border-b-2 font-bold" : "text-white"}`
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               Portfolio
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/booking"
//               className={({ isActive }) =>
//                 `nav-link ${isActive ? "border-b-2 font-bold" : "text-white"}`
//               }
//               onClick={() => setMenuOpen(false)}
//             >
//               Booking
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/thank-you" element={<ThankYou />} />
//       </Routes>
//     </>
//   );
// };

// export default App;




import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Booking from "./Pages/Booking";
import ThankYou from "./components/Thank";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [location]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {loading && <Preloader />}

      {/* 🌸 Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-darkred text-white sticky top-0 z-20 shadow-md">
        {/* Logo / Brand */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide flex">
          makeupbystral
        </NavLink>

        {/* Hamburger Icon (like Auslife) */}
        <button
          className="ml-auto md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row ml-auto pl-8 pb-6 space-y-4 md:space-y-0 md:space-x-10 font-medium md:static absolute top-16 left-0 w-full md:w-auto bg-darkred transition-all duration-300 ease-in-out ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "border-b-2 font-bold" : "text-white"
                }`
              }
              end
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "border-b-2 font-bold" : "text-white"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "border-b-2 font-bold" : "text-white"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "border-b-2 font-bold" : "text-white"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Booking
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* 🌸 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
};

export default App;
