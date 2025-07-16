import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { teamMembers } from "../data/TeamData";

function TeamGrid() {
  const [activeMember, setActiveMember] = useState(null);

  const close = () => setActiveMember(null);

  useEffect(() => {
    const esc = e => e.key === "Escape" && close();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <h2 className="text-orange-600 text-2xl md:text-3xl font-semibold mb-4">
        TEAM MEMBERS
      </h2>

      {/* grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full px-8 ${
          activeMember ? "pointer-events-none blur-sm" : ""
        }`}
      >
        {teamMembers.map((m, i) => (
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

           {/* Popup Card */}
      {activeMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={close}
          />

          {/* Popup */}
          <div className="relative w-11/12 sm:w-2/3 lg:w-1/3 max-h-[90vh] overflow-y-auto bg-gradient-to-b from-gray-900 to-black border border-orange-600 rounded-3xl p-10 shadow-[0_0_40px_#f97316] transition-all duration-500 ease-in-out transform scale-95 animate-card-drop cursor-pointer animate-cardDrop scrollbar-hide">
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
