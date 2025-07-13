import React from "react";
import { teamMembers } from "../data/TeamData";

function TeamGrid() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center py-12">
      <h2 className="text-center text-white text-2xl md:text-3xl font-semibold mb-4">
        TEAM MEMBERS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full px-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-transparent border border-red-900 rounded-2xl p-8 transition-shadow hover:shadow-lg"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-red-700 mb-6"
            />
            <h3 className="text-white text-xl font-bold mb-2">{member.name}</h3>
            <div className="text-red-500 text-lg border-t border-red-700 pt-2 w-full text-center">{member.position}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamGrid;