
import React, { Component } from 'react';
import Parent from './Parent';
import VotingBox from './VotingBox';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <hr />
        <h1>Thinking in React</h1>
        <hr />

        <VotingBox />

      </div>
    );
  }
}

export default App;