import React from "react";

export default function Increment(props) {
  //const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(props.count + 1)}>Increment</button>
      {count}
    </div>
  );
}
