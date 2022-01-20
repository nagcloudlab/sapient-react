import React, { Component } from 'react';
import ColorContext from './ColorContext';
class C extends Component {

    static contextType = ColorContext;

    render() {
        return (
            <div className='card card-body'>
                <span className='text text-primary'>

                    C component - {this.context}

                    {/* <ColorContext.Consumer>
                        {color => {
                            return (
                                <b>{color}</b>
                            )
                        }}
                    </ColorContext.Consumer> 
                    */}

                </span>
            </div>
        );
    }
}

export default C;