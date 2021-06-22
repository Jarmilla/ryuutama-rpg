import React, { useState } from "react";
import { rolling } from "../utility/Rolling";

function RollCheck({ checkTitle, dice1, dice2, fumble, setFumble }) {
  const [result, setResult] = useState(null);

  function addingFumble(result) {
    if (result === 2) return setFumble(fumble + 1);
  }

  return (
    <div className="input-area wide">
      <p>{checkTitle}</p>
      <h3>{result}</h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          setResult(rolling(dice1, dice2));
          addingFumble(result);
        }}
      >
        Roll
      </button>
    </div>
  );
}

export default RollCheck;
