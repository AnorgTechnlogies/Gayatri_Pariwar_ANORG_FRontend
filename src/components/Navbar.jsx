import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import Logo from "../assets/Logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Education", path: "/education" },
  { name: "Media", path: "/media" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  // Function to handle logo click
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home
      navigate("/");
    }
    // Always scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Function to handle home link click
  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home
      navigate("/");
    } else {
      // If already on home page, just scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Function to handle nav link click (for other pages)
  const handleNavLinkClick = (path) => {
    // If clicking a link that's not home, just navigate normally
    if (path !== "/") {
      navigate(path);
      // Scroll to top when navigating to a new page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // If clicking home link, use handleHomeClick
      handleHomeClick();
    }
    // Close mobile menu
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20">
        <div className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full">
              {/* Logo + Text - Always Visible */}
              <div 
                className="flex items-center cursor-pointer"
                onClick={handleLogoClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleLogoClick();
                  }
                }}
              >
                {/* Logo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-60"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src={Logo} 
                      alt="AWGP Logo" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>

                {/* Text - Responsive & Always Shown */}
                <div className="ml-3 text-white">
                  <p className="text-sm sm:text-base lg:text-lg font-bold leading-tight">
                    All World Gayatri Pariwar
                  </p>
                  <p className="text-xs sm:text-sm font-semibold opacity-90 leading-none">
                    San Antonio, Texas
                  </p>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.path);
                    }}
                    className={`text-white font-medium hover:text-yellow-200 px-3 py-2 rounded-md hover:bg-white/10 transition ${
                      location.pathname === link.path ? 'bg-white/10 text-yellow-200' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/donate"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick("/donate");
                  }}
                  className="ml-4 px-8 py-3 bg-white text-orange-600 font-bold rounded-full shadow-xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300"
                >
                  Donate
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white/20"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X size={28} className="text-white" />
                ) : (
                  <Menu size={28} className="text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white shadow-2xl border-t border-gray-200">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavLinkClick(link.path)}
                    className={`block w-full text-left py-3 px-5 text-gray-800 font-semibold hover:bg-orange-50 rounded-lg transition ${
                      location.pathname === link.path ? 'bg-orange-50 text-orange-600' : ''
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNavLinkClick("/donate")}
                  className="block w-full text-center mt-4 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl"
                >
                  Donate Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer so content isn't hidden under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;