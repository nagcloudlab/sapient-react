import React, { Component } from 'react';

class Child extends Component {
    render() {
        let { name, onFood } = this.props;
        return (
            <div className='card card-body bg-secondary'>
                {name}
                <hr />
                <button onClick={e => onFood({ name })}>ask food</button>
            </div>
        );
    }
}

export default Child;