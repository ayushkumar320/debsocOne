import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import achievements from "../data/achievements";

const AchievementCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % achievements.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden px-4">
      {/* <h1 className="text-4xl font-extrabold text-orange-500 mb-6">ACHIEVEMENTS</h1> */}
      <div className="relative w-full max-w-7xl h-[420px] flex items-center justify-center">
        
        <h1 className="absolute top-0 left-60 -translate-x-1/2 -translate-y-7 text-4xl font-extrabold text-orange-500 z-50 ">
          ACHIEVEMENTS
        </h1>

        {achievements.map((item, index) => {
          const offset = (index - activeIndex + achievements.length) % achievements.length;
          const isActive = index === activeIndex;
          const layer = offset === 0 ? 10 : 10 - offset;

          return (
            <div
              key={index}
              className={`absolute w-[95%] max-w-6xl h-[360px] transition-all duration-700 ease-in-out transform
                ${isActive ? "scale-100 opacity-100 z-30" : "scale-[0.95] opacity-40"}
              `}
              style={{
                zIndex: layer,
                transform: `
                  translateX(-50%) translateY(${offset * 20}px)
                  scale(${isActive ? 1 : 1 - offset * 0.03})
                `,
                left: "50%",
              }}
            >
              <div className="w-full h-full bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-1/2 h-full object-cover"
                />
                <div className="w-1/2 p-6 flex flex-col justify-center text-black">
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 text-orange-600 bg-white/10 hover:bg-white/20 backdrop-blur p-3 rounded-full z-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 sm:right-6 -translate-y-1/2 text-orange-600 bg-white/10 hover:bg-white/20 backdrop-blur p-3 rounded-full z-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AchievementCarousel;
