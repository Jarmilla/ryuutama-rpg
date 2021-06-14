import React from "react";
import passTargetValueTo from "../utility/passTargetValueTo";
import ClassChooser from "./ClassChooser";
import TypeChooser from "./TypeChooser";
import TypeInfoDisplayer from "./TypeInfoDisplayer";

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
      <div className="character-main-rows">
        <div className="character-rows">
          <p> Character name: </p>
          {isSaved ? <p>{charName}</p> : <input type="text" value={charName} required onChange={passTargetValueTo(setCharName)} />}

          <p>Player name: </p>
          {isSaved ? <p>{playerName}</p> : <input type="text" value={playerName} required onChange={passTargetValueTo(setPlayerName)} />}
        </div>
      </div>

      <div className="character-main-rows">
        <div className="character-rows">
          <p>Level:</p>
          <p>ToDo!</p> {/* kiszámoli az exp-ből */}
          <p>EXP: </p>
          {isSaved ? <p>{exp}</p> : <input type="number" value={exp} required onChange={passTargetValueTo(setExp)} />}
          <p>Sex: </p>
          {isSaved ? (
            <p>{sex}</p>
          ) : (
            <select name="gender selection" required onClick={passTargetValueTo(setSex)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          )}
          <p>Age: </p>
          {isSaved ? <p>{age}</p> : <input type="text" value={age} required onChange={passTargetValueTo(setAge)} />}
        </div>
      </div>

      <div className="character-main-rows">
        <div className="character-rows">
          <p>Class:</p>
          {isSaved ? <p>{class1}</p> : <ClassChooser setClass={setClass1} />}
          <p> / </p>
          <p>2nd Class</p> {/*  ha elért x levelre Show <ClassChooser setClass={setClass2} /> */}
          <p>Type:</p>
          {isSaved ? <p>{type1}</p> : <TypeChooser setType={setType1} />}
          <p> / </p>
          <p>2nd Type</p> {/*  ha elért x levelre Show TypeChooser setType={setType2} /> */}
        </div>
      </div>

      <TypeInfoDisplayer type={type1} />
      {/*  ha elért x levelre Show <TypeInfoDisplayer type={type2} /> */}
    </div>
  );
}

export default BaseInfo;
