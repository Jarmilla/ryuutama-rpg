import React, { useState } from "react";
import Stat from "./Stat";
import RollCondition from "./RollCondition";
import RollCheck from "./RollCheck";
import OtherRoll from "./OtherRoll";

import hp from "../img/hp.png";
import mana from "../img/mana.png";
import fumbles from "../img/fumbles.png";

function DiceSection({ isSaved, str, setStr, dex, setDex, int, setInt, spt, setSpt, fumble, setFumble }) {
  const [condition, setCondition] = useState(null);

  return (
    <div className="character-sheet">
      <div className="character-main-rows">
        <div>Stats</div>

        <Stat statName="str" isSaved={isSaved} stat={str} setStat={setStr} condition={condition} />
        <Stat statName="dex" isSaved={isSaved} stat={dex} setStat={setDex} condition={condition} />
        <Stat statName="int" isSaved={isSaved} stat={int} setStat={setInt} condition={condition} />
        <Stat statName="spt" isSaved={isSaved} stat={spt} setStat={setSpt} condition={condition} />
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
        <RollCondition
          checkTitle={"Condition [STR + SPT] * If over 10, add 1 dice size to any 1 stat"}
          dice1={str}
          dice2={dex}
          condition={condition}
          setCondition={setCondition}
          setFumble={setFumble}
        />
      </div>

      <div className="character-main-rows">
        <div className="character-cols">
          <div>Traveling Checks</div>
          <RollCheck checkTitle={"1. Movement Check [STR + DEX]"} dice1={str} dice2={dex} setFumble={setFumble} />
          <RollCheck checkTitle={"2. Direction Check [INT + INT]"} dice1={int} dice2={int} setFumble={setFumble} />
          <RollCheck checkTitle={"3. Camp Check [DEX + INT]"} dice1={dex} dice2={int} setFumble={setFumble} />
        </div>

        <div className="character-cols">
          <div>Special Rolls</div>

          <div className="character-rows">
            <p>Fumble Points</p>
            <img src={fumbles} alt="fumbles" /> {}
            {isSaved ? (
              <h3>{fumble}</h3>
            ) : (
              <div className="character-rows">
                <button onClick={() => setFumble(fumble + 1)}>+</button>
                <h3>{fumble}</h3>
                <button onClick={() => setFumble(fumble - 1)}>-</button>
              </div>
            )}
          </div>

          <RollCheck checkTitle={"Initiative [DEX + INT]"} dice1={dex} dice2={int} setFumble={setFumble} />

          <OtherRoll str={str} dex={dex} int={int} spt={spt} fumble={fumble} setFumble={setFumble} />
        </div>
      </div>
    </div>
  );
}

export default DiceSection;
