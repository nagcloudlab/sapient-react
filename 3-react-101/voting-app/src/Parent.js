import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    render() {
        return (
            <div className='card card-body bg-dark'>
                <Child name="tom" onFood={e => console.log(`ok child-${e.name}, ill put food in dining table`)} />
                <br />
                <Child name="jerry" onFood={e => console.log(`ok child-${e.name}, ill put food in dining table`)} />
            </div>
        );
    }
}

export default Parent;