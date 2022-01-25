import React, { useEffect, useState } from 'react';
import TodoInput from "./TodoInput";
import TodoLimit from "./TodoLimit";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

import { getTodos } from '../api/todos'

import { useParams } from 'react-router-dom'


const TODO_FILTERS = {
    all: todo => true,
    completed: todo => todo.completed,
    active: todo => !todo.completed
}

function TodoApp(props) {

    const [todos, setTodos] = useState([])
    const [filteredTodos, setFilteredTodos] = useState([])
    const [limit, setLimit] = useState(5)

    const { flag } = useParams()

    const handleDeleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }
    const handleClearCompleted = id => {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }
    const handleCompleteTodo = id => {
        const newTodos = todos.map(todo => {
            if (todo.id === id)
                return { ...todo, completed: !todo.completed }
            return todo
        })
        setTodos(newTodos)
    }
    const handleEditTodo = (id, title) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id)
                return { ...todo, title: title }
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
        let response = await getTodos(limit)
        let todos = await response.json()
        setTodos(todos)
        setFilteredTodos(todos)
    }
    useEffect(() => {
        loadTodos()
    }, [limit])

    useEffect(() => {
        let result = todos.filter(TODO_FILTERS[flag]);
        setFilteredTodos(result)
    }, [todos, flag, limit])

    return (
        <div>
            <hr />
            <h1>todo app</h1>
            <hr />
            <TodoInput
                onSubmit={title => handleNewTodo(title)} />
            <hr />
            <TodoLimit
                onLimitChange={newLimit => setLimit(newLimit)}
            />
            <hr />
            <TodoList value={filteredTodos}
                onDelete={id => handleDeleteTodo(id)}
                onComplete={id => handleCompleteTodo(id)}
                onEdit={(id, title) => handleEditTodo(id, title)}
            />
            <hr />
            <TodoFilter
                onClearCompleted={() => handleClearCompleted()}
            />
            <hr />
        </div>
    );
}

export default TodoApp;