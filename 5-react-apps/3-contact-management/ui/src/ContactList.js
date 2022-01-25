import React from 'react';

function ContactList({value}) {

    const renderContacts=()=>{
        return value.map(contact=>{
            return (
                <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.mobile}</td>
                    <td>{contact.address}</td>
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
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                    </tr>
                    {renderContacts()}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;