import React, { useState } from "react";
import Stat from "./Stat";
import RollCondition from "./RollCondition";
import RollCheck from "./RollCheck";
import OtherRoll from "./OtherRoll";

import hp from "../img/hp.png";
import mana from "../img/mana.png";
import fumbles from "../img/fumbles.png";

function DiceSection({ isSaved, setIsSaved, str, setStr, dex, setDex, int, setInt, spt, setSpt, fumble, setFumble }) {
  const [condition, setCondition] = useState(null);

  return (
    <div className="character-sheet">
      <div className="character-rows">
        <div className="input-area">
          <Stat statName="str" isSaved={isSaved} stat={str} setStat={setStr} condition={condition} />
          <Stat statName="dex" isSaved={isSaved} stat={dex} setStat={setDex} condition={condition} />
        </div>
        <div className="input-area">
          <Stat statName="int" isSaved={isSaved} stat={int} setStat={setInt} condition={condition} />
          <Stat statName="spt" isSaved={isSaved} stat={spt} setStat={setSpt} condition={condition} />
        </div>
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

      <div className="character-rows">
        <div className="character-cols wide">
          <h3 className="black-highlight">[MAX HP = STR x 2]</h3>
          <div className="input-area wide">
            <h3>Health Point</h3>
            <img src={hp} alt="hp" /> {}
            <h3>{str === null ? "" : str * 2}</h3>
          </div>
        </div>

        <div className="character-cols wide">
          <h3 className="black-highlight">[MAX MP = SPT x 2]</h3>
          <div className="input-area wide">
            <h3>Manna Point</h3>
            <img src={mana} alt="mana" /> {}
            <h3>{spt === null ? "" : spt * 2}</h3>
          </div>
        </div>
      </div>

      <RollCondition dice1={str} dice2={dex} condition={condition} setCondition={setCondition} setFumble={setFumble} />

      <div className="character-rows">
        <div className="character-cols wide">
          <h2>Traveling Checks</h2>
          <RollCheck checkTitle={"1. Movement Check [STR + DEX]"} dice1={str} dice2={dex} fumble={fumble} setFumble={setFumble} />
          <RollCheck checkTitle={"2. Direction Check [INT + INT]"} dice1={int} dice2={int} fumble={fumble} setFumble={setFumble} />
          <RollCheck checkTitle={"3. Camp Check [DEX + INT]"} dice1={dex} dice2={int} fumble={fumble} setFumble={setFumble} />
        </div>

        <div className="character-cols wide">
          <h2>Special Rolls</h2>
          <div className="input-area wide">
            <p>Fumble Points</p>
            <img src={fumbles} alt="fumbles" />

            <h3>{fumble}</h3>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (fumble === 0) return;
                setFumble(fumble - 1);
                setIsSaved(false);
              }}
            >
              -
            </button>
          </div>

          <RollCheck checkTitle={"Initiative [DEX + INT]"} dice1={dex} dice2={int} fumble={fumble} setFumble={setFumble} />

          <OtherRoll str={str} dex={dex} int={int} spt={spt} fumble={fumble} setFumble={setFumble} />
        </div>
      </div>
    </div>
  );
}

export default DiceSection;
