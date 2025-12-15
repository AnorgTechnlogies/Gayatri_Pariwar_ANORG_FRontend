// Events changed Full Page
import React from "react";
import DiwaliFlyer from "../assets/Event_image.png";

const Events = () => {
  const flyer = {
    image: DiwaliFlyer,
    title: "Gayatri Pariwar of San Antonio Sunday, Dec 21st, 2025, 2 to 5pm",
    facebookLink: "https://www.facebook.com/share/1D33zH3dXL/",
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSe04h8EzLbyogMbVnyRgqrWoMXFIVrqD9m3adUL6Zxa8K6p1A/viewform",
  };

  const upcomingEvents = [
    { date: "Nov 9, 2025", title: "Diwali Mahayagya Celebration", desc: "Grand Deepotsav • 1008 Deep Yagya • Cultural Program • Maha Prasad" },
    { date: "Every Sunday", title: "Weekly Gayatri Yagya & Satsang", desc: "10:00 AM • Gayatri Havan • Bhajans • Pravachan" },
    { date: "Dec 25, 2025", title: "Christmas & Guru Bhakti Special", desc: "Special Meditation • Soulful Bhajans • Guru Darshan" },
  ];

  const pastEvents = [
    { date: "Jul 25–29, 2025", title: "AWGP Global Family Reunion" },
    { date: "Nov 2, 2024", title: "Diwali Mahotsav" },
    { date: "Jul 13, 2024", title: "108 Deep Yagya with Shantikunj Saints" },
    { date: "Jun 24, 2023", title: "International Yoga Day Celebration" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Title - Mobile Optimized */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-800 leading-tight">
            Events & Programs
          </h1>
          <div className="mt-3 h-1 w-48 mx-auto bg-gradient-to-r from-orange-600 to-amber-600 rounded-full"></div>
        </div>

        {/* Flyer Section - Fully Responsive */}
        <section className="mb-12">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-900 mb-5 px-4 leading-snug">
              {flyer.title}
            </h3>

            {/* Responsive Flyer Image */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-5">
                <img
                  src={flyer.image}
                  alt={flyer.title}
                  className="w-full h-auto rounded-2xl shadow-lg border-4 border-orange-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Responsive Buttons */}
            <div className="mt-8 flex flex-col gap-4 w-full max-w-xs sm:max-w-sm">
              <a
                href={flyer.image}
                download
                className="block w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold text-lg sm:text-xl py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                Download Flyer
              </a>

              <a
                href={flyer.googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg sm:text-xl py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                Register Now
              </a>
            </div>

            {/* Facebook Link - Mobile Friendly */}
            <div className="mt-8">
              <a
                href={flyer.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-blue-700 font-bold text-lg sm:text-xl hover:underline transition"
              >
                <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                More Info on Facebook
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;