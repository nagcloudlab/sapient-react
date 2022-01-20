import React, { Component } from 'react';

class Hit extends Component {
    constructor() {
        super();
        this.state = {
            hitCount: 0
        }
        //this.handleKickEvent = this.handleKickEvent.bind(this)
    }
    handleHitEvent() {
        let { hitCount } = this.state
        hitCount++
        this.setState({
            hitCount: hitCount
        })
    }
    componentDidMount() {
        document.title = `hit count - ${this.state.hitCount}`
    }
    componentDidUpdate() {
        document.title = `hit count - ${this.state.hitCount}`
    }
    render() {
        return (
            <div className='alert alert-dark'>
                <hr />
                <h1>Hit component - class-syntax</h1>
                <hr />
                <button onClick={e => this.handleHitEvent()} className='btn btn-warning'>Hit - {this.state.hitCount}</button>
            </div>
        );
    }
}

export default Hit;


