import React from "react";
import DiwaliFlyer from "../assets/Event_image.png";
import Upcoming_Events from "../assets/Events_Calendar.jpg";

const Events = () => {
  const flyer = {
    image: DiwaliFlyer,
    title: "Gayatri Pariwar of San Antonio Sunday, Dec 21st, 2025, 2 to 5pm",
    facebookLink: "https://www.facebook.com/share/1D33zH3dXL/",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSe04zaqh8EzLbyogMbVnyRgqrWoMXFIVrqD9m3adUL6Zxa8K6p1A/viewform",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-800 leading-tight">
            Events & Programs
          </h1>
          <div className="mt-4 h-1 w-64 mx-auto bg-gradient-to-r from-orange-600 to-amber-600 rounded-full"></div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">

          {/* Right Side: Upcoming Events Calendar (first on mobile) */}
          <div className="flex flex-col items-center lg:order-last">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-orange-800 mb-4">
                Upcoming Events Calendar
              </h2>
              <div className="w-48 h-1 bg-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="w-full max-w-lg flex flex-col items-center">
              <div className="rounded-2xl p-4">
                <img
                  src={Upcoming_Events}
                  alt="Upcoming Events Calendar - AWGP San Antonio"
                  className="w-full h-auto rounded-2xl shadow-lg border-8 border-white"
                  loading="lazy"
                />
              </div>

              {/* NEW: Download Calendar Button */}
              <a
                href={Upcoming_Events}
                download="Upcoming_Events_Calendar_2025_AWGP_San_Antonio.jpg"
                className="mt-8 block w-full max-w-xs bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-lg py-3 px-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                Download Calendar
              </a>
            </div>
          </div>

          {/* Left Side: Current Event Program */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-900 text-center mb-8 px-4 leading-snug">
              {flyer.title}
            </h3>

            <div className="w-full max-w-md mb-10">
              <div className="rounded-2xl p-4">
                <img
                  src={flyer.image}
                  alt={flyer.title}
                  className="w-full h-auto rounded-2xl shadow-lg border-4 border-orange-100"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full max-w-md flex flex-col gap-6">
              <a
                href={flyer.image}
                download="Diwali_Event_Flyer_2025_Gayatri_Pariwar_San_Antonio.png"
                className="block w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-lg py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                Download Flyer
              </a>

              <a
                href={flyer.googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                Register Now
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Social Links */}
        <div className="relative z-10 -mt-12 mb-12">
          <div className="max-w-2xl mx-auto">

            {/* Facebook Link */}
            <div className="text-center mb-6">
              <a
                href={flyer.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-blue-700 font-bold text-xl hover:underline transition"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                More Info on Facebook
              </a>
            </div>

            {/* WhatsApp Link */}
            <div className="text-center mb-6">
              <a
                href="https://chat.whatsapp.com/GMB5CMHR1xmIFJuISQdBEz?mode=hqrt2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-green-700 font-bold text-xl hover:underline transition"
              >
                <svg className="w-10 h-10" fill="#25D366" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 35 56.1 81.7 56.1 130.5 0 101.7-84.3 184.5-186.6 184.5zM248 224c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm192 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z" />
                </svg>
                Join us on WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Events;