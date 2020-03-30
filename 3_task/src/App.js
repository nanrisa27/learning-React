import React,{Component} from 'react';
import './App.css';

class App extends Component{
  state = {
    like : 0
  };

  render (){
    return (
      <div>
        <h1>Total likes: {this.state.like}</h1>
      </div>
    );
  }
}

export default App;




