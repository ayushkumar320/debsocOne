import React from "react";
import { teamMembers } from "../data/TeamData";

function TeamGrid() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center py-12">
      <h2 className="text-center text-orange-600 text-2xl md:text-3xl font-semibold mb-4">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full px-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-orange-600 rounded-2xl p-6 transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_#f97316] cursor-pointer overflow-hidden "
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-orange-600 mb-6 aspect-square"
            />
            <h3 className="text-white text-xl font-bold mb-2">{member.name}</h3>
            <div className="text-orange-500 text-lg border-t border-orange-600 pt-2 w-full text-center">
              {member.position}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamGrid;
