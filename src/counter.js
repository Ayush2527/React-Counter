import React, {useState} from "react";

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="container">
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
      <div className="count">
       
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)} disabled={count===0}>Decrement</button>
        <button onClick={() => setCount(0)} disabled={count===0}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
