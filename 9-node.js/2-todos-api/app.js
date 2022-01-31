const express = require('express')
const cors = require("cors");
const todosRoute = require('./routes/todos')

const app = express()

app.use(cors({
    origin: "*"
}))
app.use(express.static(__dirname + "public"))
app.use("/api/todos/", todosRoute)


app.listen(5000, () => {
    console.log("server UP")
})