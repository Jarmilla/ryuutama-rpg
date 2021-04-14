import React, { useState } from "react";
import ClassChooser from "./ClassChooser";
import TypeChooser from "./TypeChooser";

function BaseInfo({ setClass1, setClass2, setType1, setType2 }) {
  return (
    <div className="base-info">
      <div>
        <span>
          Character name: <input type="text" />
        </span>
        <span>
          Player name: <input type="text" />
        </span>
      </div>

      <div>
        <span>
          Level: <input type="number" />
        </span>
        <span>
          EXP: <input type="number" />
        </span>

        <span>Sex: </span>
        <select name="gender selection">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="female">Other</option>
        </select>

        <span>
          Age: <input type="text" />
        </span>
      </div>
      <div>
        <span>
          Class:
          <ClassChooser setClass={setClass1} /> / <ClassChooser setClass={setClass2} />
        </span>
        <span>
          Type:
          <TypeChooser setType={setType1} /> / <TypeChooser setType={setType2} />
        </span>
      </div>
    </div>
  );
}
export default BaseInfo;
