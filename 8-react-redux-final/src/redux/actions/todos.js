import * as todosApi from '../../api/todos-api'

export function loadTodos(limit) {
    return (dispatch) => {
        // Api call
        todosApi.getAllTodos(limit)
            .then(response => {
                const todos = response.data;
                dispatch({ type: 'LOAD_TODOS', todos })
            })
    }
}

export function deleteTodo(id) {
    // return {type: 'DELETE_TODO', id}
    return (dispatch) => {
        // Api call
        todosApi.deleteTodo(id)
            .then(response => {
                const todos = response.data;
                dispatch({ type: 'DELETE_TODO', id })
            })
    }
}