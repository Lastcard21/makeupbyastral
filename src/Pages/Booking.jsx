import React, { useState } from 'react';
import Footer from '../components/Footer';




function Booking() {
  const [location, setLocation] = useState('Studio');

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-darkred/10 py-10">
        <form
          action="https://formsubmit.co/makeupbyastral@gmail.com"
          method="POST"
          className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-darkred"
        >
          <h2 className="text-3xl font-bold text-darkred mb-6 text-center drop-shadow">Book Your Glam Session</h2>
          <div className="space-y-4">
            {/* ...existing fields... */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
            />
            <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <div className="flex-1">
            <p className="mb-1 text-darkred font-medium">Date</p>
            <input
              type="date"
              name="date"
              required
              className="w-full md:w-40 px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
            />
          </div>
          <div className="flex-1">
            <p className="mb-1 text-darkred font-medium">Time</p>
            <input
              type="time"
              name="time"
              required
              className="w-full md:w-40 px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
            />
          </div>
        </div>
            <select
              name="service"
              required
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
            >
              <option value="">Select Service</option>
              <option value="Bridal Makeup">Bridal Makeup - $150</option>
              <option value="Casual Makeup">Casual Makeup - $80</option>
              <option value="Owambe Makeup">Owambe Makeup - $80</option>
              <option value="Graduation Makeup">Graduation Makeup - $80</option>
              <option value="Gele Tying">Gele Tying - $15</option>
            </select>
            {/* Service Location Dropdown */}
            <div>
              <select
                name="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
              >
                <option value="">Select Service Location</option>
                <option value="Studio">Studio Service</option>
                <option value="Home">Home Service</option>
              </select>
              <p className="text-xs text-darkred mt-1">
                Note: Home service requires extra charges.
              </p>
            </div>
            <textarea
              name="notes"
              placeholder="Extra Notes/Address"
              required={location === 'Home'}
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred min-h-[80px]"
            ></textarea>
            {location === 'Home' && (
              <p className="text-xs text-darkred">Please provide your address and any relevant details for home service.</p>
            )}
          </div>
          {/* Optional hidden fields */}
          <input type="hidden" name="_subject" value="New Booking Received!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://makeupbyastral.netlify.app/thank-you" />

          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-lg bg-darkred text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-200 border-2 border-darkred"
          >
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Booking;