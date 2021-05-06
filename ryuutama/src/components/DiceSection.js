import React, { useState } from "react";
import Stat from "./Stat";

import strIcon from "../img/str.png";
import dexIcon from "../img/dex.png";
import intIcon from "../img/int.png";
import sptIcon from "../img/spt.png";
import hp from "../img/hp.png";
import mana from "../img/mana.png";
import condtition from "../img/condition.png";
import fumbles from "../img/fumbles.png";

function DiceSection() {
  const [str, setStr] = useState(null);
  const [dex, setDex] = useState(null);
  const [int, setInt] = useState(null);
  const [spt, setSpt] = useState(null);
  return (
    <div className="character-sheet">
      <div className="character-rows">
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

      <div className="character-rows">
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

      <div className="character-rows">
        <div className="character-rows">
          <div className="character-cols">
            <div>Traveling Rules</div>

            <div className="character-rows">
              <p>1. Movement Check [STR + DEX]</p>
              <button>Roll</button>
              <h3>23</h3>
            </div>

            <div className="character-rows">
              <p>2. Direction Check [INT + INT]</p>
              <button>Roll</button>
              <h3>23</h3>
            </div>

            <div className="character-rows">
              <p>3. Camp Check [DEX + INT]</p>
              <button>Roll</button>
              <h3>23</h3>
            </div>
            {/* kiszervervezhetőek */}
          </div>
        </div>

        <div className="character-rows">
          <div className="character-cols">
            <div className="character-rows">
              <p>Condition [STR + SPT]</p>
              <img src={condtition} alt="condtition" /> {}
              <button>Roll</button>
              <h3>23</h3>
            </div>
            <p className="character-rows">* If over 10, add 1 dice size to any 1 stat</p>

            <div className="character-rows">
              <p>Initiative [DEX + INT]</p>
              <button>Roll</button>
              <h3>23</h3>
            </div>
            {/* kiszervervezhető */}

            <div className="character-rows">
              <p>Fumble Points</p>
              <img src={fumbles} alt="fumbles" /> {}
              <button>+</button>
              <h3>0</h3>
              {/*   <input type="number" /> */}
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiceSection;
