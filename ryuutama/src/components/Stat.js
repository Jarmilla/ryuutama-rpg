import React from "react";

function Stat({ statName, icon }) {
  return (
    <div className="character-rows">
      <div>
        <div>{statName.toUpperCase()}</div>
        <div>
          d
          <select name="dice">
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>
      <img src={icon} alt={statName} />
    </div>
  );
}

export default Stat;
