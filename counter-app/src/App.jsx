import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App(){

  const [count, setCount] = useState(0);

  function handleClickInc(){
    setCount(s => s + 1);
  }

  function handleClickFive(){
    setCount(s => s + 5);
  }

  function handleClickDec(){
    setCount(s => {
      if(s > 0) return s - 1;
      return s;
    });
  }

  function handleClickRe(){
    setCount(0);
  }

  return(
    <div className="container">
      <h1>Countert_APP</h1>

      <h1
        className="counter"
        style={{
          color: count > 0 ? "green" : "gray"
        }}
      >
        {count}
      </h1>

      {count === 0 && <p>No negative values allowed!</p>}

      <button onClick={handleClickInc}>
        INCREASE
      </button>

      <button onClick={handleClickDec} disabled={count === 0}>
        DECREASE
      </button>

      <button onClick={handleClickFive}>
        STEPUP+5
      </button>

      <button onClick={handleClickRe}>
        RESET
      </button>

    </div>
  );
}