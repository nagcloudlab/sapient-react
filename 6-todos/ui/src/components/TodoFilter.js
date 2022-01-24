import React from 'react';

function TodoFilter(props) {
    return (
        <div className="d-flex justify-content-between">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a id="filter-all" className="nav-link" href="#">All</a>
                </li>
                <li className="nav-item">
                    <a id="filter-active" className="nav-link" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a id="filter-completed" className="nav-link" href="#">Completed</a>
                </li>
            </ul>
            <button id="clear-completed" className="btn btn-link">Clear Completed</button>
        </div>
    );
}

export default TodoFilter;