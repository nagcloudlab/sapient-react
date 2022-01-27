import React, {useState} from 'react';
import CountDisplay from "./CounterFooter";
import CounterHead from "./CounterHead";

import {useDispatch} from "react-redux";

function Counter(props) {
    // const [count,setCount]=useState(0)
    const [stepCount,setStepCount]=useState(1)
    const dispatch=useDispatch();
    const handleIncEvent=e=>{
        dispatch({type:'INCREMENT',value:stepCount})
    }
    const handleDecEvent=e=>{
        dispatch({type:'DECREMENT',value:stepCount})
    }
    return (
        <div className={"card card-body"} data-testid={"root"}>
            <CounterHead title={"count"} />
            <br/>
            <div className={"d-flex"}>
                <button className={"btn btn-lg btn-danger"}
                        data-testid={"sub-btn"}
                        onClick={handleDecEvent}
                >
                    -
                </button>
                <input
                    data-testid={"input"}
                    value={stepCount}
                    type={"number"}
                    onChange={e=>setStepCount(Number.parseInt(e.target.value))}
                />
                <button className={"btn btn-lg btn-success"}
                        data-testid={"add-btn"}
                        onClick={handleIncEvent}
                >
                    +
                </button>
            </div>
            <br/>
            <CountDisplay/>
        </div>
    );
}

export default Counter;