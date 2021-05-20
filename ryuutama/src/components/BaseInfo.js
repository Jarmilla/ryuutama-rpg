import React from "react";
import passTargetValueTo from "../utility/passTargetValueTo";
import ClassChooser from "./ClassChooser";
import TypeChooser from "./TypeChooser";

import TypeInfoDisplayer from "./TypeInfoDisplayer";

function BaseInfo({ setCharName, setPlayerName, setSex, setExp, setAge, setClass1, type1, setType1, setClass2, type2, setType2 }) {
  return (
    <div className="character-sheet">
      <div className="character-main-rows">
        <div className="character-rows">
          <p> Character name: </p>
          <input type="text" required onChange={passTargetValueTo(setCharName)} />
          <p>Player name: </p>
          <input type="text" required onChange={passTargetValueTo(setPlayerName)} />
        </div>
      </div>

      <div className="character-main-rows">
        <div className="character-rows">
          <p>Level:</p>
          <p>ToDo!</p> {/* kiszámoli az exp-ből */}
          <p>EXP: </p>
          <input type="number" required onChange={passTargetValueTo(setExp)} />
          <p>Sex: </p>
          <select name="gender selection" required onClick={passTargetValueTo(setSex)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p>Age: </p>
          <input type="text" required onChange={passTargetValueTo(setAge)} />
        </div>
      </div>

      <div className="character-main-rows">
        <div className="character-rows">
          <p> Class:</p>
          <ClassChooser setClass={setClass1} />
          <p> / </p>
          <p>2nd Class</p> {/*  ha elért x levelre Show <ClassChooser setClass={setClass2} /> */}
          <p>Type:</p>
          <TypeChooser setType={setType1} />
          <p> / </p>
          <p>2nd Type</p> {/*  ha elért x levelre Show TypeChooser setType={setType2} /> */}
        </div>
      </div>
      <TypeInfoDisplayer type={type1} />
    </div>
  );
}

export default BaseInfo;
