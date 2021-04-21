import React, { useState } from "react";
import BaseInfo from "./BaseInfo";
import ClassSkills from "./ClassSkills";
import DiceSection from "./DiceSection";

function RyuutamaCharacterSheet() {
  const [class1, setClass1] = useState();
  const [class2, setClass2] = useState();
  const [type1, setType1] = useState();
  const [type2, setType2] = useState();

  return (
    <form>
      <BaseInfo setClass1={setClass1} setClass2={setClass2} setType1={setType1} setType2={setType2} onChange={console.log(class1, class2, type1, type2)} />
      <ClassSkills setClass1={setClass1} setClass2={setClass2} /> {/*hiányoznak belőle az adatok és azoknak a mapelésük*/}
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
  );
}
export default RyuutamaCharacterSheet;
