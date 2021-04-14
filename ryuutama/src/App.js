import "./App.css";
import React, { useState } from "react";
import title from "./img/title.png";
import ClassChooser from "./components/ClassChooser";
import TypeChooser from "./components/TypeChooser";

function App() {
  const [class1, setClass1] = useState(null);
  const [class2, setClass2] = useState(null);
  const [type1, setType1] = useState(null);
  const [type2, setType2] = useState(null);

  return (
    <div className="App">
      <header>
        <div>
          <img src={title} alt="Ryuutama" />
          <h3>Charcter Sheet</h3>
          <span>Ryubito</span>
          <input type="text" />
          <span>Created</span>
          <input type="date" />
        </div>
        <div></div>
      </header>
      <div className="character-sheet">
        <div className="base-info">
          <div>
            <span>Character name: </span>
            <input type="text" />
            <span>Player name: </span>
            <input type="text" />
          </div>
          <div>
            <span>Level: </span>
            <input type="number" />
            <span>EXP: </span>
            <input type="number" />
            <span>Sex: </span>
            <select name="gender selection">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Other</option>
            </select>
            <span>Age: </span>
            <input type="text" />
          </div>
          <span>
            Class:
            <ClassChooser setClass={setClass1} onChange={console.log(class1)} /> / <ClassChooser setClass={setClass2} onChange={console.log(class2)} />
          </span>
          <span>
            Type:
            <TypeChooser setType={setType1} onChange={console.log(type1)} /> / <TypeChooser setType={setType2} onChange={console.log(type2)} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
