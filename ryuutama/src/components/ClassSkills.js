import React from "react";
import ClassInfoDisplayer from "./ClassInfoDisplayer";
import { classes } from "../datas/classInfo";

function ClassSkills({ class1 }) {
  return (
    <div className="character-sheet">
      <div className="character-rows">
        <div className="equally-trisect-flexed">Class Skill</div>
        <div className="equally-trisect-flexed">Stats Used</div>
        <div className="equally-trisect-flexed">Target Number</div>
      </div>
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[0]} />}
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[1]} />}
      {class1 && <ClassInfoDisplayer skill={classes[class1].skills[2]} />}
    </div>
  );
}

export default ClassSkills;
