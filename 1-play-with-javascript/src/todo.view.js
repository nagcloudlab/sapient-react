import TodoService from './todo.service'


const todoService = new TodoService()

// --------------------------------------------------------------
// View
// --------------------------------------------------------------

// using DOM API

const newTodoInpField = document.querySelector('#new-todo')
const todoListEle = document.getElementById('todo-list')

const allFilterLink = document.getElementById("filter-all")
const activeFilterLink = document.getElementById("filter-active")
const completedFilterLink = document.getElementById("filter-completed")

const clearCompletedBtn = document.getElementById("clear-completed")


const todoLimit5Btn = document.getElementById("todo-limit-5")
const todoLimitList = document.getElementById("todo-limit-list")
const todoLimitInp = document.getElementById("todo-limit-inp")

newTodoInpField.addEventListener('keyup', e => {
    if (e.code !== "Enter") return
    let title = e.target.value.trim()
    if (!title) return
    todoService.addTodo(title)
    e.target.value = ""
    renderTodos(todoService.getTodos('ALL')) //re-rendering
})

todoListEle.addEventListener('click', e => {
    const { action, id } = e.target.dataset
    if (action === "del") {
        todoService.deleteTodo(Number.parseInt(id))
    }
    if (action === "cmp") {
        todoService.completeTodo(Number.parseInt(id))
    }
    renderTodos(todoService.getTodos("ALL"))
})

allFilterLink.addEventListener('click', e => {
    renderTodos(todoService.getTodos('ALL'))
})
activeFilterLink.addEventListener('click', e => {
    renderTodos(todoService.getTodos('ACTIVE'))
})
completedFilterLink.addEventListener('click', e => {
    renderTodos(todoService.getTodos('COMPLETED'))
})
clearCompletedBtn.addEventListener('click', e => {
    todoService.clearCompleted()
    renderTodos(todoService.getTodos("ALL"))
})
todoLimit5Btn.addEventListener('click', e => {
    getTodos()
})
todoLimitList.addEventListener('change', e => {
    getTodos(e.target.value)
})
todoLimitInp.addEventListener('blur', e => {
    getTodos(e.target.value)
})


function renderTodos(todos = []) {
    if (todos.length === 0) {
        todoListEle.innerHTML = `
        <li class="list-group-item">
            <div>No Todos</div>
        </li>
        `
    } else {
        const liElements = todos.map(todo => {
            return `
        <li class="list-group-item ${todo.completed ? 'bg-success' : ''}" >
            <div class="d-flex justify-content-between">
                <input ${todo.completed ? 'checked' : ''} data-action="cmp" data-id="${todo.id}" type="checkbox" />
                <span>${todo.title}</span>
                <button data-action="del" data-id="${todo.id}" class="btn btn-sm btn-danger">delete</button>
            </div>
        </li>
        `
        })
        todoListEle.innerHTML = liElements.join(" ")
    }
}

function getTodos(limit = 5) {
    const apiUrl = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    const promise = fetch(apiUrl)
    promise
        .then(response => response.json())
        .then(todos => {
            todoService.todos = todos
            renderTodos(todoService.getTodos('ALL')) // intial rendering
        })

}

getTodos()
