import React from "react";
import { useState } from "react";

function InputControl() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div className="p-10 text-[30px]">
      <h3>Input Control</h3>
      <div>
        <label htmlFor="name">이름:</label>
        <input
          className="border-1"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {name.length}
      </div>
    </div>
  );
}

export default InputControl;
