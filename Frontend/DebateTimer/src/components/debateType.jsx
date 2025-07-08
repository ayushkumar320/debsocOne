import React from "react";

function DebateType(){

    return (
        <div className="description">
            <label id="debate-label">Type of parliamentary debate:</label>
            <br />
            <select id="debate-type">
                <option value="Asian">Asian</option>
                <option value="British">British</option>
            </select>
        </div>
    );
}

export default DebateType;
