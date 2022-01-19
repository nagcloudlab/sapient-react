import React, { Component } from 'react';
import PlayGround from './PlayGround';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <hr />
        <h1>play-with-tom-and-jerry</h1>
        <hr />
        <PlayGround title="cartoon-fight" />
      </div>
    );
  }
}

export default App;