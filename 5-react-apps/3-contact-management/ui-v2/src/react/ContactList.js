import React from 'react';
import {Link, Route} from "react-router-dom";
import ContactView from "./ContactView";

import {useSelector, useDispatch} from 'react-redux'

function ContactList({}) {
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch();

    const handleDelete = id => {
        let action = {type: 'DELETE_CONTACT', id}
        dispatch(action)
    }

    const renderContacts = () => {
        return contacts.map(contact => {
            return (
                <tr key={contact.id}>
                    <td><Link to={`/all/view/${contact.id}`}>{contact.name}</Link></td>
                    <td><Link to={`/edit/${contact.id}`}><i className={"fa fa-edit"}></i></Link></td>
                    <td><Link to={""} onClick={e => {
                        e.preventDefault();
                        handleDelete(contact.id)
                    }}><i className={"fa fa-trash"}></i></Link></td>
                </tr>
            )
        })
    }
    return (
        <div>
            <table className={"table"}>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                </tr>
                {renderContacts()}
                </tbody>
            </table>
            <hr/>
            <Route path={"/all/view/:contactId"} render={props => <ContactView {...props} />}/>
        </div>
    );
}

export default ContactList;