export function todosReducer(state = [], action) {
    let {type} = action;
    switch (type) {
        case 'LOAD_TODOS': {
            let {todos} = action
            return [...todos]
        }
        case 'DELETE_TODO': {
            let {id} = action;
            return state.filter(todo => todo.id !== id)
        }
        default:
            return state
    }
}