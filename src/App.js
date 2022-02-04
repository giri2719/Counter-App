import React, { useState } from "react";
import "./App.css";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Reset from "./Reset";
export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <Increment increment={increment} />
      <Decrement decrement={decrement} />
      <Reset reset={reset} />
    </div>
  );
}
