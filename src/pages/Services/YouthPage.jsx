import React from "react";
import { Brain, Sparkles, Heart, Eye, Quote, Sun, ExternalLink } from "lucide-react";

const YouthPersonalityPage = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-800 via-orange-700 to-amber-600 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 animate-ping"></div>

        <div className="relative max-w-6xl mx-auto text-center px-6">
         <h6 className="text-xl md:text-xl font-bold tracking-tight">
            हम बदलेंगे युग बदलेगा – हम सुधरेंगे युग सुधरेगा
          </h6>
        
          <h1 className="text-4xl md:text-6xl pt-10 font-bold tracking-tight">
            Youth Awareness & Personality Development
          </h1>
          <p className="text-2xl md:text-4xl font-light mt-5 text-yellow-200">
            Key to Success in All Endeavors
          </p>
          <p className="mt-8 text-lg md:text-2xl max-w-4xl mx-auto font-medium opacity-95 leading-relaxed">
            Modern psychology + Ancient Rishi wisdom now confirm:<br />
            <span className="text-yellow-300 font-bold text-2xl md:text-3xl block mt-4">
              Your Thoughts Are Creating Your Personality, Health & Destiny — Right Now
            </span>
          </p>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Main Article Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">

            {/* Core Truth */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-t-8 border-purple-700">
              <Quote className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <p className="text-lg md:text-xl font-medium text-center leading-relaxed text-gray-700">
                “Innovative research in deep-psychology towards the late 20th Century has revealed some new facts that affirm some of the principles and values of spirituality. 
                <strong> The nature of one’s thinking and emotions is now regarded as the basis of his personality development.</strong>”
              </p>
              <p className="text-center mt-6 text-purple-700 font-semibold">— Science Meets Spirituality</p>
            </div>

            {/* Thinking Shapes Everything */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 shadow-xl border-l-8 border-indigo-600">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6 flex items-center">
                <Brain className="w-10 h-10 mr-4 text-indigo-600" />
                Thinking Shapes Body, Mind & Destiny
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Our thinking affects our <strong>mental, intellectual and physical makeup</strong>. 
                Psychosomatic disorders are well-known proof that negative thinking causes real illness.
              </p>
              <p className="mt-5 text-base md:text-lg">
                On the contrary, <strong>refinement and creative orientation of thoughts</strong> brings positive changes in emotions, behavior, health, and social harmony.
              </p>
            </div>

            {/* The Real Ruler: Unconscious Mind (Fully Expanded) */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 shadow-2xl border-r-8 border-orange-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300 rounded-full blur-3xl opacity-20"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 text-orange-600 mr-5" />
                  <h2 className="text-3xl md:text-4xl font-bold text-orange-900">
                    The Real Ruler: <span className="text-orange-700">Unconscious Mind</span>
                  </h2>
                </div>
                <div className="space-y-5 text-base md:text-lg leading-relaxed text-gray-800">
                  <p>Although the conscious mind appears to be our decision-maker — with the brain as its tool — the <strong className="text-red-600">real ruler is the unconscious mind</strong>.</p>
                  <p>The <strong>intrinsic impressions (saṁskāras)</strong> and <strong>hidden desires</strong> stored here are so powerful that they <span className="font-bold text-red-700 underline">block even the voice of the soul</span>.</p>
                  <p className="italic bg-white/80 rounded-2xl p-6 border-l-4 border-red-600 font-medium">
                    “Think deeply: What truly makes you who you are? It is the force of hidden tendencies of the mind. 
                    These activate desires → generate thought currents → trigger the brain → produce actions → shape character → create destiny.”
                  </p>
                  <p className="font-semibold text-orange-800 text-lg">
                    Therefore, for true self-transformation, we must first <strong>purify the unconscious mind</strong> — control its passions and fill it with divine light.
                  </p>
                  <div className="mt-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-6 text-center font-bold text-xl">
                    Transform the Root → Life Transforms Instantly
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CLICKABLE SIDEBAR (1/3 width) */}
          <div className="space-y-10">

            {/* More Articles */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-xl border-t-8 border-purple-600">
              <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center flex items-center justify-center">
                <Sparkles className="w-9 h-9 mr-3 text-yellow-500" /> More Articles
              </h3>
              <ul className="space-y-4">
                {[
                  "The Amazing Potentials of Human Mind",
                  "Convert Liability into Asset",
                  "Scientific Views on Fourth Dimension of Personality",
                  "The Great Laboratory of Personality Development",
                  "Loose Not Your Heart",
                  "Mastery of the Mind – Key to Success",
                  "Tools and Techniques to Develop Inner Strength",
                  "Unique Spiritual Practice"
                ].map((title, i) => (
                  <li key={i}>
                    <a href="#" className="group flex items-center space-x-3 p-4 bg-white rounded-2xl shadow hover:shadow-xl hover:bg-purple-50 transition">
                      <div className="w-2 h-2 bg-purple-600 rounded-full group-hover:scale-150 transition"></div>
                      <span className="text-base font-medium text-gray-800 group-hover:text-purple-700">{title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Links – Fully Clickable */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl border-t-8 border-orange-600">
              <h3 className="text-2xl font-bold text-orange-900 mb-6 text-center flex items-center justify-center">
                <Sun className="w-9 h-9 mr-3 text-yellow-500" /> Related Topics
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Pragya Yog Sadhna", url: "https://awgp.org/spiritual_wisdom/pragya_yoga" },
                  { title: "Gayatri Sadhana Guide", url: "https://awgp.org/gayatri_sadhana" },
                  { title: "21-Day Anushthan", url: "https://awgp.org/anushthan" },
                  { title: "Holistic Life Style", url: "https://awgp.org/holistic_lifestyle" },
                  { title: "Eternal Fountain of Youth", url: "https://awgp.org/youth" },
                  { title: "Akhand Jyoti Magazine", url: "https://awgp.org/magazine" },
                  { title: "Join DIYA Youth Wing", url: "https://awgp.org/diya" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 bg-white rounded-2xl shadow hover:shadow-xl hover:bg-orange-100 transition"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {i + 1}
                        </div>
                        <span className="text-base font-medium text-gray-800 group-hover:text-orange-700">
                          {item.title}
                        </span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-orange-600 opacity-60 group-hover:opacity-100 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-yellow-100 py-12 text-center">
        <p className="text-2xl md:text-3xl font-bold mb-4">
          ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥
        </p>
        <p className="text-lg">All World Gayatri Pariwar • Shantikunj Haridwar</p>
        <p className="mt-4 text-yellow-300 text-xl font-bold">मन को जीतो • जीवन जीतो</p>
      </footer>
    </div>
  );
};

export default YouthPersonalityPage;