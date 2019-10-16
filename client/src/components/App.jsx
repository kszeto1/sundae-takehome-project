import React, { Component } from 'react';
import ListSteps from './ListSteps.jsx';
import MainButton from './MainButton.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="how-steps-container">
          <img src="https://sundae-takehome-project.s3-us-west-1.amazonaws.com/smiley-money.jpg"></img>
          <ListSteps />
        </div>
        <div className="steps-button-container">
          <MainButton />
        </div>
      </div>
    );
  }
}

export default App;