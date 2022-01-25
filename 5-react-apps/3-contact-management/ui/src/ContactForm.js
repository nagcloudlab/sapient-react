import React, {useState} from 'react';

function ContactForm({onNewContact,history}) {
    console.log(history)
    const [contact, setContact] = useState({
        name: '',
        email: '',
        mobile: '',
        address: ''
    })
    const handleChange = e => {
        let {id, value} = e.target
        setContact({...contact, [id]: value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        onNewContact(contact)
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
            <div className={"card-header"}>New Contact</div>
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