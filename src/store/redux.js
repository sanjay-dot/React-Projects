import {createStore} from 'redux';

const counterReducer =(state = {counter:0 , showcounter:true} ,action)=>{
    if(action.type === 'increment'){
        return{
            counter: state.counter+1,
            showcounter : state.showcounter
        }
    }

    if(action.type === 'decrement'){
        return{
            counter : state.counter-1,
            showcounter :state.showcounter
        }
    }

    if(action.type === 'increase'){
        return{
            counter : state.counter + action.payload,
            showcounter :state.showcounter
        }
    }

    if(action.type ==='clear'){
        return{
            counter: state.counter = 0,
            showcounter : !state.showcountshower
        }
    }
    if(action.type === 'toggle'){
        return{
            showcounter : !state.showcounter,
            counter :state.counter
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;