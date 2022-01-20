

import React, { useState, useReducer } from 'react';
import { countReducer } from './reducer'

function Ex({ title }) {

    // const [count, setCount] = useState(0)
    // const handleIncrement = () => {
    //     setCount(count => count + 1)
    // }
    // const handleDecrement = () => {
    //     setCount(count => count - 1)
    // }

    const [state, dispatch] = useReducer(countReducer, { count: 10 })

    return (
        <div className='card'>
            <div className='card-header'>{title}</div>
            <div className='card-body'>
                <div className='d-flex justify-content-around'>
                    <button
                        onClick={e => { dispatch({ type: 'INCREMENT', v: 1 }) }}
                        className='btn btn-success'>
                        +1
                    </button>
                    <button
                        onClick={e => { dispatch({ type: 'INCREMENT', v: 10 }) }}
                        className='btn btn-success'>
                        +10
                    </button>
                    <div className='display-3'>{state.count}</div>
                    <button
                        onClick={e => { dispatch({ type: 'DECREMENT', v: 1 }) }}
                        className='btn btn-danger'>
                        -1
                    </button>
                    <button
                        onClick={e => { dispatch({ type: 'DECREMENT', v: 10 }) }}
                        className='btn btn-danger'>
                        -10
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ex;