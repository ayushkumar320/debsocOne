import React from "react";

function Description() {
  return (
    <div className="description">
     <label id="debate-label">Type of parliamentary debate:</label>
        <br />
     <select id="debate-type">
       <option value="Asian">Asian</option>
       <option value="British">Bitish</option>
     </select>
    </div>
  );
}

export default Description;
