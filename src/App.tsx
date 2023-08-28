import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [seconds ,setSeconds] = useState(0);
  const [minutes ,setMinutes] =useState(0);
  const [isRunning ,setIsRunning] =useState(false);

  
  const start =()=>{
setIsRunning(true);
  }

  useEffect(()=>{
    let interval:any;

    if (isRunning) {
      interval = setInterval(() => {
        if(seconds<59)
        setSeconds(seconds => seconds + 1);
        else
        {
          setSeconds(0);
          setMinutes(minutes => minutes + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
      },[isRunning,seconds])
const stop =()=>{
  setMinutes(0);
  setSeconds(0);
  setIsRunning(false);
}
const pause =()=>{
  setIsRunning(false);
}
const resume =()=>{
  setIsRunning(true);
}
  return (
    <div className="App">
{minutes} : {seconds}
  {!isRunning && seconds===0 && minutes===0 && <button onClick = {start}>Start</button>}
{isRunning && <button onClick = {pause}>Pause</button>}
{!isRunning&& (seconds!==0 || minutes!==0) &&<button onClick = {resume}>Resume</button>}

   { (isRunning || seconds!==0 || minutes!==0) && <button onClick = {stop}>Stop</button>}

     </div>
  );
}
