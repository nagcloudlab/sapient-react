
import React, { Component } from 'react'

/**
 * author : Nag
 * 
 */
class App extends Component {

  constructor(props) {
    super()
    console.log("App::constructor()");
    //console.log(props);
  }

  render() {
    console.log("App::render()");
    // let title = this.props.title
    // let trainer = this.props.trainer
    // - or -
    let { title, trainer } = this.props
    return (
      <div className='container'>
        <hr />
        <h1 className='text text-danger'>
          {title} - &nbsp;
          <small className='h6'>by {trainer}</small>
        </h1>
        <hr />
      </div>
    )
  }

}


export default App;