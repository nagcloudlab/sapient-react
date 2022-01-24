import React from 'react';

function TodoFilter({onClearCompleted,onFilter}) {
    return (
        <div className="d-flex justify-content-between">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a onClick={e=>onFilter("ALL")}  className="nav-link" href="#">All</a>
                </li>
                <li className="nav-item">
                    <a onClick={e=>onFilter('ACTIVE')}  className="nav-link" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a onClick={e=>onFilter('COMPLETED')} className="nav-link" href="#">Completed</a>
                </li>
            </ul>
            <button onClick={e=>onClearCompleted()} id="clear-completed" className="btn btn-link">Clear Completed</button>
        </div>
    );
}

export default TodoFilter;