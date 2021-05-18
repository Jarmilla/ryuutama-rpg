import React, { useState } from "react";
import passTargetValueTo from "../utility/passTargetValueTo";
import ClassChooser from "./ClassChooser";
import TypeChooser from "./TypeChooser";
import typeInfo from "../datas/typeInfo";

function BaseInfo({ setCharName, setPlayerName, setSex, setExp, setAge, setClass1, type1, setType1, setClass2, type2, setType2 }) {
  const [showExtras, setShowExtras] = useState(false);

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
          <p>kiszámolva</p>
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
          <p>2nd Class</p>
          <p>Type:</p>
          <TypeChooser setType={setType1} />
          <p> / </p>
          <p>2nd Type</p>
        </div>
      </div>
      {type1 && (
        <div className="character-main-cols">
          <div className="character-rows">
            <img src={type1 && typeInfo[type1].img} alt={type1} />
            <p>{type1 && typeInfo[type1].description}</p>
            <button onClick={() => setShowExtras(!showExtras)}>{showExtras ? "Hide extras" : "Show extras"}</button>
          </div>
          {showExtras && (
            <div className="character-rows">
              <ul>{type1 && typeInfo[type1].extras.map((extra) => <li>{extra}</li>)}</ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BaseInfo;
