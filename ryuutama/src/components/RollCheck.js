import React, { useState } from "react";
import condtition from "../img/condition.png";

function RollCheck({ checkTitle, dice1, dice2 }) {
  const [result, setResult] = useState(null);

  function rolling(dice1, dice2) {
    let rolling1 = Math.floor(Math.random() * parseInt(dice1) + 1);
    let rolling2 = Math.floor(Math.random() * parseInt(dice2) + 1);
    return rolling1 + rolling2;
  }

  return (
    <div className="character-rows">
      <p>{checkTitle}</p>
      {checkTitle.includes("Condition") ? <img src={condtition} alt="condtition" /> : ""}
      {checkTitle.includes("Other Rolls") ? (
        <div>
          <input type="number" />
          <input type="number" />
        </div>
      ) : (
        ""
      )}
      <button onClick={() => setResult(rolling(dice1, dice2))}>Roll</button>
      <h3>{result && result}</h3>
    </div>
  );
}

export default RollCheck;
