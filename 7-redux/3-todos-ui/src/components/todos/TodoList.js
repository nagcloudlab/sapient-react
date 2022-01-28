import React, {useEffect, useState} from 'react';
import axios from "axios";


function TodoList(props) {
    const [todos, setTodos] = useState([])

    useEffect(async()=>{
        // api calls
        const response=await axios.get("https://jsonplaceholder.typicode.com/todos")
        const todos=await response.data;
        setTodos(todos)
    },[])

    const renderTodoItems = () => {
        return todos.map(todo => {
            return (
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? 'completed' : 'not completed'}</td>
                    <td>{todo.userId}</td>
                </tr>
            )
        })
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
            {renderTodos()}
        </div>
    );
}

export default TodoList;