import React from "react";

const ClockDisplay = ({ time }) => {
  return (
    <div className="text-5xl md:text-7xl font-mono text-white drop-shadow-lg transition duration-300">
      {time}
    </div>
  );
};

export default ClockDisplay;
