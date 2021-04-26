import React from "react";
import Stat from "./Stat";
import str from "../img/str.png";
import dex from "../img/dex.png";
import int from "../img/int.png";
import spt from "../img/spt.png";
import hp from "../img/hp.png";
import mana from "../img/mana.png";

function DiceSection() {
  return (
    <div className="character-sheet">
      <div className="character-rows">
        <div>Status</div>

        <Stat statName="str" icon={str} />
        <Stat statName="dex" icon={dex} />
        <Stat statName="int" icon={int} />
        <Stat statName="spt" icon={spt} />
      </div>

      <div className="character-rows">
        <div className="character-rows">
          <div>HP</div>
          <div>[MAX HP = STR x 2]</div>
          <div>
            <img src={hp} alt="hp" /> {}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiceSection;
