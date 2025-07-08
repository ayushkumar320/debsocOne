import React from "react";

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
    </div>
  );
}

export default Description;
