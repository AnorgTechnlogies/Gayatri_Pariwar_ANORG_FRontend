import React, { useState } from "react";
import { Sun } from "lucide-react";

const sanskarDetails = {
  "Annaprashan Sanskar": {
    title: "Annaprashan Sanskar",
    desc: "The sacred ceremony of first feeding of solid food to the child, usually performed in the 6th or 8th month.",
    significance: "Symbolizes the beginning of nourishment beyond mother's milk and introduction to worldly tastes with divine blessings.",
    mantra: "ॐ अन्नपतेन्नस्य नो देहि अनमीवस्य शतिनः..."
  },
  "Antyeshti Sanskar": {
    title: "Antyeshti Sanskar",
    desc: "The final sacrament performed after death, guiding the soul towards liberation.",
    significance: "Helps the departed soul attain peace and merge with the divine consciousness.",
    mantra: "ॐ अग्नये स्वाहा इदं न मम ॥"
  },
  "Birthday Marriage Anniversary": {
    title: "Birthday & Marriage Anniversary",
    desc: "Celebrating life milestones with gratitude, Gayatri mantra jaap, and Yajna.",
    significance: "Renewing commitment to dharma, family, and spiritual growth."
  },
  "Deeksha Sanskar": {
    title: "Deeksha Sanskar",
    desc: "Initiation into Gayatri Sadhana and spiritual discipline under Guru guidance.",
    significance: "Marks the beginning of conscious spiritual journey."
  },
  "Janna Divas Sanskar": {
    title: "Janna Divas Sanskar",
    desc: "Celebration of birth anniversary with reflection, gratitude, and sankalp for better living.",
    significance: "Turning every birthday into a spiritual renewal day."
  },
  "Mundan Sanskar": {
    title: "Mundan Sanskar",
    desc: "The ritual of first hair-cutting of the child, usually at a holy place.",
    significance: "Removal of past life impressions and beginning of new spiritual phase."
  },
  "Namkaran Sanskar": {
    title: "Namkaran Sanskar",
    desc: "Naming ceremony performed on the 11th or 21st day after birth.",
    significance: "Giving a meaningful name based on Vedic astrology and spiritual values."
  },
  "Punsavan Sanskar": {
    title: "Punsavan Sanskar",
    desc: "Performed in the 3rd month of pregnancy for healthy development of the child.",
    significance: "Prayers for physical, mental, and spiritual well-being of the unborn child."
  },
  "Vanaprastha Sanskar": {
    title: "Vanaprastha Sanskar",
    desc: "Transition into retired life focused on spirituality and service.",
    significance: "Detachment from worldly duties, deeper sadhana, and guiding the next generation."
  },
  "Vidyarambh Sanskar": {
    title: "Vidyarambh Sanskar",
    desc: "Initiation into education and learning, usually at age 5.",
    significance: "Beginning formal education with the blessings of Maa Saraswati and Gayatri."
  },
  "Vivah Divas Sanskar": {
    title: "Vivah Divas Sanskar",
    desc: "Marriage anniversary celebrated with Yajna and renewal of sacred vows.",
    significance: "Strengthening marital bond through spiritual commitment."
  },
  "Yajnopaveet Sanskar": {
    title: "Yajnopaveet Sanskar",
    desc: "The sacred thread ceremony marking entry into Brahmacharya ashram.",
    significance: "Acceptance of responsibility to follow dharma and pursue knowledge."
  }
};

const ShodashaSanskarPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      {/* Header */}
      <header className="text-orange-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
         
          <p className="py-2 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-700">Sacred Vedic Life Ceremonies</p>
          <p className="mt-4 text-xl text-orange-700 font-bold">All World Gayatri Pariwar • San Antonio, Texas</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT: 16 Sanskars List */}
          <div className="space-y-7">
            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center border border-amber-200">
              <p className="text-2xl leading-relaxed text-amber-900 font-medium">
                The 16 Vedic Sanskars purify every stage of life — from conception to the final journey —
                building cultured families and a divine society.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { name: "Garbhadhan", desc: "Conception – Prayer for a virtuous child" },
                { name: "Punsavan", desc: "Early pregnancy – Protection of fetus" },
                { name: "Simantonayan", desc: "Baby shower – Mental peace for mother & child" },
                { name: "Jatakarma", desc: "Birth – Welcome with mantras" },
                { name: "Naamkaran", desc: "Naming ceremony with spiritual meaning" },
                { name: "Nishkraman", desc: "First outing to nature & sunlight" },
                { name: "Annaprashan", desc: "First solid food with prayers" },
                { name: "Mundan", desc: "Head shaving for purity & health" },
                { name: "Karnavedh", desc: "Ear piercing for intellect & immunity" },
                { name: "Vidyarambh", desc: "Start of education – Saraswati blessing" },
                { name: "Upanayan", desc: "Sacred thread & student life initiation" },
                { name: "Vedarambh", desc: "Beginning of Vedic studies" },
                { name: "Samavartan", desc: "Graduation – Entry into adulthood" },
                { name: "Vivah", desc: "Sacred Vedic marriage" },
                { name: "Vanaprastha", desc: "Retirement & spiritual service" },
                { name: "Antyeshti", desc: "Last rites – Peaceful journey of soul" }
              ].map((s, i) => (
                <details key={i} open={i < 6} className="bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden">
                  <summary className="flex justify-between items-center px-6 py-5 cursor-pointer hover:bg-amber-50 transition text-lg font-semibold text-orange-800">
                    <span>{i + 1}. {s.name} Sanskar</span>
                    {/* <span className="text-2xl transition-transform duration-300">Down Arrow</span> */}
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-gray-700 text-base leading-relaxed bg-amber-50/70">
                    {s.desc}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Videos + Clickable Articles */}
          <div className="space-y-10">

            {/* Live Sanskar Videos */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-300">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center py-3">
                  <p className="font-bold text-xl">Naamkaran Sanskar</p>
                </div>
                <div className="aspect-video">
                  <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/YXkD9jmvxuQ" title="Naamkaran" allowFullScreen></iframe>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-300">
                <div className="bg-gradient-to-r from-pink-600 to-amber-600 text-white text-center py-3">
                  <p className="font-bold text-xl">Vedic Vivah Sanskar</p>
                </div>
                <div className="aspect-video">
                  <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/iencX8NCn2o" title="Vivah" allowFullScreen></iframe>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-300">
                <div className="bg-gradient-to-r from-teal-600 to-amber-600 text-white text-center py-3">
                  <p className="font-bold text-xl">Mundan Sanskar</p>
                </div>
                <div className="aspect-video">
                  <iframe className="w-full h-full" src="https://www.youtube-nocookie.com/embed/2F34x57oucU" title="Mundan" allowFullScreen></iframe>
                </div>
              </div>
            </div>

            {/* More Articles – Now Clickable with Full Details */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl border-t-8 border-orange-600">
              <h3 className="text-3xl font-bold text-orange-900 mb-8 text-center flex items-center justify-center">
                <Sun className="w-10 h-10 mr-3 text-yellow-500" /> More Articles
              </h3>

              {!selectedArticle ? (
                <ul className="space-y-5">
                  {Object.keys(sanskarDetails).map((article, i) => (
                    <li key={article}>
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="w-full group flex items-center justify-between p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
                            {i + 1}
                          </div>
                          <span className="text-left text-lg font-semibold text-gray-800 group-hover:text-orange-700">
                            {article}
                          </span>
                        </div>
                        <div className="text-orange-600 group-hover:translate-x-2 transition">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="bg-white rounded-3xl p-10 shadow-2xl border border-amber-300">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-4xl font-bold text-amber-900 flex items-center gap-4">
                      <Sun className="w-12 h-12 text-yellow-500" />
                      {sanskarDetails[selectedArticle].title}
                    </h2>
                    <button onClick={() => setSelectedArticle(null)} className="text-red-600 hover:scale-125 transition text-4xl font-bold">
                      ×
                    </button>
                  </div>

                  <div className="space-y-8 text-gray-700">
                    <p className="text-xl leading-relaxed bg-amber-50 p-6 rounded-2xl border-l-8 border-orange-600">
                      {sanskarDetails[selectedArticle].desc}
                    </p>

                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl">
                      <p className="font-bold text-orange-800 text-xl mb-3">Spiritual Significance:</p>
                      <p className="text-lg italic leading-relaxed">
                        {sanskarDetails[selectedArticle].significance}
                      </p>
                    </div>

                    {sanskarDetails[selectedArticle].mantra && (
                      <div className="bg-orange-50 p-8 rounded-2xl text-center font-devanagari text-2xl text-orange-900 font-bold border-4 border-dashed border-amber-600">
                        {sanskarDetails[selectedArticle].mantra}
                      </div>
                    )}
                  </div>

                  <div className="text-center mt-10">
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xl py-4 px-12 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                    >
                      ← Back to All Articles
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShodashaSanskarPage;