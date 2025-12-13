// components/SwadhyayMandals.jsx

import React from "react";

const SwadhyayMandals = () => {
  // Replace these with your actual Swadhyay Mandal YouTube video IDs
  const videoIds = [
    "5GrFFFfQtsg", 
    "iU89vUPTuWI", 
    "Xo9igVrCOTw",
    // "VIDEO_ID_4", 
    // "VIDEO_ID_5", 
    // "VIDEO_ID_6", 
  ];

  const gradients = [
    "from-orange-600 to-amber-600",
    "from-red-600 to-orange-600",
    "from-amber-600 to-yellow-600",
    "from-cyan-600 to-blue-600",
    "from-green-600 to-emerald-600",
    "from-purple-600 to-pink-600",
  ];

  return (
    <section className="py-15 px-6 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">

        {/* Optional Heading - Remove if you don't want any text at all */}
        <h2 className="text-center py-2 text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-700 mb-12">
          Our Swadhyay Mandals
        </h2>

        {/* Pure Video Grid - No titles, no extra content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {videoIds.map((videoId, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-200 hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500"
            >
              {/* Colored Top Bar (Visual Separator Only) */}
              <div className={`h-3 bg-gradient-to-r ${gradients[index]}`} />

              {/* YouTube Video - Full Clean Embed */}
              <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-b-3xl"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`}
                  title={`Swadhyay Mandal Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SwadhyayMandals;