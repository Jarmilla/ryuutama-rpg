import React, { useState } from "react";

function ClassInfoDisplayer({ skill }) {
  const [showExtras, setShowExtras] = useState(false);
  return (
    <div>
      {skill && (
        <div className="character-cols">
          <div className="trisect-flexed">
            <h3>{skill.name}</h3>
            <p>{skill.statsUsed}</p>
            <p>{skill.targetNumber}</p>
          </div>
          <div className="character-rows">
            <p className="skill-usable">{skill.effect}</p>
            {skill.usableCircumstances && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowExtras(!showExtras);
                }}
              >
                {showExtras ? "Hide extras" : "Show extras"}
              </button>
            )}
          </div>
        </div>
      )}{" "}
      {showExtras && (
        <ul>
          <li> {skill.usableCircumstances}</li>
          {skill?.extra ? <li>{skill.extra} </li> : ""}
          {skill?.extra2 ? <li>{skill.extra2} </li> : ""}
        </ul>
      )}
    </div>
  );
}

export default ClassInfoDisplayer;
