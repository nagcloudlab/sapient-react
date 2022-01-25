import React from 'react';
import { Link } from 'react-router-dom'

function TodoFilter({ onClearCompleted, onFilter }) {
    return (
        <div className="d-flex justify-content-between">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" to="/todos/all">All</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/todos/active">Active</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/todos/completed">Completed</Link>
                </li>
            </ul>
            <button onClick={e => onClearCompleted()} id="clear-completed" className="btn btn-link">Clear Completed</button>
        </div>
    );
}

export default TodoFilter;