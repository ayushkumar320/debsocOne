import React from "react";

const ControlButtons = ({ onStart, onStop, onReset }) => {
  const baseClass =
    "px-4 py-2 bg-orange-600 text-black rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-orange-500";

  return (
    <div className="flex space-x-4 mt-6">
      <button onClick={onStart} className={baseClass}>
        Start
      </button>
      <button onClick={onStop} className={baseClass}>
        Stop
      </button>
      <button onClick={onReset} className={baseClass}>
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;
