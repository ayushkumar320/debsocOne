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

      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <button
            onClick={() => scrollToSection("team")}
            className="hover:text-orange-400 transition"
          >
            Team
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("achievements")}
            className="hover:text-orange-400 transition"
          >
            Achievements
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("alumini")}
            className="hover:text-orange-400 transition"
          >
            Alumini
          </button>
        </li>
        <li>
          <a href="#Debate Timer" className="hover:text-orange-400 transition">
            Debate Timer
          </a>
        </li>
        <li>
          <a href="#session" className="hover:text-orange-400 transition">
            Session
          </a>
        </li>
        <li>
          <a href="#equity" className="hover:text-orange-400 transition">
            Equity
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-orange-400 transition">
            Gallery
          </a>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-orange-400 transition">
            Get In Touch
          </button>
          <div
            className={`absolute top-10 right-0 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-20 transition-all duration-300 origin-top ${
              isDropdownOpen
                ? "opacity-100 scale-100 visible"
                : "opacity-0 scale-95 invisible"
            }`}
          >
            <a
              href="#login-page-link"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500"
            >
              Admin
            </a>
            <a
              href="#member-page-link"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500"
            >
              Member
            </a>
            <a
              href="#apply-now-form-link"
              className="block px-4 py-2 hover:bg-gray-700 hover:text-orange-500"
            >
              Apply Now
            </a>
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
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-orange-400"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="hover:text-orange-400"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className="hover:text-orange-400"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("alumini")}
              className="hover:text-orange-400"
            >
              Alumini
            </button>
            <a
              href="#Debate Timer"
              onClick={closeMobileMenu}
              className="hover:text-orange-400"
            >
              Debate Timer
            </a>
            <a
              href="#session"
              onClick={closeMobileMenu}
              className="hover:text-orange-400"
            >
              Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
