import React, { useState, useRef } from 'react';

// Bal Sanskar page Video Changed Functionalities
const BalSanskarWithForm = () => {
  const [playingVideo, setPlayingVideo] = useState(null); // null | "video1" | "video2"
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const pauseOther = (current) => {
    if (current === "video1" && video2Ref.current) {
      video2Ref.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else if (current === "video2" && video1Ref.current) {
      video1Ref.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  };

  const handleVideoClick = (key) => {
    if (playingVideo === key) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(key);
      pauseOther(key);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
      {/* Header */}
      <header className="text-orange-700 py-6 text-center bg-white/80 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Bal Sanskar Program</h1>
        <p className="text-lg md:text-2xl font-semibold px-4">
          All World Gayatri Pariwar San Antonio, Texas.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

          {/* GOOGLE FORM */}
          <div className="order-1 lg:order-1 lg:sticky lg:top-6 h-fit bg-white rounded-2xl shadow-2xl border-4 border-orange-300 overflow-hidden">
            <div className="text-center py-6 bg-orange-600 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">Register Your Child Now</h2>
            </div>
            <div className="w-full" style={{ position: 'relative', paddingBottom: '135%', height: 0 }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSetixjR35cOrM9OalaNXWpGpJ-QQLo6VePLJ3iOFTpnos4irw/viewform?embedded=true"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Bal Sanskar Registration Form"
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* ALL CONTENT */}
          <div className="order-2 lg:order-2 space-y-8">

            {/* ========== UPDATED VIDEO SECTION ========== */}
            <div className="space-y-8">

              {/* Video 1 */}
              <div
                onClick={() => handleVideoClick("video1")}
                className="rounded-xl overflow-hidden border-8 border-amber-100 cursor-pointer group relative"
              >
                {playingVideo === "video1" ? (
                  <iframe
                    ref={video1Ref}
                    src="https://www.youtube-nocookie.com/embed/Yv53YUnrQ-U?autoplay=1&rel=0&enablejsapi=1"
                    title="Gayatri Yagya Seva"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full aspect-video"
                  ></iframe>
                ) : (
                  <div className="relative aspect-video bg-black">
                    <img
                      src="https://img.youtube.com/vi/Yv53YUnrQ-U/maxresdefault.jpg"
                      alt="Bal Sanskar"
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition"
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

              {/* Video 2 */}
              <div
                onClick={() => handleVideoClick("video2")}
                className="rounded-xl overflow-hidden border-8 border-amber-100 cursor-pointer group relative"
              >
                {playingVideo === "video2" ? (
                  <iframe
                    ref={video2Ref}
                    src="https://www.youtube-nocookie.com/embed/OC5WzYlclUU?autoplay=1&rel=0&enablejsapi=1"
                    title="Gayatri Yagya Seva"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full aspect-video"
                  ></iframe>
                ) : (
                  <div className="relative aspect-video bg-black">
                    <img
                      src="https://img.youtube.com/vi/OC5WzYlclUU/maxresdefault.jpg"
                      alt="Bal Sanskar"
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition"
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
            </div>
            {/* ========== VIDEO SECTION END ========== */}

            {/* 1. Purpose */}
            <section className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
              <h3 className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-2xl font-bold px-6 py-5">
                1. Purpose of the Program
              </h3>
              <div className="p-6 bg-orange-50 space-y-5 text-lg">
                {[
                  "Preserve and promote Indian culture and spiritual values among children",
                  "Foster moral character, discipline, empathy, compassion & self-confidence",
                  "Strengthen physical, mental, and emotional foundation",
                  "Shape children into responsible future citizens"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-3xl">🌸</span>
                    <span>{item}</span>
                  </div>
                ))}
                <div className="mt-6 bg-gradient-to-r from-amber-200 to-yellow-200 border-l-8 border-amber-700 p-6 rounded-r-3xl">
                  <p className="text-xl font-bold text-amber-900 italic text-center">
                    Focus: Inner personality + outward behavior = Complete Sanskar
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Age Group */}
            <section className="bg-white rounded-3xl shadow-xl border border-orange-100 text-center">
              <h3 className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-2xl font-bold py-5">
                2. Target Age Group
              </h3>
              <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
                <p className="text-4xl font-extrabold text-blue-900">5 Years & Above</p>
                <p className="mt-4 text-lg text-gray-700">
                  Curriculum & activities are carefully divided according to age, ability, and learning levels
                </p>
              </div>
            </section>

            {/* 3. Program Structure */}
            <details open className="bg-white rounded-3xl shadow-xl p-6 mt-6">
              <summary className="text-2xl font-bold text-orange-800 cursor-pointer hover:text-orange-900 transition">
                3. Program Structure
              </summary>
              <div className="mt-6 space-y-6 text-lg text-gray-700">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-2xl border-l-4 border-green-600">
                  <h4 className="font-bold text-xl text-green-800 mb-2">Weekend Classes</h4>
                  <p>• 1–2 hour sessions every Saturday or Sunday</p>
                  <p>• Perfectly fits with school schedule</p>
                  <p>• Regular & consistent learning</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-2xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-xl text-blue-800 mb-2">Special Workshops & Camps</h4>
                  <p>• Personality development camps</p>
                  <p>• Cultural festivals & competitions</p>
                  <p>• Meditation and yoga retreats</p>
                  <p>• Value-based games & activities</p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-2xl border-l-4 border-purple-600">
                  <h4 className="font-bold text-xl text-purple-800 mb-2">Annual Events</h4>
                  <p>• Grand cultural programs</p>
                  <p>• Talent exhibitions & competitions</p>
                  <p>• Value-based skits, dramas & presentations</p>
                </div>
              </div>
            </details>

            {/* 4. Core Teaching Components */}
            <details open className="bg-white rounded-3xl shadow-xl p-6 mt-6">
              <summary className="text-2xl font-bold text-orange-800 cursor-pointer hover:text-orange-900 transition">
                4. Core Teaching Components
              </summary>
              <div className="mt-6 space-y-7 text-lg text-gray-700">
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-300">
                  <h4 className="font-bold text-xl text-amber-900 mb-3">A. Spiritual Development</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Gayatri Mantra learning & chanting", "Simple meditation practices", "Pranayama for focus & calm", "Understanding 16 Sanskars", "Daily prayer & gratitude"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="text-amber-600 text-2xl">🌸</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-rose-50 p-6 rounded-2xl border border-rose-300">
                  <h4 className="font-bold text-xl text-rose-900 mb-3">B. Moral & Human Values</h4>
                  <ul className="space-y-2">
                    {["Truthfulness & honesty", "Respect for parents & elders", "Kindness & compassion", "Sharing & cooperation", "Self-discipline & responsibility"].map((val) => (
                      <li key={val} className="flex items-center gap-3">
                        <span className="text-rose-600">🌸</span> {val}
                      </li>
                    ))}
                  </ul>
                  
                </div>

                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-300">
                  <h4 className="font-bold text-xl text-indigo-900 mb-3">C. Cultural Education</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Indian festivals with deep meaning", "Shlokas, bhajans & cultural songs", "Basics of Vedic wisdom", "National pride & global harmony"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="text-indigo-600 text-2xl">🪔</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-300">
                  <h4 className="font-bold text-xl text-teal-900 mb-3">D. Personality Development</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Public speaking", "Confidence building", "Time management", "Goal setting", "Leadership skills", "Problem-solving & critical thinking"].map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <span className="text-teal-600 text-2xl">🥇</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-lime-50 p-6 rounded-2xl border border-lime-300">
                  <h4 className="font-bold text-xl text-lime-900 mb-3">E. Physical & Mental Health</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Yoga asanas", "Pranayama & breathing", "Relaxation techniques", "Concentration games", "Healthy habits & discipline"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="text-lime-600 text-2xl">🍃</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </details>

            {/* Appeal */}
            <details className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100 mt-6">
              <summary className="text-2xl font-bold px-8 py-6 cursor-pointer hover:text-orange-900 text-orange-800 transition">
                Appeal – Why This Program Matters
              </summary>
              <div className="p-10 bg-gradient-to-br from-amber-50 to-orange-50">
                <ul className="space-y-6 text-lg text-gray-800">
                  <li className="flex items-start gap-5"><div><strong>Childhood is the golden period</strong> — young minds absorb values like a sponge.</div></li>
                  <li className="flex items-start gap-5"><div><strong>Bridges the generation gap</strong> — children and parents learn together.</div></li>
                  <li className="flex items-start gap-5"><div><strong>Deep joy for teachers & volunteers</strong> — shaping pure souls.</div></li>
                  <li className="flex items-start gap-5"><div><strong>A silent revolution for nation-building</strong> — every cultured child becomes a responsible citizen.</div></li>
                  <li className="flex items-start gap-5"><div><strong>History proves</strong> — golden eras began with value-driven youth.</div></li>
                </ul>
              </div>
            </details>

            {/* 10. Work Plan */}
            <details open className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100 mt-6">
              <summary className="text-2xl font-bold px-8 py-6 cursor-pointer hover:text-orange-900 text-orange-800 transition">
                10. Work Plan
              </summary>
              <div className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 space-y-7 text-lg text-gray-800">
                <div className="flex items-start gap-3 bg-white rounded-2xl p-6 shadow-md"><div><strong className="text-xl text-teal-900">Weekly Classes</strong><p className="mt-2">1–2 hour joyful sessions every Saturday or Sunday</p></div></div>
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-md"><div><strong className="text-xl text-teal-900">Teacher – Student – Parent Collaboration</strong><p className="mt-2">Regular communication and active involvement of parents</p></div></div>
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-md"><div><strong className="text-xl text-teal-900">100% Participation Expected</strong><p className="mt-2">Regular attendance ensures complete transformation</p></div></div>
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-md"><div><strong className="text-xl text-teal-900">Progress Evaluation</strong><p className="mt-2">Measured through visible improvement in behavior</p></div></div>
                <div className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-md"><div><strong className="text-xl text-teal-900">Annual Cultural Events</strong><p className="mt-2">Grand presentations, dramas, exhibitions</p></div></div>

                <div className="bg-gradient-to-r from-orange-100 to-amber-amber-100 rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-orange-800 mb-5">Key Activities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                    {["Daily Prayer & Shloka", "Yoga & Meditation", "Ramayana Stories", "Festival Celebration", "Seva Projects", "Bhajans & Music"].map((act) => (
                      <div key={act} className="flex items-center bg-white rounded-lg px-4 py-3 shadow">
                        <span className="text-2xl mr-3">✨</span> {act}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </details>

            {/* Final Call to Action */}
            <div className="mt-12 bg-orange-600 text-white text-center py-10 rounded-3xl shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">संकल्प लें – संस्कार दें</h2>
              <p className="text-xl opacity-95">
                Give your child the gift of values, culture & inner strength
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalSanskarWithForm;