import React from 'react';
import { Link, Route } from "react-router-dom";
import ContactView from "./ContactView";

function ContactList({ value, onDelete, mathch }) {

    const renderContacts = () => {
        return value.map(contact => {
            return (
                <tr key={contact.id}>
                    <td><Link to={`/all/view/${contact.id}`}>{contact.name}</Link></td>
                    <td><Link to={`/edit/${contact.id}`}><i className={"fa fa-edit"}></i></Link></td>
                    <td><Link to={""} onClick={e => { e.preventDefault(); onDelete(contact.id) }}><i className={"fa fa-trash"}></i></Link></td>
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
            <hr />
            <Route path={"/all/view/:contactId"} render={props => <ContactView {...props} contacts={value} />} />
        </div>
    );
}

export default ContactList;