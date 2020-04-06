import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random()* (max - min + 1)) + min;
};


class App extends Component {
  state = {
    score: 0,
    current: 0,

  };
  motion = 1500;
  timer = undefined

  next = ()=>{
    let nextActive = undefined;

    do{
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current)
    this.setState({
      current: nextActive,
    });
    this.timer= setTimeout(this.next, this.motion);
    console.log(this.state.current);
  };

  clickHandler = (circleID) =>{
    console.log ('clicked ', circleID);
    this.setState({
      score: this.statescore + 1,
    });
  };

  startHandler = ()=>{
    this.next();
  }
  endtHandler = ()=>{
    clearTimeout (this.timer);

  }


  render() {
    return (
      <div className = 'App'>
        <h1> Speed Game</h1>

    <p> Your score is : {this.state.score}</p>
        <main>
          <Circle
          active = {this.state.current===1} buttonColor = "purple" click={this.clickHandler.bind(this,1)} />
          <Circle
          active = {this.state.current===2} buttonColor = "yellow" click={this.clickHandler.bind(this,1)} />
          <Circle
          active = {this.state.current===3} buttonColor = "blue" click={this.clickHandler.bind(this,1)} />
        </main>

        <button className = 'btn' onClick= {this.startHandler}>Start</button>
        <button className = 'btn ' onClick= {this.startHandler}>Quit Game</button>
        
      </div>
    );
  }
}

export default App;
