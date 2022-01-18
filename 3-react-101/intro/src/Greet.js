import React, { Component } from 'react';

// stateless
class Greet extends Component {
    constructor(props) {
        super()
        console.log("Greet::constructor()");
    }
    render() {
        console.log("Greet::render()");
        const { message } = this.props
        return (
            <div className='alert alert-info'>
                {message}
                <hr />
                {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}
            </div>
        )
    }
}

export default Greet;