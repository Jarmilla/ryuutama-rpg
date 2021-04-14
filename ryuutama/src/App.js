import "./App.css";
import React, { useState } from "react";
import title from "./img/title.png";
import BaseInfo from "./components/BaseInfo";

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
        <BaseInfo setClass1={setClass1} setClass2={setClass2} setType1={setType1} setType2={setType2} onChange={console.log(class1, class2, type1, type2)} />
      </div>
    </div>
  );
}

export default App;
