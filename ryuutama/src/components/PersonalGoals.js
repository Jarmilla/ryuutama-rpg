import React from "react";
import passTargetValueTo from "../utility/passTargetValueTo";

function PersonalGoals({ isSaved, title, value, setValue }) {
  return (
    <div className="character-rows">
      <div>{title}</div>
      {isSaved ? <p>{value}</p> : <input type="text" value={value} required onChange={passTargetValueTo(setValue)} />}
    </div>
  );
}

export default PersonalGoals;
