import React, { useState } from "react";
import { rolling } from "../utility/Rolling";

function RollCheck({ checkTitle, dice1, dice2 }) {
  const [result, setResult] = useState(null);

  return (
    <div className="character-rows">
      <p>{checkTitle}</p>
      <button onClick={() => setResult(rolling(dice1, dice2))}>Roll</button>
      <h3>{result && result}</h3>
    </div>
  );
}

export default RollCheck;
