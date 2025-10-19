import React from 'react'
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-darkred text-white p-6 mt-12 w-full">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
                <h3 className="text-xl font-bold mb-2">About</h3>
                <p className="text-sm text-white max-w-50">
                    I’m a professional makeup artist passionate about enhancing your natural beauty.
                </p>
            </div>

           
            <div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <ul className="text-sm text-white space-y-1">
                    <li>Sun: 3:30pm – 7:00pm</li>
                    <li>Mon & Tue: 12:30pm – 7:00pm</li>
                    <li>Wed: 7:00am – 8:00pm</li>
                    <li>Fri: 7:00am – 8:00pm</li>
                </ul>
            </div>


           
            <div>
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="text-sm">Phone: 0493353668</p>
                <p className="text-sm">Email: makeupbyastral@gmail.com</p>
                <p className="text-sm">Address: 1 Brand St, Cloverdale, WA 6105</p>
                
                <div className="flex gap-4 mt-4">
                    
                    <a href="https://www.instagram.com/makeupbyastral" className='text-xl' target="_blank"><FaInstagram /></a>
                    <a href="https://www.facebook.com/makeupbyastral" className='text-xl' target="_blank"><FaFacebookF /></a>
                    <a href="https://www.tiktok.com/@makeupbyastral" className='text-xl' target="_blank"><FaTiktok /></a>
                    <a href="https://www.linkedin.com/company/makeupbyastral/" className='text-xl' target="_blank"><FaLinkedin /></a>
                    
                </div>
            </div>
        </div>

            
            <div className="mt-6 text-center text-sm text-white">
                © {new Date().getFullYear()} Developed by Akande Abdulquadir. Graphics designed by Akande Nimotallahi. All rights reserved.
            </div>
    </footer>
  )
}

export default Footer
