// src/pages/Media.jsx
import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Shantikunj from "../assets/Shantikunj2.jpg";
import Shantikunj1 from "../assets/Shantikunj3.jpg";

// Your local photos
import photo1 from "../assets/Media_image.jpeg";
import photo2 from "../assets/Media_image 2.jpeg";
import photo3 from "../assets/Media_image 3.jpeg";
import photo4 from "../assets/Media_image 4.jpeg";
import photo5 from "../assets/Media_image 5.jpeg";
import photo6 from "../assets/Media_image 6.jpeg";
import photo7 from "../assets/Media_image 7.jpeg";
import photo8 from "../assets/Media_image 8.jpeg";

const Media = () => {
  const [showVideos, setShowVideos] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState(6);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const navigate = useNavigate();

  const videoIds = [
    "EfJWZX2LzoM", "-N8U1TQwdfs", "r-aC-8tYfA0", "OC5WzYlclUU", "Yv53YUnrQ-U", "yQjHSIHPJfw"
  ];

  const allPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

  // Video Gallery View
  if (showVideos) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900">Video Gallery</h1>
            <button
              onClick={() => { setShowVideos(false); setPlayingVideoId(null); }}
              className="text-red-600 hover:scale-110 transition"
            >
              <X className="w-12 h-12" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videoIds.map((id) => {
              const isPlaying = playingVideoId === id;
              return (
                <div
                  key={id}
                  onClick={() => setPlayingVideoId(isPlaying ? null : id)}
                  className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-500"
                >
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                      className="w-full aspect-video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="aspect-video relative">
                      <img
                        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                        alt="Video"
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className=" p-6 rounded-full shadow-2xl group-hover:scale-125 transition">
                          <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                            {/* <path d="M8 5v14l11-7L8 5z"/> */}
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div className="p-4 bg-gradient-to-t from-black/70 to-transparent text-white font-bold text-center">
                    {isPlaying ? "Now Playing" : "Click to Play"}
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Photo Gallery View
  if (showPhotos) {
    const displayedPhotos = allPhotos.slice(0, visiblePhotos);

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900">Photo Gallery</h1>
            <button
              onClick={() => { setShowPhotos(false); setVisiblePhotos(6); }}
              className="text-red-600 hover:scale-110 transition"
            >
              <X className="w-12 h-12" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {displayedPhotos.map((photo, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500">
                <img
                  src={photo}
                  alt={`Divine Moment ${i + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-bold text-lg drop-shadow-lg">Gayatri Pariwar</p>
                </div>
              </div>
            ))}
          </div>

          {visiblePhotos < allPhotos.length && (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisiblePhotos(prev => Math.min(prev + 6, allPhotos.length))}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xl px-16 py-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Main Beautiful Landing Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h1 className=" py-2 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-700">
          Media & Spiritual Resources
        </h1>
        <p className="text-2xl md:text-3xl text-amber-800 font-bold italic mb-16">
          सत् का प्रकाश सर्वत्र फैलाएं
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 max-w-5xl mx-auto">
          {/* Video Gallery */}
          <div
            onClick={() => setShowVideos(true)}
            className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-700"
          >
            <img
              src= {Shantikunj}
              alt="Yagya & Pravachan"
              className="w-full h-96 object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-4xl font-bold mb-2 drop-shadow-2xl">Video Gallery</h3>
              {/* <p className="text-lg opacity-95 drop-shadow-lg">Pravachans • Yagyas • Bhajans • Satsang</p> */}
              <div className="mt-4 inline-block px-8 py-3 bg-white/20 backdrop-blur-md rounded-full font-bold group-hover:bg-white/40 transition-all duration-500">
                Explore Videos
              </div>
            </div>
            <div className="absolute inset-0 ring-4 ring-orange-400/0 group-hover:ring-orange-400/40 transition-all duration-700"></div>
          </div>

          {/* Photo Gallery */}
          <div
            onClick={() => setShowPhotos(true)}
            className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-700"
          >
            <img
              src= {Shantikunj1}
              alt="Shantikunj & Events"
              className="w-full h-96 object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-4xl font-bold mb-2 drop-shadow-2xl">Photo Gallery</h3>
              {/* <p className="text-lg opacity-95 drop-shadow-lg">Events • Yagyashala • Devotees • Divine Moments</p> */}
              <div className="mt-4 inline-block px-8 py-3 bg-white/20 backdrop-blur-md rounded-full font-bold group-hover:bg-white/40 transition-all duration-500">
               Explore Gallery
              </div>
            </div>
            <div className="absolute inset-0 ring-4 ring-yellow-400/0 group-hover:ring-yellow-400/40 transition-all duration-700"></div>
          </div>
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-800 via-amber-700 to-orange-800 p-1 rounded-3xl">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-10 shadow-2xl">
              <p className="text-2xl md:text-4xl text-amber-900 font-bold leading-relaxed tracking-wide">
                ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं<br/>
                भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥
              </p>
              <p className="mt-4 text-amber-700 text-lg italic">~ गायत्री महामंत्र ~</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;