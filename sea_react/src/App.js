import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';

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
      <div className={ (count < 0) ? 'red' : ''}>{count}</div>
      <Button color='pink' onBtnClick={addToCount}>+</Button>
      <Button color='green' onBtnClick={subtractFromCount}>-</Button>
    </div>
  );
}

export default App;
