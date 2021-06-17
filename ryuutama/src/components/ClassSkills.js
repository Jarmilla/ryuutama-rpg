import React from "react";
import ClassInfoDisplayer from "./ClassInfoDisplayer";
import { classes } from "../datas/classInfo";

function ClassSkills({ class1 }) {
  return (
    <div className="character-sheet">
      <div className="character-rows">
        <h2 className="equally-trisect-flexed">Class Skill</h2>
        <h2 className="equally-trisect-flexed">Stats Used</h2>
        <h2 className="equally-trisect-flexed">Target Number</h2>
      </div>
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[0]} />}
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[1]} />}
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[2]} />}
    </div>
  );
}

export default ClassSkills;
