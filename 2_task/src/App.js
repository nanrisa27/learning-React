import React, {Component} from 'react';
import Person from"./Person/Person";

import './App.css';


class App extends Component{
  render () {
    return(
      <div>
        <h1>Hello World</h1>
        <p>Hello, World</p>
        <Person name="Mimi" age="32"/>
        <Person name="bee" age="30"/>
        <Person name="nje" age="30"/>
        <Person name="zel" age="31"/>
        <Person name="Sozi" age="30"/>
      </div>
    );
    

  }
}

 
 export default App;