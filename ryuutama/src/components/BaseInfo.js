import React from "react";
import ClassChooser from "./ClassChooser";
import TypeChooser from "./TypeChooser";

function BaseInfo({ setClass1, setClass2, setType1, setType2 }) {
  return (
    <div className="character-sheet">
      <div className="character-rows">
        <div>
          Character name: <input required type="text" />
        </div>
        <div>
          Player name: <input required type="text" />
        </div>
      </div>

      <div className="character-rows">
        <div>
          <span>
            Level: <input type="number" />
          </span>
          <span>
            EXP: <input type="number" />
          </span>
        </div>

        <div>
          <span>Sex: </span>
          <select name="gender selection">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <span>
            Age: <input required type="text" />
          </span>
        </div>
      </div>

      <div className="character-rows">
        <div>
          Class:
          <ClassChooser setClass={setClass1} /> / <ClassChooser setClass={setClass2} />
        </div>
        <div>
          Type:
          <TypeChooser setType={setType1} /> / <TypeChooser setType={setType2} />
        </div>
      </div>
    </div>
  );
}

export default BaseInfo;
