import React, { useState } from "react";
import BaseInfo from "./BaseInfo";
import ClassSkills from "./ClassSkills";
import DiceSection from "./DiceSection";
import Header from "./Header";

function RyuutamaCharacterSheet() {
  const [class1, setClass1] = useState();
  const [type1, setType1] = useState();

  return (
    <div>
      <Header class1={class1} />
      <form>
        <BaseInfo setClass1={setClass1} setType1={setType1} onChange={console.log(class1, type1)} />
        <ClassSkills setClass1={setClass1} /> {/*hiányoznak belőle az adatok és azoknak a mapelésük*/}
        {/* PersonalGoals.js */}
        <div className="character-sheet">
          <div className="character-rows">
            <div>Reason to travel:</div>
            <input required type="text" />
          </div>

          <div className="character-rows">
            <div>Personal item:</div>
            <input required type="text" />
          </div>
        </div>
        <DiceSection />
      </form>
    </div>
  );
}
export default RyuutamaCharacterSheet;
