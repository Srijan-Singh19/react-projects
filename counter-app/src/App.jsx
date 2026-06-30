import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App(){

  function handleClickInc(){
  setcount(count+1);
}
function handleClickDec(){
  setcount(s=>{
    if(s>0) return s-1;
    return s;
  }
);
}
function handleClickRe(){
  setcount(0);
}

  const [count, setcount]=useState(0);

  return(
    <>
    <h1>Countert_APP</h1>
    <h1>{count}</h1>
    <button onClick={handleClickInc}>
      INCREASE
    </button>
    <button onClick={handleClickDec}>
      DECREASE
    </button>
    <button onClick={handleClickRe}>
      RESET
    </button>
    </>
  );
}
