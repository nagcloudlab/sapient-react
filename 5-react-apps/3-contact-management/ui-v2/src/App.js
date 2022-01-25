import './App.css';
import ContactList from "./react/ContactList";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import ContactForm from "./react/ContactForm";
import NotFound from "./react/NotFound";

function App() {
    return (
        <div className="container">
            <hr/>
            <h1>react-CM</h1>
            <hr/>
            <div className={"row"}>
                <div className={"col-3"}>
                    <nav className="nav flex-column">
                        <Link className="nav-link" to="/all">View All</Link>
                        <Link className="nav-link" to="/new">Add New</Link>
                    </nav>
                </div>
                <div className={"col-6"}>
                    <Redirect to={"/all"}/>
                    <Switch>
                        {/*<Route path={"/"} exact={true} component={Welcome}/>*/}
                        {/*<Route path={"/all"} component={ContactList}/>*/}
                        <Route path={"/all"} render={props => <ContactList {...props}/>}/>
                        <Route path={"/new"} render={props => <ContactForm {...props} />}/>
                        {/*<Route path={"/edit/:contactId"} render={props => <ContactForm/>}/>*/}
                        {/*<Route component={NotFound}/>*/}
                    </Switch>
                </div>
            </div>

        </div>
    );
}

export default App;
