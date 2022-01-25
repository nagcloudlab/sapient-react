import { Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";

import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="container">

      <Redirect to={"/todos/all"} />
      <Route path={"/todos/:flag"} component={TodoApp} />

    </div>
  );
}

export default App;
