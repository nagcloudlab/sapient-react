import React from 'react';

function TodoLimit(props) {
    return (
        <div>
            <div className="d-flex justify-content-around">
                <button id="todo-limit-5" className="btn btn-sm btn-dark">Load Top-5</button>
                <select id="todo-limit-list" className="">
                    <option>5</option>
                    <option>15</option>
                    <option>50</option>
                    <option>100</option>
                    <option>200</option>
                </select>
                <input id="todo-limit-inp" size="3"/>
            </div>
        </div>
    );
}

export default TodoLimit;