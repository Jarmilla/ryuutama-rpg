import React, { useState } from "react";
import ClassChooser from "./ClassChooser";
import TypeChooser from "./TypeChooser";

function RyuutamaCharacterSheet() {
  const [class1, setClass1] = useState();
  const [class2, setClass2] = useState();
  const [type1, setType1] = useState();
  const [type2, setType2] = useState();

  return (
    <form>
      {/* BaseInfo.js */}
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
            <ClassChooser setClass={setClass1} onChange={console.log(class1)} /> / <ClassChooser setClass={setClass2} />
          </div>
          <div>
            Type:
            <TypeChooser setType={setType1} /> / <TypeChooser setType={setType2} />
          </div>
        </div>
      </div>

      {/* ClassSkills.js */}
      <div className="character-sheet">
        <div className="character-rows">
          <div>Class Skill</div>
          <div>Stats Used</div>
          <div>Effect</div>
        </div>
        <span>3 class1 skill, 3 class2 skill generálás</span>
      </div>

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

      {/* DiceSection.js */}
      <div className="character-sheet">
        <div className="character-rows">
          <div>Status</div>

          <div className="character-rows">
            <div>
              <div>Str props4x</div>
              <div>
                d
                <select name="dice">
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
            <div>pictogram</div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default RyuutamaCharacterSheet;
