import {useState} from 'react';
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);
  const increament=()=>{
    setCounter(counter + 1);
  }
  const decreament=()=>{
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Counter App</h1>
      <div>
        <button onClick={increament}>Increament</button>
        <div>{counter}</div>
        <button onClick={decreament}>Increament</button>

      </div>
    </>
  )
}

export default App
