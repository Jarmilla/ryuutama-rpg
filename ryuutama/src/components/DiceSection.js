import React, { useState } from "react";
import Stat from "./Stat";
import strIcon from "../img/str.png";
import dexIcon from "../img/dex.png";
import intIcon from "../img/int.png";
import sptIcon from "../img/spt.png";
import hp from "../img/hp.png";
import mana from "../img/mana.png";

function DiceSection() {
  const [str, setStr] = useState(null);
  const [dex, setDex] = useState(null);
  const [int, setInt] = useState(null);
  const [spt, setSpt] = useState(null);
  return (
    <div className="character-sheet">
      <div className="character-rows">
        <div>Status</div>

        <Stat statName="str" icon={strIcon} stat={setStr} />
        <Stat statName="dex" icon={dexIcon} stat={setDex} />
        <Stat statName="int" icon={intIcon} stat={setInt} />
        <Stat statName="spt" icon={sptIcon} stat={setSpt} />
      </div>

      <div className="character-rows">
        <div className="character-rows">
          <div>HP</div>
          <div className="hp-cols">
            <div className="black-highlight">[MAX HP = STR x 2]</div>
            <div className="character-rows">
              <img src={hp} alt="hp" /> {}
              <h3>{str === null ? "" : str * 2}</h3>
            </div>
          </div>
        </div>
        <div className="character-rows">
          <div>HP</div>
          <div className="hp-cols">
            <div className="black-highlight">[MAX MP = SPT x 2]</div>
            <div className="character-rows">
              <img src={mana} alt="mana" /> {}
              <h3>{spt === null ? "" : spt * 2}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiceSection;
