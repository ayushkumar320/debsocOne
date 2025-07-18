import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const lenis = useLenis();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && lenis) {
      lenis.scrollTo(section, { offset: -80 });
    }
    closeMobileMenu();
  };

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
      <h1
        onClick={() => scrollToSection("home")}
        className="text-2xl font-bold cursor-pointer text-orange-400 hover:text-orange-600 transition-colors duration-300"
      >
        SMVIT DEBSOC
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <button onClick={() => scrollToSection("team")} className="hover:text-orange-400 transition">Team</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("achievements")} className="hover:text-orange-400 transition">Achievements</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("alumini")} className="hover:text-orange-400 transition">Alumni</button>
        </li>
        <li>
          <a href="/DebateTimer/index.html" className="hover:text-orange-400 transition" target="_blank" rel="noopener noreferrer">Debate Timer</a>
        </li>
        <li>
          <a href="/Session-1/index.html" className="hover:text-orange-400 transition" target="_blank" rel="noopener noreferrer">Session</a>
        </li>
        <li>
          <button onClick={() => scrollToSection("equity")} className="hover:text-orange-400 transition">Equity</button>
        </li>
        <li>
          <a href="/Gallery/index.html" className="hover:text-orange-400 transition" target="_blank" rel="noopener noreferrer">Gallery</a>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-orange-400 transition">Login</button>
          <div
            className={`absolute top-10 right-0 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-20 transition-all duration-300 origin-top ${
              isDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
            }`}
          >
            <a
              href="/FormPage/index.html"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>
            <a
              href="/FormPage/index.html"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Member
            </a>
          </div>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-orange-400">
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900 border-t border-gray-700 md:hidden z-40 shadow-lg">
          <div className="flex flex-col items-start space-y-4 px-6 py-4">
            <button onClick={() => scrollToSection("home")} className="hover:text-orange-400">Home</button>
            <button onClick={() => scrollToSection("team")} className="hover:text-orange-400">Team</button>
            <button onClick={() => scrollToSection("achievements")} className="hover:text-orange-400">Achievements</button>
            <button onClick={() => scrollToSection("alumini")} className="hover:text-orange-400">Alumni</button>
            <button onClick={() => scrollToSection("equity")} className="hover:text-orange-400">Equity</button>
            <a href="/DebateTimer/index.html" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="hover:text-orange-400">Debate Timer</a>
            <a href="/Session-1/index.html" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="hover:text-orange-400">Session</a>
            <a href="/Gallery/index.html" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="hover:text-orange-400">Gallery</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
