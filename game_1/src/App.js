import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random()* (max - min + 1)) + min;
};


class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0

  };
  motion = 1500;
  timer = undefined

  next = ()=>{

    if (this.staterounds >= 3){
      this.endHandler();
    }
    let nextActive = undefined;


    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current)
    
    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });
    this.motion *= 0.95;
    this.timer = setTimeout(this.next, this.motion);
    console.log(this.state.current);
  };

  clickHandler = (circleID) => {
    console.log ('Clicked ', circleID);

    if (this.state.current !== circleID) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.scores + 1,
      rounds: 0,
    });
  };

  startHandler = ()=>{
    this.next();
  }
  endHandler = ()=>{
    clearTimeout (this.timer);
    this.setState({
      showGameOver:true,
    });

  };


  render() {
    return (
      <div className = 'App'>
        <h1> Speed Game</h1>

    <p> Your score is : {this.state.score}</p>
        <main>
          <Circle
          active = {this.state.current === 1} buttonColor = "purple" click={this.clickHandler.bind(this, 1)} />
          <Circle
          active = {this.state.current === 2 } buttonColor = "yellow" click={this.clickHandler.bind(this, 2)} />
          <Circle
          active = {this.state.current === 3} buttonColor = "blue" click={this.clickHandler.bind(this, 3)} />
        </main>
      
        <button className = 'btn' onClick= {this.startHandler}>Start</button>
        <button className = 'btn ' onClick= {this.endHandler}>Quit Game</button>
        
    
         {this.state.showGameOver && <GameOver score = {this.state.score}/> }
    
        
      </div>
    );
  }
}

export default App;
