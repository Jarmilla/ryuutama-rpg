import React, { useState } from "react";
import { rolling } from "../utility/Rolling";

function OtherRoll({ str, dex, int, spt, fumble, setFumble }) {
  const [result, setResult] = useState(null);
  const [dice1, setDice1] = useState(0);
  const [dice2, setDice2] = useState(0);

  function addingFumble(result) {
    if (result === 2) return setFumble(fumble + 1);
  }

  return (
    <div className="character-rows">
      <p>Other Rolls</p>
      <p>
        [
        <select id="dice1ForOthers" onClick={(e) => setDice1(e.target.value)}>
          <option value="0">-</option>
          <option value={str}>STR</option>
          <option value={dex}>DEX</option>
          <option value={int}>INT</option>
          <option value={spt}>SPT</option>
        </select>
        +
        <select id="dice2ForOthers" onClick={(e) => setDice2(e.target.value)}>
          <option value="0">-</option>
          <option value={str}>STR</option>
          <option value={dex}>DEX</option>
          <option value={int}>INT</option>
          <option value={spt}>SPT</option>
        </select>
        ]
      </p>

      <button
        onClick={(e) => {
          e.preventDefault();
          setResult(rolling(dice1, dice2));
          addingFumble(result);
        }}
      >
        Roll
      </button>
      <h3>{result}</h3>
    </div>
  );
}

export default OtherRoll;
