import React, { useState } from "react";
import "./css/style.css";

function HookCounter() {
  const [number, setNumber] = useState(0);

  const handleAdd = () => setNumber(number + 1);
  const handleSubtract = () => setNumber(number - 1);
  const handleReset = () => setNumber(0);
  return (
    <div>
      <h1>Hook App</h1>
      <p style={{ fontSize: "3rem" }}>{number}</p>
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
      <button className="btn" onClick={handleSubtract}>
        Decrease
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default HookCounter;
