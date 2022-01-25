import React, {useState} from 'react';
import {useParams} from 'react-router-dom'

function ContactForm({onNewContact,onEditContact, history, match, contacts}) {

    // const {contactId}=match.params;
    // -or-
    let {contactId} = useParams();
    contactId = Number.parseInt(contactId)

    let contactData = {
        name: '',
        email: '',
        mobile: '',
        address: ''
    }
    if (contactId) {
        contactData = contacts.find(c => c.id === contactId)
    }

    const [contact, setContact] = useState(contactData)
    const handleChange = e => {
        let {id, value} = e.target
        setContact({...contact, [id]: value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (contact.id) {
            onEditContact(contact)
        } else {
            onNewContact(contact)
        }
        setContact({
            name: '',
            email: '',
            mobile: '',
            address: ''
        })
        history.push("/all")
    }
    return (
        <div className={"card"}>
            <div className={"card-header"}>Contact Form - {contactId}</div>
            <div className={"card-body"}>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className={"form-group"}>
                        <label>Name</label>
                        <input value={contact.name} id={"name"} onChange={e => handleChange(e)}
                               className={"form-control"}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Email</label>
                        <input value={contact.email} id={"email"} onChange={e => handleChange(e)}
                               className={"form-control"}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Mobile</label>
                        <input value={contact.mobile} id={"mobile"} onChange={e => handleChange(e)}
                               className={"form-control"}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Address</label>
                        <textarea value={contact.address} id={"address"} onChange={e => handleChange(e)}
                                  className={"form-control"}></textarea>
                    </div>
                    <br/>
                    <button className={"btn btn-dark"}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;