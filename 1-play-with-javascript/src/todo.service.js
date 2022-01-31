
import Todo from './todo'

//--------------------------------------------------------------------
// 2- Service
//--------------------------------------------------------------------


//--------------------------------------------------------------------
// 1-Mutable operations
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
// 2-Immutable operations
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
        todo.id = savedTodo.id
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

export { TodoService_v1 }
export default TodoService_v2;