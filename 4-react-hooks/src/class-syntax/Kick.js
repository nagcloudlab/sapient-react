
import React, { Component } from 'react';

class Kick extends Component {
    constructor() {
        super();
        this.state = {
            kickCount: 0
        }
        //this.handleKickEvent = this.handleKickEvent.bind(this)
    }
    handleKickEvent() {
        let { kickCount } = this.state
        kickCount++
        this.setState({
            kickCount: kickCount
        })
    }
    componentDidMount() {
        document.title = `kick count - ${this.state.kickCount}`
    }
    componentDidUpdate() {
        document.title = `kick count - ${this.state.kickCount}`
    }
    render() {
        return (
            <div className='alert alert-info'>
                <hr />
                <h1>Kick component - class-syntax</h1>
                <hr />
                <button onClick={e => this.handleKickEvent()} className='btn btn-danger'>Kick - {this.state.kickCount}</button>
            </div>
        );
    }
}

export default Kick;


