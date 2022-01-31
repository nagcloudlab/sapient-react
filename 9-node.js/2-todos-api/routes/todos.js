const express = require('express')
const router = express.Router()

const todos = [
    {id: 1, title: 'eat', completed: 'false'},
    {id: 2, title: 'sleep', completed: 'false'}
]

router
    .get("/:id",(req, res, next) => {
        let id = Number.parseInt(req.params.id)
        let todo = todos.find(todo => todo.id === id)
        res.status(200).json(todo)
    })
    .delete("/:id",(req, res, next) => {
        let id = Number.parseInt(req.params.id)
        let idx = todos.findIndex(todo => todo.id === id)
        todos.splice(idx, 1)
        res.status(200).json({message: 'success'})
    })
    .put("/:id",express.json(), (req, res, next) => {
        let id = Number.parseInt(req.params.id)
        let body = req.body;
        let todo = todos.find(todo => todo.id === id)
        if (body.title) {
            todo.title = body.title
        }
        if (body.completed) {
            todo.completed = body.completed
        }
        res.status(200).json(todo)
    })

router
    .get("/",(req, res, next) => {
       setTimeout(()=>{
           res.status(200).json(todos)
       },0)
    })
    .post("/",express.json(),(req, res, next) => {

        let body = req.body;
        let todo = {id: todos.length + 1, title: body.title, completed: false}
        todos.push(todo)
        res.status(200).json(todo)
    })


module.exports = router