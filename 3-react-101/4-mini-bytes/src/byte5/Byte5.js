import React, { Component } from 'react';
import Arith from './Arith';
import ErrorBoundary from './ErrorBoundary';

class Byte5 extends Component {
    render() {
        return (
            <div>

                <ErrorBoundary>
                    <Arith />
                </ErrorBoundary>


            </div>
        );
    }
}

export default Byte5;