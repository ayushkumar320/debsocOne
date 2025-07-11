import React from "react";
import DebateType from "./debateType";

function Description() {
  return (
    <div className="description">
      <label id="debate-label">Type of parliamentary debate:</label>
      <br />
      <select id="debate-type" defaultValue="">
        <option value="" disabled hidden>Select your parliament</option>
        <option value="Asian">Asian</option>
        <option value="British">British</option>
      </select>
      <br />
      <label id="clock-label">Type of clock:</label>
      <br />
            <select id="clock-type">
                <option value="Timer">Timer</option>
                <option value="stopwatch">stopwatch</option>
            </select>
    </div>
  );
}

export default Description;
