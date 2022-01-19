import React, { Component } from 'react';
import B from './B';
import ColorContext from './ColorContext';

class A extends Component {
    render() {
        let { color } = this.props
        return (
            <div className='card card-body'>
                <span className='text text-primary'>A component - <b>{color}</b></span>
                <ColorContext.Provider value={color}>
                    <B />
                </ColorContext.Provider>
            </div>
        );
    }
}

export default A;