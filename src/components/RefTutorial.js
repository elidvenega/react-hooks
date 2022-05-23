import React, { useState, useEffect, useRef} from "react";

function RefTutorial() {
  const [name, setName] = useState("");
//   const renderCount = useRef(0);

//   useEffect(() => {
//       renderCount.current = renderCount.current + 1
//   })
   const inputRef = useRef();

   function focus() {
       inputRef.current.focus()
   }
  return (
    <>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default RefTutorial;
