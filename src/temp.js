import { useEffect, useState } from 'react';

function test() {

  const [timer,setTimer] = useState(30)
  let interval = null
  useEffect(()=>{
    if(timer!=0)
    {
        interval = setInterval(()=>{
        setTimer(timer-1)
      },1000)
    }
    else
    {
      clearInterval(interval)
      setTimer(30)
    }
    return ()=> clearInterval(interval)
  })

  return (
    <div>
  
      <h1>{timer}</h1>

    </div>
  );
}

export default test;


