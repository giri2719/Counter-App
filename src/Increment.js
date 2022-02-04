import React from "react";

export default function Increment({ increment }) {
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
