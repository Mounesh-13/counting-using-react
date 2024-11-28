import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <div className="counter-container">
        <h1>Counter App</h1>
        <h2 className="count-display">{count}</h2>
        <div className="button-group">
          <button onClick={increment} className="button increment">
            Increment
          </button>
          <button onClick={decrement} className="button decrement">
            Decrement
          </button>
          <button onClick={reset} className="button reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
