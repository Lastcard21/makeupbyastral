import React, { useState } from "react";
import Footer from "../components/Footer";

function Booking() {
  const [location, setLocation] = useState("Select Service Location");

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-darkred/10 py-10">
        <form
          action="https://formsubmit.co/makeupbyastral@gmail.com"
          method="POST"
          className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-darkred"
        >
          <h2 className="text-3xl font-bold text-darkred mb-6 text-center drop-shadow">
            Book Your Glam Session
          </h2>

          <div className="space-y-4">
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

            {/* Date and Time Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <p className="text-sm text-darkred mb-1">Date</p>
                {/* <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
                /> */}
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value);
                    const day = selectedDate.getDate();

                    // Prevent selecting dates from 19 to 31
                    if (day >= 19 && day <= 31) {
                      alert(
                        "Bookings are not available from the 19th to the 31st of this month."
                      );
                      e.target.value = ""; // reset input
                    }
                  }}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <p className="text-sm text-darkred mb-1">Time</p>
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
                />
              </div>
            </div>

            {/* Service Selection */}
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

            {/* Location Selection */}
            <div>
              <select
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
              >
                <option value="">Select Service Location</option>
                <option value="Studio">Studio Service</option>
                <option value="Home" disabled>
                  Home Service (Currently Unavailable)
                </option>
              </select>
            </div>

            <textarea
              name="notes"
              placeholder="Extra Notes/Address"
              required={location === "Home"}
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred min-h-[80px]"
            ></textarea>

            {/* Payment Instructions */}
            <div className="bg-darkred/5 p-4 rounded-lg border border-darkred text-sm text-darkred mt-4">
              <p>
                <strong>Important:</strong> To confirm your appointment, please
                make an initial payment of{" "}
                <span className="font-bold">$30</span>. The remaining balance
                will be paid on the day of your reserved session (Email PayID).
              </p>
              <p className="mt-2">
                Email PayID:{" "}
                <span className="font-bold">akandebashirat@gmail.com</span>
              </p>
              <p>
                Name: <span className="font-bold">B Akande</span>
              </p>
              <p className="mt-2 italic">
                Your booking will only be confirmed after the advance payment
                has been received.
              </p>
            </div>
          </div>

          {/* Hidden Inputs */}
          <input type="hidden" name="_subject" value="New Booking Received!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://makeupbyastral.netlify.app/thank-you"
          />

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
