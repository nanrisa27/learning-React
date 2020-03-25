import React, {Component} from 'react';
import Person from"./Person/Person";

import './App.css';


class App extends Component{
  state = {
    Persons: [
      {name: "Mimi", age:32},
      {name: "bee", age:32},
      {name: "zel", age:32},
      {name: "nje", age:32},
      {name: "sozi", age:32},
      
    ]
  };
  render () {
    return(
      <div>
        <h1>Hello World</h1>
        <p>Hello, World</p>
        <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age}/>
        <Person name={this.state.Persons[1].name} age={this.state.Persons[0].age}/>
        <Person name={this.state.Persons[2].name} age={this.state.Persons[0].age}/>
        <Person name={this.state.Persons[3].name} age={this.state.Persons[0].age}/>
        <Person name={this.state.Persons[4].name} age={this.state.Persons[0].age}/>
      </div>
    );
    

  }
}

 
 export default App;