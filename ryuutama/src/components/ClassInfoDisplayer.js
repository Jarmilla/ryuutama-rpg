import React, { useState } from "react";

function ClassInfoDisplayer({ skill }) {
  const [showExtras, setShowExtras] = useState(false);
  return (
    <div>
      {skill && (
        <div className="character-main-cols">
          <div className="character-rows">
            <p className="equally-trisect-flexed">{skill.name}</p>
            <p className="equally-trisect-flexed">{skill.statsUsed}</p>
            <p className="equally-trisect-flexed">{skill.targetNumber}</p>
          </div>
          <div className="character-rows">
            <p className="sixth-flexed">{skill.effect}</p>
            <button onClick={() => setShowExtras(!showExtras)}>{showExtras ? "Hide extras" : "Show extras"}</button>
          </div>
        </div>
      )}{" "}
      {showExtras && (
        <div className="character-rows">
          <ul> {skill.usableCircumstances}</ul>
          <ul> {skill?.extra}</ul>
        </div>
      )}
    </div>
  );
}

export default ClassInfoDisplayer;
