import React from "react";
import passTargetValueTo from "../utility/passTargetValueTo";
import strIcon from "../img/str.png";
import dexIcon from "../img/dex.png";
import intIcon from "../img/int.png";
import sptIcon from "../img/spt.png";

const statImage = {
  str: strIcon,
  dex: dexIcon,
  int: intIcon,
  spt: sptIcon,
};

function Stat({ isSaved, stat, statName, setStat, condition }) {
  return (
    <div className="stat-container">
      <div>
        <h3>{statName.toUpperCase()}</h3>
        {isSaved ? (
          <p>{stat}</p>
        ) : (
          <select name="dice" onClick={passTargetValueTo(setStat)}>
            <option selected value={stat}>
              {stat}
            </option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            {condition >= 10 ? <option value="10">10</option> : ""} {/* will rearranging when adding Levels */}
            {condition >= 10 ? <option value="12">12</option> : ""}
            {condition >= 10 ? <option value="20">20</option> : ""}
          </select>
        )}
      </div>
      <img src={statImage[statName]} alt={statName} />
    </div>
  );
}

export default Stat;
