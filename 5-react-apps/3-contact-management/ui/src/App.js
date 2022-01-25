import './App.css';
import ContactList from "./ContactList";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import ContactForm from "./ContactForm";
import NotFound from "./NotFound";
import Welcome from "./Welcome";
import {useState} from "react";

function App() {

    const [contacts,setContacts]=useState([
        {id: 1, name: 'Nag', email: 'nag@mail.com', mobile: '1234567890', address: 'chennai'},
        {id: 2, name: 'Indu', email: 'indu@mail.com', mobile: '0987654321', address: 'chennai'}
    ])

    const addNewContact=c=>{
        c.id=contacts.length+1
        setContacts([...contacts,c])
    }

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
                        <Route path={"/all"} render={props=><ContactList {...props} value={contacts}/>}/>
                        <Route path={"/new"} render={props=><ContactForm {...props} onNewContact={c=>addNewContact(c)}/>}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>

        </div>
    );
}

export default App;
