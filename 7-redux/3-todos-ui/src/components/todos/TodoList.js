import React, {useEffect, useState} from 'react';

import * as todosApi from '../../api/todos-api'
import TodoItem from "./TodoItem";

function TodoList(props) {

    const [todos, setTodos] = useState([])
    const [limit, setLimit] = useState(5)

    useEffect(async () => {
        const response = await todosApi.getAllTodos(limit)
        setTodos(response.data)
    }, [limit])

    const handleLimit = n => {
        setLimit(n)
    }

    const renderTodoItems = () => {
        return todos.map(todo => <TodoItem key={todo.id} value={todo}/>)
    }
    const renderTodos = () => {
        if (todos.length == 0) {
            return (
                <div>No Todos</div>
            )
        }
        return (
            <table className={"table"}>
                <tbody>
                {renderTodoItems()}
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <hr/>
            {
                [5,10, 50, 100, 200].map(n => {
                    return (
                        <button onClick={e => handleLimit(n)}
                                className={`btn ${limit===n?'btn-danger':'btn-primary'}`} key={n}>
                            {n}
                        </button>)
                })
            }
            <hr/>
            {renderTodos()}
        </div>
    );
}

export default TodoList;