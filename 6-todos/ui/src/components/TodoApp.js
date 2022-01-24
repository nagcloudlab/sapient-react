import React, {useEffect, useState} from 'react';
import TodoInput from "./TodoInput";
import TodoLimit from "./TodoLimit";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

import {getTodos} from '../api/todos'

function TodoApp(props) {

    const [todos, setTodos] = useState([])

    const handleDeleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
    const handleCompleteTodo = id => {
        const newTodos = todos.map(todo => {
            if (todo.id === id)
                return {...todo, completed: !todo.completed}
            return todo
        })
        setTodos(newTodos)
    }
    const handleEditTodo = (id, title) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id)
                return {...todo, title: title}
            return todo
        })
        setTodos(newTodos)
    }
    const handleNewTodo = title => {
        let newTodo = {
            id: todos.length + 1,
            title,
            completed: false
        }
        setTodos([newTodo, ...todos])
    }

    const loadTodos = async () => {
        let response = await getTodos()
        let todos = await response.json()
        setTodos(todos)
    }
    useEffect(() => {
        loadTodos()
    }, [])

    return (
        <div>
            <hr/>
            <h1>todo app</h1>
            <hr/>
            <TodoInput onSubmit={title => handleNewTodo(title)}/>
            <hr/>
            <TodoLimit />
            <hr/>
            <TodoList value={todos}
                      onDelete={id => handleDeleteTodo(id)}
                      onComplete={id => handleCompleteTodo(id)}
                      onEdit={(id, title) => handleEditTodo(id, title)}
            />
            <hr/>
            <TodoFilter/>
            <hr/>
        </div>
    );
}

export default TodoApp;