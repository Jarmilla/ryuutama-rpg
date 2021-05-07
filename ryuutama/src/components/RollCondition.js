import React from "react";
import { rolling } from "../utility/Rolling";
import condtition from "../img/condition.png";

function RollCondition({ checkTitle, dice1, dice2, condition, setCondition }) {
  return (
    <div className="character-rows">
      <p>{checkTitle}</p>
      <img src={condtition} alt="condtition" />
      <button onClick={() => setCondition(rolling(dice1, dice2))}>Roll</button>
      <h3>{condition && condition}</h3>
    </div>
  );
}

export default RollCondition;
