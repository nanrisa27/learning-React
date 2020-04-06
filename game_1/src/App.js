import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';




class App extends Component {
  state = {
    score: 0,

  };

  clickHandler = (circleID) =>{
    console.log ('clicked ', circleID);
    this.setState({
      score: this.statescore + 1,
    });
  };


  render() {
    return (
      <div className = 'App'>
        <h1> Speed Game</h1>

    <p> Your score is : {this.state.score}</p>
        <main>
          <Circle click={this.clickHandler.bind(this,1)} />
          <Circle click={this.clickHandler.bind(this,1)} />
          <Circle click={this.clickHandler.bind(this,1)} />
        </main>

        <button className = 'btn'>Start</button>
        <button className = 'btn '>Quit Game</button>
        
      </div>
    );
  }
}

export default App;
