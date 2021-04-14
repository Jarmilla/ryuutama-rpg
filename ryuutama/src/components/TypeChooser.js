import React from "react";

function TypeChooser({ setType }) {
  const types = ["Attack", "Technical", "Magic"];
  return (
    <select name="type-selector">
      {types.map((type, key) => (
        <option key={key} value={type} onClick={(e) => setType(e.target.value)}>
          {type}
        </option>
      ))}
    </select>
  );
}

export default TypeChooser;
