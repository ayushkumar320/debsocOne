import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold cursor-pointer text-orange-400 hover:text-orange-600 transition-colors duration-300">
        SMVIT DEBSOC
      </h1>

      <ul className="hidden md:flex space-x-6 items-center">
        <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
        <li><a href="#Achievements" className="hover:text-orange-400 transition">Team</a></li>
        <li><a href="#events" className="hover:text-orange-400 transition">Highlights</a></li>
        <li><a href="#Review" className="hover:text-orange-400 transition">Review</a></li>
        <li><a href="#Debate Timer" className="hover:text-orange-400 transition">Debate Timer</a></li>
        <li><a href="#session" className="hover:text-orange-400 transition">Session</a></li>
        <li
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-orange-400 transition">Get In Touch</button>
          <div
            className={`absolute top-10 right-0 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-20 transition-all duration-300 origin-top
              ${isDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
          >
            <a href="#login-page-link" className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500">Admin</a>
            <a href="#member-page-link" className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500">Member</a>
            <a href="#equity-form-link" className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500">Equity</a>
            <a href="#apply-now-form-link" className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500">Apply Now</a>
          </div>
        </li>
      </ul>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-orange-400">
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900 border-t border-gray-700 md:hidden z-40 shadow-lg">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            <a href="#home" onClick={closeMobileMenu} className="hover:text-orange-400">Home</a>
            <a href="#Achievements" onClick={closeMobileMenu} className="hover:text-orange-400">Team</a>
            <a href="#events" onClick={closeMobileMenu} className="hover:text-orange-400">Highlights</a>
            <a href="#Review" onClick={closeMobileMenu} className="hover:text-orange-400">Review</a>
            <a href="#Debate Timer" onClick={closeMobileMenu} className="hover:text-orange-400">Debate Timer</a>
            <a href="#session" onClick={closeMobileMenu} className="hover:text-orange-400">Session</a>
            <details className="w-full">
              <summary className="cursor-pointer hover:text-orange-400">Get In Touch</summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#login-page-link" onClick={closeMobileMenu} className="block hover:text-orange-500">Admin</a>
                <a href="#member-page-link" onClick={closeMobileMenu} className="block hover:text-orange-500">Member</a>
                <a href="#equity-form-link" onClick={closeMobileMenu} className="block hover:text-orange-500">Equity</a>
                <a href="#apply-now-form-link" onClick={closeMobileMenu} className="block hover:text-orange-500">Apply Now</a>
              </div>
            </details>
          </div>
        </div>
      )}
    </nav>
    
  );
}

export default Navbar;
