import React from "react";

export default function Reset(props) {
  //const [count, setCount] = useState(props.count);
  return (
    <div>
      <button onClick={() => setCount(props.count)}>Reset</button>
    </div>
  );
}
