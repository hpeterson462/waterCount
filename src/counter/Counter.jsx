import React, { useState } from 'react';
import './Counter.css';

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
      <div class='waterGlassContainer'>
        <div
          id='waterGlass'
          onClick={increment}
        >
        </div>
      </div>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
