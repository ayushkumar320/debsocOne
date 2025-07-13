import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(7 * 60 + 15); // 7:15 in seconds
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <span className="stop-watch">
      {minutes}:{seconds}
    </span>
  );
}

export default Stopwatch;