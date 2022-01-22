import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  }

  let decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count:</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
