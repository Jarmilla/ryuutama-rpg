import React, { useState, useEffect } from "react";
import passTargetValueTo from "../utility/passTargetValueTo";
import BaseInfo from "./BaseInfo";
import ClassSkills from "./ClassSkills";
import DiceSection from "./DiceSection";
import Header from "./Header";

function RyuutamaCharacterSheet() {
  const [ryubito, setRyubito] = useState("");
  const [creationDate, setCreationDate] = useState(null);

  const [charName, setCharName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [exp, setExp] = useState(null);
  const [sex, setSex] = useState("");
  const [age, setAge] = useState(null);
  const [class1, setClass1] = useState(null);
  const [type1, setType1] = useState("");
  const [class2, setClass2] = useState("");
  const [type2, setType2] = useState("");

  const [reasonToTravel, setReasonToTravel] = useState("");
  const [personalItem, setPersonalItem] = useState("");

  const [str, setStr] = useState(null);
  const [dex, setDex] = useState(null);
  const [int, setInt] = useState(null);
  const [spt, setSpt] = useState(null);
  const [fumble, setFumble] = useState(0);

  /* const [character, setCharacter] = useState({}); */

  const [isSaved, setIsSaved] = useState(false);

  function saveToLocalStorage(e) {
    e.preventDefault();
    let character = {
      ryubito: ryubito,
      creationDate: creationDate,
      charName: charName,
      playerName: playerName,
      exp: exp,
      sex: sex,
      age: age,
      class1: class1,
      type1: type1,
      class2: class2,
      type2: type2,
      reasonToTravel: reasonToTravel,
      personalItem: personalItem,
      str: str,
      dex: dex,
      int: int,
      spt: spt,
      fumble: fumble,
    };
    localStorage.setItem("character", JSON.stringify(character));
    setIsSaved(true);
    console.log(character);
  }

  function loadFromLocalStorage(e) {
    let loadedData = JSON.parse(localStorage.getItem("character"));
    setRyubito(loadedData.ryubito);
    setCreationDate(loadedData.creationDate);
    setCharName(loadedData.charName);
    setPlayerName(loadedData.playerName);
    setExp(loadedData.exp);
    setSex(loadedData.sex);
    setAge(loadedData.age);
    setClass1(loadedData.class1);
    setType1(loadedData.type1);
    setClass2(loadedData.class2);
    setType2(loadedData.type2);

    setIsSaved(false);
  }

  /*   useEffect(() => {
    const isThereDataInLocalStorage = localStorage.getItem("character");
    if (isThereDataInLocalStorage) {
      setCharacter(JSON.parse(isThereDataInLocalStorage))
      setPlayerName(character.playerName || "")
    }
  }, []); */

  return (
    <div>
      <Header isSaved={isSaved} ryubito={ryubito} setRyubito={setRyubito} creationDate={creationDate} setCreationDate={setCreationDate} class1={class1} />
      <form>
        <BaseInfo
          isSaved={isSaved}
          charName={charName}
          setCharName={setCharName}
          playerName={playerName}
          setPlayerName={setPlayerName}
          sex={sex}
          setSex={setSex}
          exp={exp}
          setExp={setExp}
          age={age}
          setAge={setAge}
          class1={class1}
          setClass1={setClass1}
          type1={type1}
          setType1={setType1}
          class2={class2}
          setClass2={setClass2}
          type2={type2}
          setType2={setType2}
          onChange={console.log(class1, type1)}
        />

        <ClassSkills class1={class1} />

        {/* PersonalGoals.js ?*/}
        <div className="character-sheet">
          <div className="character-rows">
            <div>Reason to travel:</div>
            <input type="text" required onChange={passTargetValueTo(setReasonToTravel)} />
          </div>

          <div className="character-rows">
            <div>Personal item:</div>
            <input type="text" required onChange={passTargetValueTo(setPersonalItem)} />
          </div>
        </div>
        <DiceSection
          str={str}
          setStr={setStr}
          dex={dex}
          setDex={setDex}
          int={int}
          setInt={setInt}
          spt={spt}
          setSpt={setSpt}
          fumble={fumble}
          setFumble={setFumble}
        />
        <button type="submit" onClick={loadFromLocalStorage}>
          Edit
        </button>
        <button type="submit" onClick={saveToLocalStorage}>
          Save
        </button>
      </form>
    </div>
  );
}
export default RyuutamaCharacterSheet;
