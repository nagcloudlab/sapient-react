export function loadTodos(limit) {
    const todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
    ]
    return {type: 'LOAD_TODOS', todos} // async
}

export function deleteTodo(id) {
    return {type: 'DELETE_TODO', id}
}