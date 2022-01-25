import React from 'react';
import {useParams} from "react-router-dom";

function ContactView({contacts,history}) {
    let {contactId} = useParams()
    contactId = Number.parseInt(contactId)
    let contact = contacts.find(c => c.id === contactId)
    return (
        <div>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{contact.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{contact.email}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{contact.mobile}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{contact.address}</td>
                </tr>
                </tbody>
            </table>
            <br/>
            <button onClick={e=>history.goBack()} className={"btn btn-dark"}>back</button>
        </div>
    );
}

export default ContactView;