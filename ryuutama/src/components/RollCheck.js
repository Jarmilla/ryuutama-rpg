import React, { useState } from "react";
import { rolling } from "../utility/Rolling";
import condtition from "../img/condition.png";

function RollCheck({ checkTitle, dice1, dice2 }) {
  const [result, setResult] = useState(null);

  return (
    <div className="character-rows">
      <p>{checkTitle}</p>
      {checkTitle.includes("Condition") ? <img src={condtition} alt="condtition" /> : ""}
      <button onClick={() => setResult(rolling(dice1, dice2))}>Roll</button>
      <h3>{result && result}</h3>
    </div>
  );
}

export default RollCheck;
