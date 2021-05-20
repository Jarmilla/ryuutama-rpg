import React from "react";
import { classes, classSkills } from "../datas/classInfo";

function ClassSkills(class1) {
  return (
    <div className="character-sheet">
      <div className="character-rows">
        <div>Class Skill</div>
        <div>Stats Used</div>
        <div>Effect</div>
      </div>

      <div>{classes.minstrel.skills[0].name}</div>

      <span>3 class1 skill, 3 class2 skill generálás</span>
    </div>
  );
}

export default ClassSkills;
