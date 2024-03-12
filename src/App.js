
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter/>
    </div>
  );
}

export default App;

function Counter(){
   const [count,setCount] = useState(0)
   const [show,setShow] = useState(false)
   const [step, setStep] = useState(0)
 
   const hadleStep = (e)=>{
    setStep(Number(e.target.value))
   
   }

   const hadleSum =()=>{
    setCount(count +step)
    setShow(true)
    
   }
   const hadleMinus =()=>{
    setCount(count -step)
  
   }
   
   const hadleCount = (e)=>{
    setCount(Number(e.target.value))
   
   }
   
   const Reset = ()=>{
     setCount(0);
     setStep(1);
   }

   const  date =new Date('june 21 2027')
   date.setDate(date.getDate()+count);
   
  return( 
  
  <div className='box'>
    Test
    <input type='range' min='0' max='10' onChange={hadleStep}/> {step}
    {""}
   <button onClick={hadleMinus}>-</button>
   <input value={count} onChange={hadleCount}  />
   <button onClick={hadleSum}>+</button>
      {!show&& <p>Today is  {date.toDateString()} </p>}
    {show&& <p>{count} from Today is {date.toDateString()}  </p>}
    {(count !==0 && step !==1) ? <button onClick={Reset}>Reset</button> : null}

  </div>
  )
}