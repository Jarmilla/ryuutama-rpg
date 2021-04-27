import React from "react";
import ClassChooser from "./ClassChooser";
import TypeChooser from "./TypeChooser";
import typeAttack from "../img/type attack.png";
import typeTechnical from "../img/type technical.png";
import typeMagic from "../img/type magic.png";

function BaseInfo({ setClass1, type1, setType1 }) {
  const typeInfo = {
    Attack: { description: "This type specializes in combat and using weapons.", img: typeAttack },
    Technical: { description: "This type can quickly assess a situation and find clever ways to solve problems.", img: typeTechnical },
    Magic: { description: "This type enables the use of various types of magic.", img: typeMagic },
  };
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
          <ClassChooser setClass={setClass1} /> / <span>2nd Class</span>
        </div>
        <div>
          Type:
          <TypeChooser setType={setType1} /> / <span>2nd Type</span>
        </div>
      </div>
      <div className="character-rows">
        <img src={type1 && typeInfo[type1].img} alt={type1} />
        <div>{type1 && typeInfo[type1].description}</div>
      </div>
    </div>
  );
}

export default BaseInfo;
