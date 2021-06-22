import React, { useState } from "react";
import typeInfo from "../datas/typeInfo";

function TypeInfoDisplayer({ type }) {
  const [showExtras, setShowExtras] = useState(false);
  return (
    <div>
      {type && (
        <div className="character-rows">
          <img src={type && typeInfo[type].img} alt={type} />
          <p>{type && typeInfo[type].description}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowExtras(!showExtras);
            }}
          >
            {showExtras ? "Hide extras" : "Show extras"}
          </button>
        </div>
      )}{" "}
      {showExtras && (
        <div className="character-rows">
          <ul>{type && typeInfo[type].extras.map((extra) => <li>{extra}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

export default TypeInfoDisplayer;
