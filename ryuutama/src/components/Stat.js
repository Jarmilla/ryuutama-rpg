import React from "react";

function Stat({ statName, icon, stat, condition }) {
  return (
    <div className="character-rows">
      <div>
        <div>{statName.toUpperCase()}</div>
        <div>
          <select name="dice" onClick={(e) => stat(e.target.value)}>
            <option value="0">-</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            {condition >= 10 ? <option value="10">10</option> : ""}
            {condition >= 10 ? <option value="12">12</option> : ""}
            {condition >= 10 ? <option value="20">20</option> : ""}
          </select>
        </div>
      </div>
      <img src={icon} alt={statName} />
    </div>
  );
}

export default Stat;
