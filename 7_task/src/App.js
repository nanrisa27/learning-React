import React,{Component}  from 'react';
import './App.css';
import HookLesson from './HookLesson/HookLesson';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';


class App extends Component{
  render() {
    return(
      <div className= 'hooksInfo'>
       <HookLesson/>
        
      </div>
    );

  }
}








export default App;
