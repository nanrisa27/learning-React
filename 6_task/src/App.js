import React, {Component} from 'react';
import './App.css';
import LessonArray from "./LessonArray/LessonArray";
import ArrayMethods from './LessonArray/ArrayMethods';



class App extends Component{
  render() {
    return(
      <div>

        <p>Hello World!</p>

        <hr></hr>

        <LessonArray/>
        <ArrayMethods/>
      </div>
    );

  }
}



export default App;
