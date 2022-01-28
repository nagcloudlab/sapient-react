import React from 'react';

function TodoItem({value:todo}) {
    return (
        <>
            <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'completed' : 'not completed'}</td>
                <td>{todo.userId}</td>
            </tr>
        </>
    );
}

export default TodoItem;