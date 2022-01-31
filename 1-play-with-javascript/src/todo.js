
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
    // static nextId = 0;
    constructor(title) {
        // Todo.nextId++
        // this.id = Todo.nextId
        this.title = title
        this.completed = false
    }
}

export default Todo