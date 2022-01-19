import React, { Component } from 'react';

class Arith extends Component {
    render() {
        return (
            <div>
                {/* trigger type error */}
                {undefined.value}
            </div>
        );
    }
}

export default Arith;