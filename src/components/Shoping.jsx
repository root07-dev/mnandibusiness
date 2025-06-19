import React from "react";
import { connect, useSelector,useDispatch } from "react-redux";



const Counter = () => {


    const dispatch = useDispatch()
    const counter = useSelector(state=>state.counter.counter);

    const handl  =()=>{
        dispatch({type:"INCREMENT"});
    }

    const decrement  =()=>{
        dispatch({type:"DECREMENT"});
    }

  return (
    <div>
      <p className="counter_title">Counter: {counter}</p>
      <button className="button" onClick={handl}>
        Increment
      </button>
      <button className="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};



export default Counter;