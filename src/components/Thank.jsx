// src/pages/ThankYou.js
import React from 'react';

function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-darkred/10 text-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md border-2 border-darkred">
        <h1 className="text-3xl font-bold text-darkred mb-4 drop-shadow">Thank You! <span role="img" aria-label="heart">❤️</span></h1>
        <p className="text-darkred/80">Your booking was sent successfully.</p>
        <p className="text-darkred/80 mt-2">We'll get back to you as soon as we comfirm your payment.</p>
        <a href="/" className="mt-6 inline-block text-darkred font-semibold underline hover:text-darkred/80 transition">Back to Home</a>
      </div>
    </div>
  );
}

export default ThankYou;
