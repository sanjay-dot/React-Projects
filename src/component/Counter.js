import { useSelector, useDispatch} from "react-redux";
import { counterActions } from "../Store/redux";
const Counter =()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter);
  
    const incrementHandler = () => {
      dispatch(counterActions.increment());
    };
  
    const increaseHandler = () => {
      dispatch(counterActions.increase(10));
    };
  
    const decrementHandler = () => {
      dispatch(counterActions.decrement());
    };
  
    const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
    };
    const clear =()=>{
        dispatch(counterActions.clear());
    };
 
    return(
    <div className="container-fluid col-md-8 mt-5 p-4 bg-dark text-white" id="holder">
            <h1 className=" text-center">Counter</h1>
           <b> <h2 className=" text-center">{counter}</h2></b>

          {show && 
           <div class="d-flex flex-row  mb-5 justify-content-around">
                    <button className="btn btn-primary" onClick={incrementHandler}>Increment</button>
                    <button className="btn btn-primary" onClick={decrementHandler}>Decrement</button>
                    <button className="btn btn-primary" onClick={increaseHandler}>Add +5</button>
                    <button className="btn btn-primary" onClick={clear}>Clear All</button>
           </div>
}
           <div className="row justify-content-lg-center">
               <button className ="col-3 btn btn-warning" onClick={toggleCounterHandler}>Toggle up</button>

           </div>
    </div>

    );
}

export default Counter;