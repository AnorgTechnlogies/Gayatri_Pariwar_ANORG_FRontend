// src/pages/MeditationPage.jsx
import React, { useState, useRef } from "react";

const baseVideos = [
  {
    id: "GEVvyIrQZnA",
    title: "Gayatri Mantra 108 Times – Peaceful Meditation",
  },
  {
    id: "yQjHSIHPJfw",
    title: "Deva Premal – Gayatri Mantra (30 Minutes)",
  },
];

// Meditation Page Video Changed Functionalities

const MeditationPage = () => {
  const [playingVideo, setPlayingVideo] = useState(null); // null or video id
  const videoRefs = useRef({}); // To store refs for each video

  // Pause all other videos
  const pauseOthers = (currentId) => {
    Object.keys(videoRefs.current).forEach((id) => {
      if (id !== currentId && videoRefs.current[id]) {
        videoRefs.current[id].contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  };

  const handleVideoClick = (videoId) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
      pauseOthers(videoId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="py-2 text-5xl md:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            Gayatri Mantra Meditation
          </h1>
          <p className="text-xl text-amber-800 mt-4 font-medium italic">
            A Divine Journey to Inner Light, Peace & Awakening
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Original content - UNCHANGED */}
          <div className="space-y-8">
            {[
              { color: "yellow-100", border: "orange-500", text: "Gayatri Meditation connects the mind with divine cosmic energy. When thoughts focus deeply, a magnetic field forms that attracts powerful spiritual vibrations, filling the Sadhak with the subtle energy of ", highlight: "Adi Shakti" },
              { color: "orange-50", border: "yellow-600", text: "Sit in a calm place with a relaxed body and steady mind. Visualize a vast blue sky and a glowing star-like light—this is the divine light of ", highlight: "Gayatri", text2: ". With practice, it becomes brighter and reveals the radiant image of Gayatri Mata." },
              { color: "yellow-50", border: "orange-600", text: "As meditation deepens, divine warmth spreads within, burning away negativity and filling the inner self with strength, clarity, and purity. Coloured lights or moving sparkles are positive signs of spiritual progress." },
              { color: "orange-100", border: "red-500", text: "In advanced stages, the brilliance of Gayatri stabilizes in the heart or mind, awakening higher wisdom and selflessness. The Sadhak becomes filled with ", highlight: "Brahmateja", text2: " — a fountain of divine energy.", highlightColor: "text-red-600" },
              { color: "yellow-200", border: "orange-700", text: "Ultimately, Gayatri Meditation transforms life — reducing negativity, increasing purity, and awakening divine consciousness and inner radiance." },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-${item.color} p-6 rounded-2xl border-l-8 border-${item.border} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              >
                <p className="text-gray-800 text-lg leading-relaxed">
                  {item.text}
                  {item.highlight && (
                    <span className={`font-bold text-orange-700 ${item.highlightColor || ""}`}>
                      {" "}{item.highlight}
                    </span>
                  )}
                  {item.text2}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Videos - Same technique as BalSanskar (NO BLACK SCREEN) */}
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-amber-900 text-center mb-10 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Guided Meditation Videos
            </h2>

            <div className="space-y-16">

              {baseVideos.map((video) => {
                const isPlaying = playingVideo === video.id;

                return (
                  <div key={video.id} className="flex justify-center">
                    <div className="relative max-w-2xl w-full">

                      {/* Video Card - Click to play/pause */}
                      <div
                        onClick={() => handleVideoClick(video.id)}
                        className="rounded-3xl overflow-hidden border-8 border-amber-200 cursor-pointer group relative shadow-2xl"
                      >
                        {isPlaying ? (
                          <iframe
                            ref={(el) => (videoRefs.current[video.id] = el)}
                            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&enablejsapi=1&modestbranding=1`}
                            title={video.title}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full aspect-video"
                          ></iframe>
                        ) : (
                          <div className="relative aspect-video bg-black">
                            <img
                              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                              alt={video.title}
                              className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white/90 p-3 rounded-full shadow-2xl group-hover:scale-125 transition-transform">
                                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7L8 5z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Title below */}
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-semibold text-amber-900 bg-amber-100 bg-opacity-80 px-8 py-3 rounded-full inline-block shadow-md">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 text-white p-10 rounded-3xl text-center shadow-2xl border-4 border-amber-300">
              <p className="text-3xl font-bold leading-relaxed">
                “Meditation is the tongue of the soul and the language of our spirit.”
              </p>
              <p className="mt-6 text-xl italic opacity-90">— Param Pujya Gurudev</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationPage;