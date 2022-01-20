
import React, { Component } from 'react'
import store from '../store'

function connect(InputComponent, callback) {

    class Container extends Component {
        constructor(props) {
            super()
            this.state = callback(store.getState(), props)
        }
        componentDidMount() {
            console.log("didMount logic");
        }
        componentDidUpdate(prevProps) {
            console.log("didUpdate logic");
            if (this.props !== prevProps) {
                const state = callback(store.getState(), this.props)
                this.setState({ ...state })
            }
        }
        render() {
            return (
                <>
                    <InputComponent
                        {...this.props}
                        {...this.state} />
                </>
            )
        }
    }
    return Container
}

export { connect }