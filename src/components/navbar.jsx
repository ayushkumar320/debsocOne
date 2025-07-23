import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-50">
        <h1
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold cursor-pointer text-orange-400 hover:text-orange-600 transition-colors duration-300"
        >
          SMVIT DEBSOC
        </h1>

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

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-orange-400 z-60 relative">
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-black shadow-2xl z-50 transition-transform duration-300 ease-out md:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6 pt-20 min-h-full">
            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-4">
                <h2 className="text-orange-400 font-bold text-lg mb-4">Navigation</h2>
                <div className="space-y-3">
                  <button 
                    onClick={() => scrollToSection("home")} 
                    className="block w-full text-left py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection("team")} 
                    className="block w-full text-left py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    Team
                  </button>
                  <button 
                    onClick={() => scrollToSection("achievements")} 
                    className="block w-full text-left py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    Achievements
                  </button>
                  <button 
                    onClick={() => scrollToSection("alumini")} 
                    className="block w-full text-left py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    Alumni
                  </button>
                  <button 
                    onClick={() => scrollToSection("equity")} 
                    className="block w-full text-left py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    Equity
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <h2 className="text-orange-400 font-bold text-lg mb-4">Tools & Resources</h2>
                <div className="space-y-3">
                  <a 
                    href="/DebateTimer/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={closeMobileMenu} 
                    className="block py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    Debate Timer
                  </a>
                  <a 
                    href="/Session-1/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={closeMobileMenu} 
                    className="block py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    Session
                  </a>
                  <a 
                    href="/Gallery/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={closeMobileMenu} 
                    className="block py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    Gallery
                  </a>
                </div>
              </div>

              <div className="pb-8">
                <h2 className="text-orange-400 font-bold text-lg mb-4">Login</h2>
                <div className="space-y-3">
                  <a
                    href="/FormPage/index.html"
                    className="block py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    Admin Login
                  </a>
                  <a
                    href="/FormPage/index.html"
                    className="block py-2 px-3 rounded-lg text-white hover:bg-gray-700 hover:text-orange-400 active:text-orange-400 transition-all duration-200 transform hover:translate-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    Member Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
