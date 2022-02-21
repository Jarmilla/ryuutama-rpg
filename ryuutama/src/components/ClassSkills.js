import React from "react";
import ClassInfoDisplayer from "./ClassInfoDisplayer";
import { classes } from "../datas/classInfo";

function ClassSkills({ showClassSkills }) {
  return (
    <div className="character-sheet">
      <div className="trisect-flexed">
        <h2>Class Skill</h2>
        <h2>Stats Used</h2>
        <h2>Target Number</h2>
      </div>
      {showClassSkills && <ClassInfoDisplayer skill={classes[showClassSkills].skills[0]} />}
      {showClassSkills && <ClassInfoDisplayer skill={classes[showClassSkills].skills[1]} />}
      {showClassSkills && <ClassInfoDisplayer skill={classes[showClassSkills].skills[2]} />}
    </div>
  );
}

export default ClassSkills;
