
import React, { Component } from 'react'
import Greet from './Greet';


// stateful
class App extends Component {

  constructor(props) {
    super()
    console.log("App::constructor()");
    this.state = {
      message: "greetings"
    }
  }

  handleEvent(e, message) {
    this.setState({ message })
  }
  render() {
    console.log("App::render()");
    let { title, trainer } = this.props
    let { message } = this.state
    return (
      <div className='container'>
        <div className='card card-body'>
          <hr />
          <h1 className='text text-danger'>
            {title} - &nbsp;
            <small className='h6'>by {trainer}</small>
          </h1>
          <hr />
          <div className='d-flex justify-content-around'>
            <button onClick={e => this.handleEvent(e, "hello")} className='btn btn-dark'>Hello</button>
            <button onClick={e => this.handleEvent(e, "hi")} className='btn btn-dark'>Hi</button>
            <button onClick={e => this.handleEvent(e, "hey")} className='btn btn-dark'>Hey</button>
            <button onClick={e => this.handleEvent(e, "")} className='btn btn-danger'>Remove Greet component</button>
          </div>
          <hr />
          {message ? <Greet message={message} /> : null}
        </div>
      </div>
    )
  }

}


export default App;

