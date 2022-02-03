import React from "react";

export default function Decrement(props) {
  //const [count, setCount] = useState(props.count);
  return (
    <div>
      <button onClick={() => setCount(props.count)}>Decrement</button>
    </div>
  );
}
