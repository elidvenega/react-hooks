import React, { useState } from "react";
import "./css/style.css";

function HookCounter() {
  const [number, setNumber] = useState(0);

  const addingByOne = () => setNumber(number + 1);
  return (
    <div>
      <h1>Hook App</h1>
      <p>{number}</p>
      <button className="btn" onClick={() => addingByOne()}>
        Click 
      </button>
    </div>
  );
}

export default HookCounter;
