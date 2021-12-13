// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [Timeron, setTimeon] = useState(false);
  const [Lap, setLapValue] = useState(0);
  const [lapList,setlapList] = useState(
    [
    ]
  )
  // const [ms,setms] = useState();
  // const [sec,setsec] = useState();
  // const [min,setmin] = useState();

  const[prevTime,setPrevTime] =useState(
{


}
  )

  useEffect(() => {
    let interval = null;

    if (Timeron) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [Timeron]);

  const Addlapfunction =() =>{

    

       const data = {
      "min":Number(min),
      "sec":Number(sec),
      "ms":Number(ms),
    }
    const lap_list_str = (min)+" "+(sec)+" "+(ms)
    
    const lap_list = {
      "lapList":lap_list_str
      
    }
    setlapList(lapList=>[...lapList,lap_list])
    
    // setms(ms=>[...lapList,(lap_list)]);

    // setsec(sec=>[...lapList,(lap_list)]);

    // setmin(min=>[...lapList,(lap_list)]);


    // let diff = ((60-sec),"",(100-ms));

    // const final_diff = String(diff)

    console.log(60-min,"",60-sec,"",100-ms);

  }

  const ClearLap =()=>{
    setlapList([]);
  }

  return (
    <div className="container bg-dark false-5 mt-5">
      <div className="col-5 m-auto text-white p-4 text-center">
       <h1> <b>
        <span id="min">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
        <span id="sec">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        <span id="ms">{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span></b></h1>
      </div>

      {
          lapList.map((e,i)=>
          <div className="container mt-2">

            <div className="col-2  m-auto bg-white p-3">
                  <h5> Lap{i+1} : {e.lapList}</h5>
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

      {!Timeron && ( 
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
