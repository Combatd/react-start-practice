import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCounter] = useState(0);
  console.log(count);
  return (
    // JSX
    <div className="App">
      <div>COUNTER</div>
      <div>{count}</div>
      <button onClick={ () => setCounter(count + 1)}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
