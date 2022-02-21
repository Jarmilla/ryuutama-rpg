import React from "react";
import passTargetValueTo from "../utility/passTargetValueTo";
import ClassChooser from "./ClassChooser";
import TypeChooser from "./TypeChooser";
import TypeInfoDisplayer from "./TypeInfoDisplayer";
import {levelUpChar} from "../utility/levelUpChar"

function BaseInfo({
  isSaved,
  charName,
  setCharName,
  playerName,
  setPlayerName,
  exp,
  setExp,
  sex,
  setSex,
  age,
  setAge,
  class1,
  setClass1,
  type1,
  setType1,
  class2,
  setClass2,
  type2,
  setType2,
}) {
  return (
    <div className="character-sheet">
      <div className="character-rows">
        <div className="input-area">
          <h2> Character name: </h2>
          {isSaved ? <p>{charName}</p> : <input type="text" value={charName} required onChange={passTargetValueTo(setCharName)} />}
        </div>

        <div className="input-area">
          <h2>Player name: </h2>
          {isSaved ? <p>{playerName}</p> : <input type="text" value={playerName} required onChange={passTargetValueTo(setPlayerName)} />}
        </div>
      </div>

      <div className="character-rows">
        <div className="input-area">
          <h2>Level:</h2>
          <p>{levelUpChar(exp)}</p>
          <h2>EXP: </h2>
          {isSaved ? <p>{exp}</p> : <input type="number" value={exp} required onChange={passTargetValueTo(setExp)} />}
        </div>
        <div className="input-area">
          <h2>Sex: </h2>
          {isSaved ? (
            <p>{sex}</p>
          ) : (
            <select name="gender selection" required onClick={passTargetValueTo(setSex)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          )}
          <h2>Age: </h2>
          {isSaved ? <p>{age}</p> : <input type="number" value={age} required onChange={passTargetValueTo(setAge)} />}
        </div>
      </div>

      <div className="character-rows">
        <div className="input-area">
          <h2>Class:</h2>
          {isSaved ? <p>{class1}</p> : <ClassChooser setClass={setClass1} />}
          <p> / </p>
          { exp >= 2000 ? <ClassChooser setClass={setClass2} /> : <p>2nd Class</p>  }
       
        </div>
        <div className="input-area">
          <h2>Type:</h2>
          {isSaved ? <p>{type1}</p> : <TypeChooser setType={setType1} />}
          <p> / </p>
          { exp >= 3000 ? <TypeChooser setType={setType2} /> :  <p>2nd Type</p>  }
        </div>
      </div>

      <TypeInfoDisplayer type={type1} />
      { exp >= 3000 ? <TypeInfoDisplayer type={type2} /> : ""  }
      {/*  ha elért x levelre Show <TypeInfoDisplayer type={type2} /> */}
    </div>
  );
}

export default BaseInfo;
