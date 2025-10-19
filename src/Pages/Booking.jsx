// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import "react-datepicker/dist/react-datepicker.css";

// function Booking() {
//   const [location, setLocation] = useState("Select Service Location");
//   const [selectedDate, setSelectedDate] = useState("");
  
//   return (
//     <div>
//       <div className="min-h-screen flex items-center justify-center bg-darkred/10 py-10">
//         <form
//           action="https://formsubmit.co/makeupbyastral@gmail.com"
//           method="POST"
//           className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-darkred"
//         >
//           <h2 className="text-3xl font-bold text-darkred mb-6 text-center drop-shadow">
//             Book Your Glam Session
//           </h2>

//           <div className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               required
//               className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               required
//               className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
//             />

//             {/* Date and Time Fields */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <div className="w-full sm:w-1/2">
//                 <p className="text-sm text-darkred mb-1">Date</p>
//                 {/* <input
//                   type="date"
//                   name="date"
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
//                 /> */}
       
//               </div>
//               <div className="w-full sm:w-1/2">
//                 <p className="text-sm text-darkred mb-1">Time</p>
//                 <input
//                   type="time"
//                   name="time"
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
//                 />
//               </div>
//             </div>

//             {/* Service Selection */}
//             <select
//               name="service"
//               required
//               className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
//             >
//               <option value="">Select Service</option>
//               <option value="Bridal Makeup">Bridal Makeup - $150</option>
//               <option value="Casual Makeup">Casual Makeup - $80</option>
//               <option value="Owambe Makeup">Owambe Makeup - $80</option>
//               <option value="Graduation Makeup">Graduation Makeup - $80</option>
//               <option value="Gele Tying">Gele Tying - $15</option>
//             </select>

//             {/* Location Selection */}
//             <div>
//               <select
//                 name="location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred"
//               >
//                 <option value="">Select Service Location</option>
//                 <option value="Studio">Studio Service</option>
//                 <option value="Home" disabled>
//                   Home Service (Currently Unavailable)
//                 </option>
//               </select>
//             </div>

//             <textarea
//               name="notes"
//               placeholder="Extra Notes/Address"
//               required={location === "Home"}
//               className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred min-h-[80px]"
//             ></textarea>

//             {/* Payment Instructions */}
//             <div className="bg-darkred/5 p-4 rounded-lg border border-darkred text-sm text-darkred mt-4">
//               <p>
//                 <strong>Important:</strong> To confirm your appointment, please
//                 make an initial payment of{" "}
//                 <span className="font-bold">$30</span>. The remaining balance
//                 will be paid on the day of your reserved session (Email PayID).
//               </p>
//               <p className="mt-2">
//                 Email PayID:{" "}
//                 <span className="font-bold">akandebashirat@gmail.com</span>
//               </p>
//               <p>
//                 Name: <span className="font-bold">B Akande</span>
//               </p>
//               <p className="mt-2 italic">
//                 Your booking will only be confirmed after the advance payment
//                 has been received.
//               </p>
//             </div>
//           </div>

//           {/* Hidden Inputs */}
//           <input type="hidden" name="_subject" value="New Booking Received!" />
//           <input type="hidden" name="_template" value="table" />
//           <input type="hidden" name="_captcha" value="false" />
//           <input
//             type="hidden"
//             name="_next"
//             value="https://makeupbyastral.netlify.app/thank-you"
//           />

//           <button
//             type="submit"
//             className="mt-6 w-full py-3 rounded-lg bg-darkred text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-200 border-2 border-darkred"
//           >
//             Book Now
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Booking;


import React, { useState } from "react";
import Footer from "../components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const [location, setLocation] = useState("Select Service Location");
  const [selectedDate, setSelectedDate] = useState(null);

  // Disable 19–31 of current month
  const isDateDisabled = (date) => {
    const today = new Date();
    const sameMonth = date.getMonth() === today.getMonth();
    const day = date.getDate();
    return sameMonth && day >= 19 && day <= 31;
  };

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
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
            />

            {/* Phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred"
            />

            {/* Date and Time */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-full">
                <p className="text-sm text-darkred mb-1">Date</p>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  filterDate={(date) => !isDateDisabled(date)}
                  minDate={new Date()}
                  placeholderText="Select your booking date"
                  name="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred appearance-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Fully booked till 31st of this month
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <p className="text-sm text-darkred mb-1">Time</p>
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred appearance-none"
                />
              </div>
            </div>

            {/* Service */}
            <select
              name="service"
              required
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred appearance-none"
            >
              <option value="">Select Service</option>
              <option value="Bridal Makeup">Bridal Makeup - $150</option>
              <option value="Casual Makeup">Casual Makeup - $80</option>
              <option value="Owambe Makeup">Owambe Makeup - $80</option>
              <option value="Graduation Makeup">Graduation Makeup - $80</option>
              <option value="Gele Tying">Gele Tying - $15</option>
            </select>

            {/* Location */}
            <div>
              <select
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 text-darkred appearance-none"
              >
                <option value="">Select Service Location</option>
                <option value="Studio">Studio Service</option>
                <option value="Home" disabled>
                  Home Service (Currently Unavailable)
                </option>
              </select>
            </div>

            {/* Notes */}
            <textarea
              name="notes"
              placeholder="Extra Notes/Address"
              required={location === "Home"}
              className="w-full px-4 py-3 rounded-lg border border-darkred focus:outline-none focus:ring-2 focus:ring-darkred bg-darkred/5 placeholder-darkred min-h-[80px]"
            ></textarea>

            {/* Payment Info */}
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

          {/* Hidden Fields */}
          <input type="hidden" name="_subject" value="New Booking Received!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://makeupbyastral.netlify.app/thank-you"
          />

          {/* Submit Button */}
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
