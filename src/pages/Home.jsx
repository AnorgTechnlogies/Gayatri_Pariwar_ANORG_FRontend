import React, { useState, useEffect } from "react";
import SanAntonio_BG from "../assets/HomePage.jpeg";
import Home_page from "../assets/HomePage_image.png";
import Service from "../pages/Services/ServicePage";
import OurStory from "../components/OurStory";
import { useNavigate, useLocation } from "react-router-dom"; // Add useLocation

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Auto scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]); // Re-run when path changes

  // Show scroll-to-top button when user scrolls down
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Rest of your component remains the same...
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* LEFT / TOP: Divine Image - Always Visible First */}
        <div className="w-full lg:w-1/2 h-96 lg:h-screen relative overflow-hidden ">
          <img
            src={Home_page}
            alt="Maa Gayatri with Gurudev & Mataji"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Very light overlay only on mobile */}
          <div className="absolute inset-0 bg-black/10 lg:bg-transparent"></div>
        </div>

        {/* RIGHT / BOTTOM: Background + Content */}
        <div
          className="w-full lg:w-1/2 relative bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${SanAntonio_BG})` }}
        >
          {/* Soft overlay only on right side */}
          <div className="absolute inset-0 bg-black/50 lg:bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-12 text-center lg:text-left space-y-6">
            <p className="text-orange-300 text-lg md:text-xl font-bold tracking-widest">
              In the divine presence of Maa Gayatri
            </p>

            <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-extrabold text-yellow-300 drop-shadow-2xl leading-tight ">
              All World Gayatri Pariwar San Antonio, Texas
            </h1>

            <p className="text-2xl sm:text-2xl md:text-2xl text-orange-100 font-bold">
              अखिल विश्व गायत्री परिवार, सैन एंटोनियो, टेक्सास
            </p>

            <p className="text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed bg-black/40 backdrop-blur-sm p-6 rounded-3xl">
              We are dedicated to awakening inner divinity through{" "}
              <span className="text-yellow-400 font-bold">
                Scientific Spirituality
              </span>{" "}
              and{" "}
              <span className="text-yellow-400 font-bold">
                Yug Nirman Yojana
              </span>{" "}
              by self-reformation.
            </p>

            <p className="text-yellow-400 text-xl sm:text-2xl md:text-2xl font-semibold drop-shadow-2xl">
              "हम बदलेंगे - युग बदलेगा • हम सुधरेंगे - युग सुधरेगा"
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigate("/donate")}
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500
             hover:from-yellow-500 hover:to-orange-600
             text-red-900 font-bold text-xl md:text-xl
             px-8 py-3 rounded-full 
             shadow-xl hover:shadow-orange-500/60
             transform hover:scale-110 transition-all duration-300
             border-4 border-yellow-300"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Service />
      <OurStory />

      {/* Scroll to Top Button - Using inline SVG (no react-icons needed) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50
                   bg-gradient-to-r from-yellow-400 to-orange-500
                   hover:from-yellow-500 hover:to-orange-600
                   text-red-900 font-bold
                   p-4 rounded-full
                   shadow-2xl hover:shadow-orange-500/50
                   transform hover:scale-110 active:scale-95
                   transition-all duration-300
                   border-4 border-yellow-300
                   animate-bounce"
          aria-label="Scroll to top"
        >
          {/* Arrow Up SVG Icon */}
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