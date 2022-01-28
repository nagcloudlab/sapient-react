import './App.css';
import {Link, Route} from "react-router-dom";
import TodoList from "./components/todos/TodoList";

function App() {
    return (
        <div className="container">
            <hr/>
            <h1>react-redux-final</h1>
            <hr/>
                <Link to={"/todos"}>View Todos</Link>
            <hr/>
            <Route path={"/todos"} component={TodoList}/>
        </div>
    );
}

export default App;
