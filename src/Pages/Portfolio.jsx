import React from 'react'
import { portfolioSection } from '../Data'
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-darkred/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-darkred mb-10 text-center tracking-wide drop-shadow mt-10">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
          {portfolioSection.map((portfolio, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border-2 border-darkred/30 overflow-hidden flex flex-col items-center transition-transform hover:scale-105 duration-200"
            >
              <img
                src={portfolio.img}
                alt="portfolio image"
                className="w-full h-64 object-cover object-center"
              />
              {/* Optionally add a caption or description here if available */}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10">
          <a href="https://www.tiktok.com/@makeupbyastral" target="_blank" rel="noopener noreferrer">
            <button className="bg-darkred text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-red-900 transition duration-200">
              <span>View portfolio on TikTok</span>
            </button>
          </a>
          <a href="https://www.instagram.com/makeupbyastral" target="_blank" rel="noopener noreferrer">
            <button className="bg-darkred text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-red-900 transition duration-200">
              <span>View portfolio on Instagram</span>
            </button>
          </a>
           <a href="https://www.facebook.com/share/191t6zDUCf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <button className="bg-darkred text-white px-6 py-2 rounded-lg shadow-md font-semibold hover:bg-red-900 transition duration-200">
              <span>View portfolio on Facebook</span>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
