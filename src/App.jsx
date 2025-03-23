import {useState} from 'react';
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);

  //Function for Increament
  const increament=()=>{
    counter=counter+1;
    if(counter>20)
    {
      counter=20;
    }
    setCounter(counter);
  }

  //Function for decreament
  const decreament=()=>{
    counter=counter-1;
    if(counter<0)
    {
      counter=0;
    }
    setCounter(counter);
  }
  return (
    < >
      <div>
        <h1>Counter App</h1>
        <div className=''>
          <button onClick={increament}>Increament</button>
          <div>{counter}</div>
          <button onClick={decreament}>Increament</button>

        </div>
      </div>
    </>
  )
}

export default App
