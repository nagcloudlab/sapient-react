import React, { Component } from 'react';

class FightStatus extends Component {
    render() {
        let { cartoon } = this.props
        return (
            <div className='card card-body'>
                <div className='alert alert-danger'>
                    {cartoon + " fighing.."}
                </div>
            </div>
        );
    }
}

export default FightStatus;