import { useSelector, useDispatch} from "react-redux";

const Counter =()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show =  useSelector((state) =>state.showcounter);
    
    const Increment=()=>{
        dispatch({type:'increment'})
    }
    const Decrement=()=>{
        dispatch({type:'decrement'})
    }

    const Increase =()=>{
        dispatch({type:'increase',payload:5})
    }

    const Null =()=>{
        dispatch({type:'clear'})
    }
    const toggleCounter=()=>{
       dispatch({type:'toggle'})
    }
    return(
    <div className="container-fluid col-md-8 mt-5 p-4 bg-dark text-white" id="holder">
            <h1 className=" text-center">Counter</h1>
           <b> <h2 className=" text-center">{counter}</h2></b>

          {show && 
           <div class="d-flex flex-row  mb-5 justify-content-around">
                    <button className="btn btn-primary" onClick={Increment}>Increment</button>
                    <button className="btn btn-primary" onClick={Decrement}>Decrement</button>
                    <button className="btn btn-primary" onClick={Increase}>Add +5</button>
                    <button className="btn btn-primary" onClick={Null}>Clear All</button>
           </div>
}
           <div className="row justify-content-lg-center">
               <button className ="col-3 btn btn-warning" onClick={toggleCounter}>Toggle up</button>

           </div>
    </div>

    );
}

export default Counter;