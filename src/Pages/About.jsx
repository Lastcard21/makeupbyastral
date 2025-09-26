import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-10 px-10">
        <img
          src="images/makeup-artist.jpg"
          alt="Akande Bashirat Abioye"
          className="w-80 h-80 object-cover rounded-xl shadow-lg mb-6 md:mb-0"
        />
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-darkred mb-4 tracking-wide drop-shadow">
            About The Makeup Artist
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-150">
            My makeup artistry journey began as a passion for beauty during the
            ASUU strike in 2015, when I was a 100-level student in my home
            country, Nigeria. After attending a training, I initially hesitated
            to pursue a career as a makeup artist. However, I continued to
            create beautiful looks for myself, my sisters, and friends at
            various events, refusing to let doubt hold me back. Fast forward to
            2023, I took a bold step by enrolling in an upgrade class.
            Relocating to Australia that same year presented challenges, but I
            embraced the unfamiliarity with determination. What started as a
            hobby transformed into a legitimate venture, leading to the
            registration of my business. My passion for makeup, ignited in 2015,
            culminated in the official launch of my services in Australia in
            June 2025, as I set out to inspire others with the art of beauty.
            Over the years, I have had the pleasure of beautifying over 1,000
            faces in Nigeria and Australia. I can't wait to help bring out your
            natural beauty too.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <Link to="/booking">
          <button className="bg-darkred w-30 p-1 transition-all duration-200 hover:shadow-2xl shadow-red-800 cursor-pointer">
            <span className="text-white">Book Now</span>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default About;
