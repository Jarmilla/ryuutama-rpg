import React from "react";
import Stat from "./Stat";
import str from "../img/str.png";
import dex from "../img/dex.png";
import int from "../img/int.png";
import spt from "../img/spt.png";

function DiceSection() {
  return (
    <div className="character-sheet">
      <div className="character-rows">
        <div>Status</div>

        <Stat statName="STR" icon={str} />
        <Stat statName="DEX" icon={dex} />
        <Stat statName="INT" icon={int} />
        <Stat statName="SPT" icon={spt} />
      </div>
    </div>
  );
}

export default DiceSection;
