// src/components/Counter.js
import React from 'react';

function Counter({ count, setCount }) {
  return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;