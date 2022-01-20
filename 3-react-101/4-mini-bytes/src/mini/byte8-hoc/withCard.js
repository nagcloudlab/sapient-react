import React, { Component } from 'react'
import './card.css';

function withCard(InputComponent) {

    class CardContainer extends Component {
        render() {
            return (
                <div className='card'>
                    <div className='container'>
                        <InputComponent {...this.props} />
                    </div>
                </div>
            )
        }
    }
    CardContainer.displayName = `CardContainer<${InputComponent.name}>`
    return CardContainer

}

export { withCard }