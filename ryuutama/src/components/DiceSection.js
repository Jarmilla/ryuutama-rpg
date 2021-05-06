import React, { useState } from "react";
import Stat from "./Stat";
import RollCheck from "./RollCheck";

import strIcon from "../img/str.png";
import dexIcon from "../img/dex.png";
import intIcon from "../img/int.png";
import sptIcon from "../img/spt.png";
import hp from "../img/hp.png";
import mana from "../img/mana.png";
import fumbles from "../img/fumbles.png";

function DiceSection() {
  const [str, setStr] = useState(null);
  const [dex, setDex] = useState(null);
  const [int, setInt] = useState(null);
  const [spt, setSpt] = useState(null);
  const [fumble, setFumble] = useState(0);

  return (
    <div className="character-sheet">
      <div className="character-main-rows">
        <div>Stats</div>

        <Stat statName="str" icon={strIcon} stat={setStr} />
        <Stat statName="dex" icon={dexIcon} stat={setDex} />
        <Stat statName="int" icon={intIcon} stat={setInt} />
        <Stat statName="spt" icon={sptIcon} stat={setSpt} />
        {/* ? info about which stat represent what -page 30 in eng pdf
        Carrying Capacity [STR] +3 */}
      </div>
      {parseInt(str) + parseInt(dex) + parseInt(int) + parseInt(spt) !== 24 ? (
        <div className="incorrect-datas">
          <p>Average Set: 6 6 6 6, Standard Set: 4 6 6 8, Specialized Set: 4 4 8 8</p>
          <p>Arrange them as you like between Strength [STR], Dexterity [DEX], Intelligence [INT], and Spirit [SPI]</p>
        </div>
      ) : (
        ""
      )}

      <div className="character-main-rows">
        <div className="character-rows">
          <div>HP</div>
          <div className="character-cols">
            <div className="black-highlight">[MAX HP = STR x 2]</div>
            <div className="character-rows">
              <img src={hp} alt="hp" /> {}
              <h3>{str === null ? "" : str * 2}</h3>
            </div>
          </div>
        </div>

        <div className="character-rows">
          <div>MP</div>
          <div className="character-cols">
            <div className="black-highlight">[MAX MP = SPT x 2]</div>
            <div className="character-rows">
              <img src={mana} alt="mana" /> {}
              <h3>{spt === null ? "" : spt * 2}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="character-main-rows">
        <RollCheck checkTitle={"Condition [STR + SPT] * If over 10, add 1 dice size to any 1 stat"} dice1={str} dice2={dex} />
      </div>

      <div className="character-main-rows">
        <div className="character-cols">
          <div>Traveling Rules</div>
          <RollCheck checkTitle={"1. Movement Check [STR + DEX]"} dice1={str} dice2={dex} />
          <RollCheck checkTitle={"2. Direction Check [INT + INT]"} dice1={int} dice2={int} />
          <RollCheck checkTitle={"3. Camp Check [DEX + INT]"} dice1={dex} dice2={int} />
        </div>

        <div className="character-cols">
          <div>Special Rolls</div>
          <div className="character-rows">
            <p>Fumble Points</p>
            <img src={fumbles} alt="fumbles" /> {}
            <button onClick={() => setFumble(fumble + 1)}>+</button>
            <h3>{fumble}</h3>
            <button onClick={() => setFumble(fumble - 1)}>-</button>
          </div>

          <RollCheck checkTitle={"Initiative [DEX + INT]"} dice1={dex} dice2={int} />
          <RollCheck checkTitle={"Other Rolls"} />
        </div>
      </div>
    </div>
  );
}

export default DiceSection;
