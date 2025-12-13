import React from "react";
import { useNavigate } from "react-router-dom";
import Yagya from "../../assets/Yagya.jpg";
import BalSanskar from "../../assets/Bal Sanskar.jpg";
import Meditation from "../../assets/Meditation.jpeg";
import SanskarProgram from "../../assets/Sanskar_Program.jpeg";
import Spiritual from "../../assets/Spiritual.jpeg";
import Youth from "../../assets/Youth.jpg";
import Yoga from "../../assets/yoga.jpg";

const Service = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Yagya/DeepYagya/Hawan",
      description:
        "Yagya-inspired youth camps build leadership, discipline, and selfless character. They promote pure thinking and collective upliftment.",
      img: Yagya,
      link: "/yagyaPage",
    },

    {
      id: 2,
      title: "Bal Sanskar Shala",
      description:
        "Value-based programs promoting discipline, culture, creativity, and moral development for children.",
      img: BalSanskar,
      link: "/BalSanskar",
    },

    {
      id: 3,
      title: "Yoga & Naturopathy",
      description:
        "Yoga & Naturopathy programs promoting physical health, mental wellness, holistic healing, and natural lifestyle practices for children.",
      img: Yoga,
      link: "/Yoga",
    },

    {
      id: 4,
      title: "Gayatri Mantra Meditation Sessions",
      description:
        "Daily and weekly guided meditation sessions based on the Gayatri Mantra promoting clarity, emotional balance, and spiritual upliftment.",
      img: Meditation,
      link: "/MeditationPage",
    },

    {
      id: 5,
      title: "Sanskar Programs (16 Vedic Sanskars)",
      description:
        "Ceremonial rituals like Naamkaran, Vidyarambh, Vivah, Griha Pravesh, and more, conducted with traditional Vedic purity and devotion.",
      img: SanskarProgram,
      link: "/sanskarPage",
    },

    {
      id: 6,
      title: "Youth Awareness & Personality Development",
      description:
        "Skill-building and character-building youth camps cultivating leadership, discipline, and moral values.",
      img: Youth,
      link: "/youthPage",
    },

    {
      id: 7,
      title: "Swadhyay Mandal (Spiritual Study Circle)",
      description:
        "Group study on Akhand Jyoti, Gayatri literature, and Gurudev’s teachings.",
      img: Spiritual,
      link: "/swadhyayPage",
    },
  ];

  // Fixed: Scroll to top + navigate
  const handleRequestYagya = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-orange-50 py-5 px-3">
      <div className="text-center mb-18">
        <h2
          className="py-2 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-700
"
        >
          Our Services for the Community
        </h2>
        <p className="text-orange-700 mt-2 text-xl max-w-3xl mx-auto font-bold">
          We change, World will change – We reform, world will reform
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-orange-100"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-3 text-center">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center mb-6">
                {item.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {/* Request Yagya Button - Smaller & Elegant */}
                <button
                  onClick={() => handleRequestYagya(item.link)}
                  className="bg-gradient-to-r from-orange-600 to-red-600 
                          text-white font-bold 
                          px-5 py-2.5 text-sm                
                          rounded-full 
                          hover:from-orange-700 hover:to-red-700 
                          transform hover:scale-105 transition-all duration-300 
                          shadow-md border border-orange-500"
                >
                  Request Service / Yagya
                </button>

                {/* Donate Button - Matching Smaller Size */}
                <button
                  onClick={() => navigate("/donate")}
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 
            text-gray-900 font-bold 
            px-5 py-2.5 text-sm                 
            rounded-full 
            hover:from-yellow-600 hover:to-amber-700 
            transform hover:scale-105 transition-all duration-300 
            shadow-md border border-amber-400 
            flex items-center justify-center"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional CTA at Bottom */}
    </div>
  );
};

export default Service;
