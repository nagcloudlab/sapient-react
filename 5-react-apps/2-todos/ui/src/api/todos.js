export function getTodos(limit = 5) {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
}