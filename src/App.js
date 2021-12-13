// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [oldTime,setoldTime] = useState(0)
  const [Timeron, setTimeon] = useState(false);
  const [lapList,setlapList] = useState([])
 

  useEffect(() => {
    let interval = null;
    if (Timeron) {
      interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
      },10);
    }
    else {
      clearInterval(interval);
    }
    return () => clearInterval(interval); 
  },[Timeron]);

  const Addlapfunction =() =>{
    if(oldTime === 0)
    {
      setoldTime(time)
      setlapList((prevState)=>[...prevState,time])
    }
    else
    {
      const new_time = time - oldTime ;
      setlapList((prevState)=>[...prevState,new_time])
      setoldTime(time)
    }

}
// console.log(lapList);

  const ClearLap =()=>{   
    setlapList([]);
  }

  return (
    <div className="container bg-dark false-5 mt-5">
      <div className="col-5 m-auto text-white p-4 text-center">
       <h1> <b>
        <span id="min">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span id="sec">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span id="ms">{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span></b></h1>
      </div>

      {
          lapList.map((func)=>
          <div className="container mt-2">

            <div className="col-2  m-auto bg-white p-3">
                  <h5>
                  <span id="min">{("0" + Math.floor((func / 60000) % 60)).slice(-2)}:</span>
                  <span id="sec">{("0" + Math.floor((func / 1000) % 60)).slice(-2)}:</span>
                  <span id="ms">{("0" + Math.floor((func / 10) % 100)).slice(-2)}</span>
                  </h5>
              </div>
          </div>
         )
        }
      <div className="conatiner mt-5 p-3">  
        <div className="row m-auto justify-content-around">

           {!Timeron && time === 0 &&(
                  <button
                    className="btn btn-primary col-2" onClick={() => setTimeon(true)}>Start</button>
           )}
            {Timeron &&(   
                  <button className="btn btn-primary col-2" onClick={() => setTimeon(false)}>Pause</button>
            )}

               {!Timeron && !time===0 &&( 
                  <button className="btn btn-primary col-2" onClick={() => setTimeon(true)}> Resume </button>
                 )}
                
                  <button className="btn btn-primary col-2" onClick={() => setTime(0)}> Reset </button>
               
               
                  <button className="btn btn-primary col-2" onClick={Addlapfunction}>Add Lap</button>
               
                  <button className="btn btn-primary col-2" onClick={ClearLap}>Clear Lap</button>

        </div>
      </div>
    </div>
  );
} 

export default App;
