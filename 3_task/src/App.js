import React,{Component} from 'react';
import './App.css';

class App extends Component{
  state = {
    like : 0
  };

  addHander = () => {
    console.log("test");
    this.setState({
      like:this.state.like + 1
    });
  }; 
  IncrementItem = () => {
    this.setState({ like: this.state.like + 1 });
  }
  DecreaseItem = () => {
    this.setState({ like: this.state.like - 1 });
  }
  resetHandler = () => {
    this.setState({ like: 0 });
  };
 

  render (){
    return (
      <div>
        <button onClick={this.IncrementItem}>Click to increase</button>
        <button onClick={this.DecreaseItem}>Click to decrease</button>
        <button onClick={this.resetHandler}>Click to reset</button>

        <h1 className = {this.state.like == 0 ? "like": this.state.like % 2 === 0 ? " like even" : "like odd"} >Total likes: {this.state.like}</h1>
        <button onClick={this.addHandler}>
        Add likes
      </button>
      </div>
    );
  }
}

export default App;






