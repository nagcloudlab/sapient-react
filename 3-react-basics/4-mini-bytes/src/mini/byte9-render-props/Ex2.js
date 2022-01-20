

import React, { Component } from 'react';

/*
    osakhatri
*/

class Title extends Component {
    render() {
        let { value, myRender } = this.props
        return (
            <div className='card card-body'>
                <h1>{!myRender ? value : myRender(value)}</h1>
            </div>
        )
    }
}


class Ex2 extends Component {
    myRender(title) {
        return (
            <div className='bg-danger'>{title}</div>
        )
    }
    render() {
        return (
            <div>
                <Title value="react" myRender={this.myRender} />
            </div>
        );
    }
}

export default Ex2;