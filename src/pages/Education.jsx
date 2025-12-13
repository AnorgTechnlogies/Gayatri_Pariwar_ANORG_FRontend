import React from "react";

const Education = () => {
  const educationItems = [
    {
      title: "Vedic & Spiritual Education",
      description:
        "Teaches scriptures, Gayatri Mantra, Upanishads, Bhagavad Gita, Dharma studies, Yagya science, spiritual psychology, and moral philosophy.",
      icon: "📿",
      gradient: "from-orange-400 to-amber-500",
    },
    {
      title: "Bal Sanskar Shala",
      description:
        "Value-based foundation for children through discipline, meditation, moral stories, cultural activities, and character development.",
      icon: "🌸",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      title: "Yoga & Naturopathy Education",
      description:
        "Covers yoga asanas, pranayama, detoxification, naturopathy, and Ayurvedic lifestyle for complete wellness.",
      icon: "🧘",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      title: "Scientific Spirituality",
      description:
        "Mind science, thought-wave studies, neuro-spiritual research, and scientific benefits of Yagya and meditation.",
      icon: "🧠",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Environmental Education (Prakriti Sanskar)",
      description:
        "Awareness of ecology, plantation, water conservation, cleanliness, and eco-friendly living.",
      icon: "🌿",
      gradient: "from-lime-500 to-green-600",
    },
    {
      title: "Social & Moral Education",
      description:
        "Focuses on compassion, responsibility, teamwork, selfless service, and social harmony.",
      icon: "🤝",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 py-5 px-3">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="py-2 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-700">
          Our Education & Learning Programs
        </h1>
        <p className="text-xl text-amber-900 mt-4 font-medium max-w-4xl mx-auto">
          Holistic development through Vedic wisdom, scientific spirituality, yoga, and moral values
        </p>
        <div className="w-40 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {educationItems.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-orange-100"
          >
            {/* Gradient Top Bar */}
            <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>

            <div className="p-4 text-center">
              {/* Icon with Glow Effect */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-white to-orange-50 shadow-xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">{item.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Join Button */}
              <a
                href={item.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full py-4 rounded-full font-bold text-white shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r ${item.gradient} hover:shadow-2xl`}
              >
                Join Live Class
              </a>
            </div>

            {/* Bottom Wave Decoration */}
            <div className="h-2 bg-gradient-to-r from-transparent via-orange-200 to-transparent opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;