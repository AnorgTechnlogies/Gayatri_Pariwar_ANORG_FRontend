import React from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1e150e] text-white py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* MAIN 3 COLUMNS - More Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-sm">
          
          {/* LEFT: Logo + Name + Address */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <img src={Logo} alt="Logo" className="w-10 h-10" />
              <div>
                <p className="font-semibold text-gray-200">All World Gayatri Pariwar</p>
                <p className="text-gray-300 text-sm">San Antonio, Texas</p>
              </div>
            </div>
            
            {/* Address Section - Compact Aside */}
            <aside className="bg-gray-800/30 rounded-lg p-3 mt-2">
              <p className="font-medium text-gray-300 text-xs mb-1">Address</p>
              <p className="text-[#ff8c4d] text-xs leading-tight">
                Gayatri Center of Texas<br />
                P.O. Box 592343<br />
                San Antonio, TX 78259
              </p>
            </aside>
          </div>

          {/* CENTER: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-orange-400 mb-3">Contact</h3>
            
            <div>
              <p className="font-medium text-gray-300 text-xs">Email</p>
              <a 
                href="mailto:awgp.satx@gmail.com" 
                className="text-[#ff8c4d] hover:text-orange-300 transition text-sm block mt-1"
              >
                awgp.satx@gmail.com
              </a>
            </div>

            <div>
              <p className="font-medium text-gray-300 text-xs">Phone</p>
              <p className="text-[#ff8c4d] text-sm mt-1 space-y-1">
                <span className="block">210 380 3054</span>
                <span className="block">210 542 3332</span>
                <span className="block">210 542 3336</span>
              </p>
            </div>
          </div>

          {/* RIGHT: Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-orange-400 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/service", label: "Services" },
                { to: "/about", label: "About Us" },
                { to: "/media", label: "Media" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-orange-100 hover:text-orange-300 hover:underline transition text-sm font-medium block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR - More Compact */}
        <div className="border-t border-gray-700/50 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
            
            {/* Tax Info */}
            <p className="text-center md:text-left">
              AWGP San Antonio • Non-profit • Donations are tax deductible
            </p>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                Copyright © 2025 AWGP San Antonio, TX
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;