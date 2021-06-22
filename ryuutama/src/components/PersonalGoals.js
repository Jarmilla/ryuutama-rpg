import React from "react";
import passTargetValueTo from "../utility/passTargetValueTo";

function PersonalGoals({ isSaved, title, value, setValue }) {
  return (
    <div className="input-area wide">
      <h2>{title}</h2>
      {isSaved ? <p>{value}</p> : <input type="text" value={value} required onChange={passTargetValueTo(setValue)} />}
    </div>
  );
}

export default PersonalGoals;
