import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Whatever you pass useState() is the initial State
  const [count, setCounter] = useState(0);

  const addToCount = () => {
    setCounter(count + 1);
  }

  const subtractFromCount = () => {
    setCounter(count - 1);
  }

  return (
    // JSX
    <div className="App">
      <div>COUNTER</div>
      <div>{count}</div>
      <button onClick={ addToCount }>+</button>
      <button onClick={ subtractFromCount }>-</button>
    </div>
  );
}

export default App;
