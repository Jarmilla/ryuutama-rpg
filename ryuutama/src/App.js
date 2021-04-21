import "./App.css";
import React from "react";
import title from "./img/title.png";
import RyuutamaCharacterSheet from "./components/RyuutamaCharacterSheet";

function App() {
  return (
    <div className="App">
      <header className="character-rows">
        <div>
          <img src={title} alt="Ryuutama" />
          <h3>Charcter Sheet</h3>
          <span>Ryubito</span>
          <input type="text" />
          <span>Created</span>
          <input type="date" />
        </div>
        <div>image here</div>
      </header>

      <RyuutamaCharacterSheet />
    </div>
  );
}

export default App;
