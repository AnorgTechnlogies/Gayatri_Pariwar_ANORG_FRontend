import React, { useState, useEffect } from "react";
import SanAntonio_BG from "../assets/HomePage.jpeg";
import Home_page from "../assets/Home_Image.png";
import Service from "../pages/Services/ServicePage";
import OurStory from "../components/OurStory";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HERO SECTION - Made responsive */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* LEFT / TOP: Divine Image - Fixed height on mobile */}
        <div className="w-full lg:w-1/2 h-80 sm:h-96 lg:h-screen relative overflow-hidden">
          <img
            src={Home_page}
            alt="Maa Gayatri with Gurudev & Mataji"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/10 lg:bg-transparent"></div>
        </div>

        {/* RIGHT / BOTTOM: Background + Content */}
        <div
          className="w-full lg:w-1/2 relative bg-cover bg-center flex items-center justify-center min-h-[calc(100vh-20rem)] sm:min-h-[calc(100vh-24rem)] lg:min-h-screen"
          style={{ backgroundImage: `url(${SanAntonio_BG})` }}
        >
          <div className="absolute inset-0 bg-black/50 lg:bg-black/60"></div>

          {/* Content with responsive padding only */}
          <div className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-4 text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6">
            <p className="text-orange-300 text-base sm:text-lg md:text-xl font-bold tracking-widest">
              In the divine presence of Maa Gayatri
            </p>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold text-yellow-300 drop-shadow-2xl leading-tight">
              All World Gayatri Pariwar San Antonio, Texas
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-100 font-bold leading-tight">
              अखिल विश्व गायत्री परिवार, सैन एंटोनियो, टेक्सास
            </p>

            <p className="text-gray-100 text-sm sm:text-base md:text-xl leading-relaxed pt-2 sm:pt-4 lg:pt-15">
              We are dedicated to awakening inner divinity through{" "}
              <span className="text-yellow-400 font-bold">Scientific Spirituality</span>{" "}
              and by self-reformation.
            </p>

            <p className="text-yellow-400 text-xs sm:text-sm md:text-xl font-semibold drop-shadow-2xl">
              "हम बदलेंगे - युग बदलेगा • हम सुधरेंगे - युग सुधरेगा"
            </p>

            {/* Donate Button - Fixed with proper margins */}
            <div className="pt-2 sm:pt-3 lg:pt-6 pb-4 sm:pb-6 lg:pb-0">
              <button
                onClick={() => navigate("/donate")}
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500
                 hover:from-yellow-500 hover:to-orange-600
                 text-red-900 font-bold text-base sm:text-lg md:text-xl
                 px-4 py-2 sm:px-4 sm:py-2 rounded-full 
                 hover:shadow-orange-500/60
                 transform hover:scale-110 transition-all duration-300
                 border-4 border-yellow-300 whitespace-nowrap"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Service />
      <OurStory />

      {/* Scroll to Top Button - Same size, only position changes */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50
                   bg-gradient-to-r from-yellow-400 to-orange-500
                   hover:from-yellow-500 hover:to-orange-600
                   text-red-900 font-bold
                   p-2 rounded-full
                   shadow-2xl hover:shadow-orange-500/50
                   transform hover:scale-110 active:scale-95
                   transition-all duration-300
                   border-4 border-yellow-300
                   animate-bounce"
          aria-label="Scroll to top"
        >
          {/* Arrow Up SVG Icon - Same size */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      )}
    </>
  );
};

export default Home;