
import React, { Component } from 'react'
import Greet from './Greet';


// stateful
class App extends Component {

  state = {
    message: "greetings"
  }
  constructor(props) {
    super()
    console.log("App::constructor()");
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
            <button onClick={e => this.handleEvent(e, "good morning")} className='btn btn-dark'>GM</button>
            <button onClick={e => this.handleEvent(e, "good noon")} className='btn btn-dark'>GN</button>
            <button onClick={e => this.handleEvent(e, "good evening")} className='btn btn-dark'>GE</button>
          </div>
          <hr />
          <Greet message={message} />
        </div>
      </div>
    )
  }

}


export default App;

