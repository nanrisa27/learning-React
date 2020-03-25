import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function Person(props){
  return(
      <div className="box">
      <h1>{props.name}</h1>
  <p>Title: {props.title}</p>
  <p>Age: {props.age}</p>
    </div>
  );
}
const app = (
  <div>
    <Person name="Maria" title="CEO" age= "29"/>
    <Person name="Maria" title="CEO" age= "25"/>
    <Person name="Maria" title="CEO" age= "45"/>
  </div>
    
  


);


ReactDOM.render(<Person />, document.querySelector("#root"));

