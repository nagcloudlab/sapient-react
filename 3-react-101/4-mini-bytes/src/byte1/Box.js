import React, { Component } from 'react';
class Box extends Component {

    renderChildren() {
        return this.props.children.map((child, idx) => {
            return (
                <li key={idx} className='list-group-item'>
                    {child}
                </li>
            )
        })
    }

    render() {
        let { title } = this.props
        return (
            <div className='card'>
                <div className='card-header'>{title}</div>
                <div className='card-body'>
                    <ul>
                        {this.renderChildren()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Box; 