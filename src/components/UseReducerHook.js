import React, { useState,useReducer } from "react";

function reducer(state, action) {
  return { count: state.count + 1 };
}

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  dispatch()

  function increment() {
    dispatch()
  }

  function decrement() {
  // setCount((prevCount) => prevCount - 1);
   }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

