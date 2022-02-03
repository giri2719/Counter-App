import React, { useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Reset from "./Reset";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Increment count={count + 1}></Increment>
      <Decrement count={count - 1}></Decrement>
      <Reset count={0}></Reset>
    </div>
  );
}
