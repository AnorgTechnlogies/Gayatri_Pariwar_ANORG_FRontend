import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Gurudev from "../assets/Gurudev2.jpg";
import Mataji from "../assets/mataji.jpg";
import Pandya from "../assets/Chinmay-Pandya.jpg";
import Shail_jiji from "../assets/Shail_Jiji.jpg";
import Pranav from "../assets/Pranav-Pandya.jpg";

const acharyas = [
  {
    name: "Param Pujya Gurudev Pt. Shriram Sharma Acharya",
    title: "Founder – All World Gayatri Pariwar (1911–1990)",
    image: Gurudev,
    bio: "A Himalayan Yogi-guided sage who performed 24 Mahapurashcharanas of Gayatri, authored over 2400 books, translated entire Vedic literature, and ignited the flame of Yug Nirman (Era Transformation) through Scientific Spirituality.",
    youtube: "https://www.youtube.com/watch?v=LB7Tsy767og",
  },
  {
    name: "Vandaniya Mata Bhagwati Devi Sharma",
    title: "The Divine Mother of the Mission",
    image: Mataji,
    bio: "After Gurudev’s Mahasamadhi in 1990, Mataji led the mission with divine grace. She organized 27 grand Ashwamedha Yagyas worldwide and inspired millions to walk the path of Dev Sanskriti (Divine Culture).",
    youtube: "https://www.youtube.com/watch?v=yeG47Iz4wTo",
  },
  {
    name: "Dr. Pranav Pandya",
    title: "Global Head & Pioneer of Scientific Spirituality",
    image: Pranav,
    bio: "Renowned worldwide as the pioneer of scientific spirituality, he sacrificed a lucrative medical career in the US to serve his Guru. Leading All World Gayatri Pariwar, he established its branches in over 80 countries and founded Dev Sanskriti Vishwavidyalaya, Haridwar.",
    youtube: "https://youtu.be/2tW0OyaRMWI",
  },
  {
    name: "Shraddheya Shail Jiji",
    title: "Head of Shantikunj, Haridwar",
    image: Shail_jiji,
    bio: "Current head of Shantikunj, Haridwar—the global headquarters of Gayatri Pariwar. A postgraduate in Psychology, she has been a key force in Nari Jagran (Women Awakening) movement since 1978.",
    youtube: "https://youtu.be/vBuI-c9-MYY",
    hasPage: true,
  },
  {
    name: "Dr. Chinmay Pandya",
    title: "Present Torchbearer & Pro Vice Chancellor, DSVV",
    image: Pandya,
    bio: "Grandson of Gurudev, a UK-trained psychiatrist (MRCPsych) who left a successful career in London to serve humanity. Today he is a global voice blending science, yoga, psychology, and Vedic wisdom.",
    youtube: "https://www.youtube.com/watch?v=UWpHCF4b57Q",
    hasPage: true,
  },
];

const DivineGuides = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Scroll to top on mount or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Extract YouTube video ID
  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const selectedAcharya = acharyas.find(a => a.youtube === selectedVideo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 pt-6 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 text-center mb-4">
          Our Guiding Souls
        </h1>
        <p className="text-center text-orange-700 font-bold text-lg sm:text-xl mb-12 italic">
          The Eternal Lights of Gayatri Pariwar Mission
        </p>

        {/* Main Content */}
        <div className="space-y-16 lg:space-y-0">
          {acharyas.map((acharya, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Acharya Card */}
              <div className={`w-full ${selectedVideo === acharya.youtube ? "lg:w-7/12" : "lg:w-full"}`}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-100">
                  <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    {/* Image */}
                    <div className="flex-shrink-0 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 blur-xl opacity-60 -z-10"></div>
                      <img
                        src={acharya.image}
                        alt={acharya.name}
                        className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-2xl"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 leading-tight">
                        {acharya.name}
                      </h2>
                      <p className="text-amber-700 font-semibold text-lg mt-2">
                        {acharya.title}
                      </p>
                      <p className="text-gray-700 mt-4 text-sm sm:text-base leading-relaxed">
                        {acharya.bio}
                      </p>

                      {/* Button */}
                      <div className="mt-6">
                        <button
                          onClick={() =>
                            setSelectedVideo(selectedVideo === acharya.youtube ? null : acharya.youtube)
                          }
                          className={`font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 text-white ${
                            selectedVideo === acharya.youtube
                              ? "bg-gray-600 hover:bg-gray-700"
                              : "bg-red-600 hover:bg-red-700"
                          }`}
                        >
                          {selectedVideo === acharya.youtube ? "Close Video" : "Watch Biography"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Player - Shows below card on mobile, beside on large screens */}
              {selectedVideo === acharya.youtube && (
                <div className="w-full lg:w-5/12 xl:w-4/12">
                  <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-amber-200">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${getVideoId(selectedVideo)}?autoplay=1&rel=0&modestbranding=1`}
                        title={`Biography of ${acharya.name}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    {/* Mobile-only close button overlay */}
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="absolute top-3 right-3 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition lg:hidden"
                    >
                      ✕ Close
                    </button>
                  </div>
                  <p className="text-center text-amber-800 font-medium mt-3 text-sm">
                    Now watching: <strong>{acharya.name.split(" ").slice(0, 3).join(" ")}...</strong>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Quote */}
        <div className="text-center mt-20 px-4">
          <p className="text-xl sm:text-2xl text-amber-900 font-medium italic leading-relaxed">
            "Let us walk together on the path of Truth, Love, and Light shown by our Gurus."
          </p>
        </div>
      </div>
    </div>
  );
};

export default DivineGuides;