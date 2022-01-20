import React, { Component, PureComponent } from 'react';

// stateless
class Greet extends PureComponent {

    constructor(props) {
        super()
        console.log("Greet::constructor()");
    }

    render() {
        console.log("Greet::render()");
        const { message } = this.props
        return (
            <div className='alert alert-info'>
                {message}
                <hr />
                {/* {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })} */}
            </div>
        )
    }
    // why we need
    /*
        to perform any one-time intialization , like n/w call , subscription , DOM access
    */
    componentDidMount() {
        console.log("Greet::componentDidMount()");
        // this.intervaId = setInterval(() => {
        //     this.forceUpdate()
        // }, 1000);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Greet::shouldComponentUpdate()");
    //     if (this.props.message !== nextProps.message)
    //         return true
    //     else
    //         return false
    // }

    // why we need
    /*
        to perform any  side-effect ( n/w call ) when prev & current props are different
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greet::componentDidUpdate()");
        // console.log(prevProps);
        // console.log(this.props);
        //console.log(prevState);
        // console.log(snapshot);
    }
    // why we need
    /*
        to perform  clean-up
    */
    componentWillUnmount() {
        console.log("Greet::componentWillUnmount()");
        // clearInterval(this.intervaId)
    }

}

export default Greet;