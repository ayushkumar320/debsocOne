import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-6 flex items-center justify-between shadow-md transition-colors duration-300 fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold cursor-pointer text-orange-400 hover:text-orange-600 transition-colors duration-300">
        SMVIT DEBSOC
      </h1>
      <ul className="flex space-x-6 items-center">
        <li><a href="#home" className="hover:text-orange-400 transition-colors duration-300">Home</a></li>
        <li><a href="#Achievements" className="hover:text-orange-400 transition-colors duration-300">Achievements</a></li>
        <li><a href="#events" className="hover:text-orange-400 transition-colors duration-300">Highlights</a></li>
        <li><a href="#Review" className="hover:text-orange-400 transition-colors duration-300">Review</a></li>
        <li><a href="#Gallery" className="hover:text-orange-400 transition-colors duration-300">Gallery</a></li>
        <li><a href="#Debate Timer" className="hover:text-orange-400 transition-colors duration-300">Debate Timer</a></li>
        <li><a href="session" className="hover:text-orange-400 transition-colors duration-300">Session</a></li>

        {/* Contact Us Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={closeDropdown}
        >
          <button
            onClick={toggleDropdown}
            className="hover:text-orange-400 transition-colors duration-300 focus:outline-none"
          >
            Get In Touch
          </button>

          <div
            className={`absolute top-10 right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-10 transform transition-all duration-500 origin-top
              ${isDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
          >
            <a
              href="#login page link"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Admin
            </a>
            <a
              href="#member page link"
              className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200 hover:text-orange-500"
            >
              Member
            </a>
             <a
              href="#google form link"
              className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200 hover:text-orange-500"
            >
              Equity
            </a>
            <a
              href="#google form link"
              className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200 hover:text-orange-500"
            >
              Apply Now
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
