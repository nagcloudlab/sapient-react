import React, {useEffect, useState} from 'react';

import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, loadTodos} from "../../redux/actions/todos";

function TodoList(props) {

    //const [todos, setTodos] = useState([])
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const [limit, setLimit] = useState(5)
    const [error, setError] = useState({})

    useEffect(() => {
        dispatch(loadTodos(limit))
    }, [limit])

    const handleDelete = todoId => {
        dispatch(deleteTodo(todoId))
    }

    const handleLimit = n => {
        setLimit(n)
    }

    const renderTodoItems = () => {
        return todos.map(todo => (
            <TodoItem key={todo.id}
                      value={todo}
                      onDelete={todoId => handleDelete(todoId)}
            />
        ))
    }
    const renderTodos = () => {
        if (error.message) {
            return (
                <div className={"alert alert-danger"}>
                    {error.message}
                </div>
            )
        }
        if (todos.length === 0) {
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
                [5, 10, 50, 100, 200].map(n => {
                    return (
                        <button onClick={e => handleLimit(n)}
                                className={`btn ${limit === n ? 'btn-danger' : 'btn-primary'}`} key={n}>
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