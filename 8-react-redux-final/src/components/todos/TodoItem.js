import React from 'react';

function TodoItem({value: todo, onDelete}) {
    return (
        <tr>
            <td data-testid="todoid">{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? 'completed' : 'not completed'}</td>
            <td>{todo.userId}</td>
            <td>
                <button
                    data-testid={"delbtn"}
                    onClick={e => onDelete(todo.id)}
                    className={"btn btn-danger"}>
                    delete
                </button>
            </td>
        </tr>
    );
}

export default TodoItem;


