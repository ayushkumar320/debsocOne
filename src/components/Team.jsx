import React, { useState, useEffect, useRef } from "react";
import { X, Instagram } from "lucide-react";
import { teamMembers } from "../data/TeamData";
import { useLenis } from "@studio-freight/react-lenis";

function TeamGrid() {
  const [activeMember, setActiveMember] = useState(null);
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const modalRef = useRef(null);
  const lenis = useLenis();

  const close = () => {
    document.body.style.overflow = "auto";
    document.body.style.touchAction = "auto";
    if (lenis) lenis.start();
    setActiveMember(null);
  };

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) setShowAllMembers(true);
  }, [isDesktop]);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  useEffect(() => {
    if (activeMember) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      if (lenis) lenis.stop();

      const preventLenisWheel = (e) => e.stopPropagation();
      const modalNode = modalRef.current;
      if (modalNode) {
        modalNode.addEventListener("wheel", preventLenisWheel, { passive: false });
        modalNode.addEventListener("touchmove", preventLenisWheel, { passive: false });
      }

      return () => {
        if (modalNode) {
          modalNode.removeEventListener("wheel", preventLenisWheel);
          modalNode.removeEventListener("touchmove", preventLenisWheel);
        }
      };
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
      if (lenis) lenis.start();
    }
  }, [activeMember, lenis]);

  const coreMembers = teamMembers.filter((m) => m.position !== "Member");
  const generalMembers = teamMembers.filter((m) => m.position === "Member");
  const visibleMembers = showAllMembers ? generalMembers : generalMembers.slice(0, 2);
  const combinedTeam = [...coreMembers, ...visibleMembers];

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <h2 className="text-orange-600 text-2xl md:text-3xl font-semibold mb-4">
        TEAM MEMBERS
      </h2>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full px-8 ${
          activeMember ? "pointer-events-none blur-sm" : ""
        }`}
      >
        {combinedTeam.map((m, i) => (
          <div
            key={i}
            onClick={() => setActiveMember(m)}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-orange-600 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_#f97316] cursor-pointer"
          >
            <img
              src={m.avatar}
              alt={m.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-orange-600 mb-6"
            />
            <h3 className="text-white text-xl font-bold mb-2">{m.name}</h3>
            <div className="text-orange-500 text-lg border-t border-orange-600 pt-2 w-full text-center">
              {m.position}
            </div>
          </div>
        ))}
      </div>

      {!showAllMembers && !isDesktop && (
        <button
          className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full font-semibold shadow-lg hover:bg-orange-700 transition md:hidden"
          onClick={() => setShowAllMembers(true)}
        >
          View All Members
        </button>
      )}

      {activeMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-overlayFade"
            onClick={close}
          />
          <div
            ref={modalRef}
            className="relative w-11/12 sm:w-2/3 lg:w-1/3 max-h-[85vh] overflow-y-auto overscroll-contain scrollbar-hide bg-gradient-to-b from-gray-900 to-black border border-orange-600 rounded-3xl p-8 shadow-[0_0_40px_#f97316] animate-cardDrop"
          >
            <div className="pointer-events-none absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black to-transparent" />
            <button
              onClick={close}
              className="absolute top-4 right-4 text-orange-500 hover:text-orange-400"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <h3 className="text-white text-3xl font-bold text-center mb-2">
              {activeMember.name}
            </h3>
            <p className="text-orange-500 text-lg text-center mb-4">
              {activeMember.position}
            </p>
            <p className="text-gray-300 text-center text-base leading-relaxed mb-6 whitespace-pre-line">
              {activeMember.description}
            </p>
            {activeMember.instagram && (
              <div className="flex justify-center">
                <a
                  href={activeMember.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition"
                >
                  <Instagram size={28} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default TeamGrid;
