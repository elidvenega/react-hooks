import React, { useState, useEffect } from "react";

function Example() {
  // const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${num} times`;
  });

  return (
    <div>
      <p>You clicked {num} times</p>
      <button onClick={() => setNum(num + 1)}>Click me</button>
    </div>
  );
}

export default Example;
