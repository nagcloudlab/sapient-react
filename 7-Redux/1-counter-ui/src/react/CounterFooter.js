import React from 'react';


import {useSelector,useDispatch} from 'react-redux'

function CounterFooter({}) {
    const count=useSelector(state=>state.counter.count)
    const dispatch=useDispatch()
    const handleReset=e=>{
        let action={type:'RESET'}
        dispatch(action)
    }
    return (
        <div className={"alert alert-danger"}>
            <div data-testid={"count"}>
                <button onClick={e=>handleReset()} className={"btn btn-warning"}>reset</button>
                &nbsp;
                {count}
            </div>
        </div>
    );
}

export default CounterFooter;