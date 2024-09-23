
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  function decreaseHandler() {
    if (count > 0) {
      setCount(count - 1);
    };
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Increment & Decrement</h1>
        <div className="calculate">
          <button onClick={decreaseHandler}>
            +
          </button>
          <div className="count">{count}</div>
          <button onClick={increaseHandler}>
            -
          </button>
        </div>
        <button className="reset" onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};
export default App;
