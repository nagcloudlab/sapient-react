import React from 'react';
import TodoItem from "./TodoItem";

function TodoList({value: todos, onDelete, onComplete, onEdit}) {
    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <TodoItem
                    key={todo.id}
                    value={todo}
                    onDelete={onDelete}
                    onComplete={onComplete}
                    onEdit={onEdit}
                />
            )
        })
    }
    return (
        <div>
            <ul id="todo-list" className="list-group">
                {renderTodos()}
            </ul>
        </div>
    );
}

export default TodoList;