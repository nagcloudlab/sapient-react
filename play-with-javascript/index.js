


// --------------------------------------------
// 1- data model
// --------------------------------------------

// todo  = {id:number,title:string,completed:boolean}

/*

let nextId = 0
function Todo(title) {
    nextId++;
    this.id = nextId
    this.title = title
    this.completed = false
}

*/

// - or -

class Todo {
    static nextId = 0;
    constructor(title) {
        Todo.nextId++
        this.id = Todo.nextId
        this.title = title
        this.completed = false
    }
}



//--------------------------------------------------------------------
// 2- Service
//--------------------------------------------------------------------


//--------------------------------------------------------------------
// Mutable operations
//--------------------------------------------------------------------

class TodoService_v1 {
    todos = []
    addTodo(title) {
        const todo = new Todo(title)
        this.todos.push(todo)
    }
    editTodo(id, newTitle) {
        const todo = this.todos.find(todo => todo.id === id)
        todo.title = newTitle
    }
    completeTodo(id) {
        const todo = this.todos.find(todo => todo.id === id)
        todo.completed = !todo.completed
    }
    completeAll() {
        const areAllCompleted = this.todos.every(todo => todo.completed)
        for (let todo of this.todos) {
            todo.completed = !areAllCompleted
        }
    }
    deleteTodo(id) {
        const idx = this.todos.findIndex(todo => todo.id === id)
        this.todos.splice(idx, 1)
    }
    clearCompleted() {
        let idx = 0;
        while (idx < this.todos.length) {
            let todo = this.todos[idx]
            if (todo.completed) {
                this.todos.splice(idx, 1)
            }
            idx++
        }
    }
    viewTodos(flag = 'ALL') {
        if (flag === 'ALL') {
            this.todos.forEach(todo => {
                console.log(todo);
            })
        }
        if (flag === "ACTIVE") {
            this.todos.forEach(todo => {
                if (!todo.completed)
                    console.log(todo);
            })
        }
        if (flag === "COMPLETED") {
            this.todos.forEach(todo => {
                if (todo.completed)
                    console.log(todo);
            })
        }
    }
}


//--------------------------------------------------------------------
// Immutable operations
//--------------------------------------------------------------------

const TODO_FILTERS = {
    ALL: todo => true,
    COMPLETED: todo => todo.completed,
    ACTIVE: todo => !todo.completed
}

class TodoService_v2 {
    todos = []
    addTodo(title) {
        const todo = new Todo(title)
        this.todos = this.todos.concat(todo)
    }
    editTodo(id, newTitle) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.title = newTitle
            } else {
                return todo;
            }
        })
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed

            }
            return todo
        })
    }
    completeAll() {
        const areAllCompleted = this.todos.every(todo => todo.completed)
        this.todos = this.todos.map(todo => {
            todo.completed = !areAllCompleted;
            return todo;
        })
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => {
            if (todo.id === id)
                return false
            else {
                return true
            }
        })
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => {
            if (todo.completed)
                return false
            else {
                return true
            }
        })
    }
    getTodos(flag = 'ALL') {
        return this.todos
            .filter(TODO_FILTERS[flag])
    }
}

const todoService = new TodoService_v2();
todoService.addTodo("todo-1")
todoService.addTodo("todo-2")
todoService.completeTodo(1)


// --------------------------------------------------------------
// View
// --------------------------------------------------------------

// using DOM API

const newTodoInpField = document.getElementById('new-todo')
const todoListEle = document.getElementById('todo-list')


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

renderTodos(todoService.getTodos('ALL')) // intial rendering