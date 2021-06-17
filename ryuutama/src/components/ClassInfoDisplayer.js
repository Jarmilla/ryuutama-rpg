import React, { useState } from "react";

function ClassInfoDisplayer({ skill }) {
  const [showExtras, setShowExtras] = useState(false);
  return (
    <div>
      {skill && (
        <div className="character-main-cols">
          <div className="character-rows">
            <h3 className="equally-trisect-flexed">{skill.name}</h3>
            <p className="equally-trisect-flexed">{skill.statsUsed}</p>
            <p className="equally-trisect-flexed">{skill.targetNumber}</p>
          </div>
          <div className="character-rows">
            <p className="sixth-flexed">{skill.effect}</p>
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
