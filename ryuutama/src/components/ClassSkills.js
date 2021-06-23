import React from "react";
import ClassInfoDisplayer from "./ClassInfoDisplayer";
import { classes } from "../datas/classInfo";

function ClassSkills({ class1 }) {
  return (
    <div className="character-sheet">
      <div className="trisect-flexed">
        <h2>Class Skill</h2>
        <h2>Stats Used</h2>
        <h2>Target Number</h2>
      </div>
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[0]} />}
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[1]} />}
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[2]} />}
    </div>
  );
}

export default ClassSkills;
