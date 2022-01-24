import React, {useEffect, useState} from 'react';

function TodoLimit({onLimitChange}) {
    const [limit,setLimit]=useState(5)
    useEffect(()=>{
        onLimitChange(limit)
    },[limit])
    return (
        <div>
            <div className="d-flex justify-content-around">
                <button onClick={e=>setLimit(5)} id="todo-limit-5" className="btn btn-sm btn-dark">Load Top-5</button>
                <select onChange={e=>setLimit(e.target.value)} value={limit} id="todo-limit-list" className="">
                    <option>5</option>
                    <option>15</option>
                    <option>50</option>
                    <option>100</option>
                    <option>200</option>
                </select>
                <input onBlur={e=>setLimit(e.target.value)} id="todo-limit-inp" size="3"/>
            </div>
        </div>
    );
}

export default TodoLimit;