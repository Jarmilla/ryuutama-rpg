import React from "react";
import { rolling } from "../utility/Rolling";
import condtition from "../img/condition.png";

function RollCondition({ dice1, dice2, condition, setCondition }) {
  return (
    <div className="character-rows">
      <h3>Condition [STR + SPT]</h3>
      <p>* If over 10, add 1 dice size to any 1 stat</p>
      <div className="stat-container">
        <img src={condtition} alt="condtition" />
        <h3>{condition}</h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCondition(rolling(dice1, dice2));
          }}
        >
          Roll
        </button>
      </div>
    </div>
  );
}

export default RollCondition;
