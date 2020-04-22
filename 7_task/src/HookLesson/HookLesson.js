/* import React, {Component} from 'react';


class Counter extends Component{
    state = {counter: 0};
    

    addHandler = () => this.setState({counter:this.state.counter + 1});
    removeHandler = () => this.setstate({counter:this.state.counter - 1});
    resetHandler = () => this.setstate({counter:0});

    render() {
        return (
            <div>
                <h1>my votes {this.state.counter}</h1>
                <button onClick= {this.addHandler}> Add vote</button>
                <button onClick={this.removeHandler}>Remove vote</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>

        );
    }
} */



import React, {useState} from 'react';
import './HookLesson.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

const Button =({click, text})=>{
    return(
        <div className= 'btn'>
            <button onClick={click}>{text}</button>
        </div>
    );
}

const HookLesson = () =>{

    const [counter, setState]= useState(0);
    const addHandler = () => setState (counter + 1);
    const removeHandler = ()=> setState(counter - 1);
    const resetHandler = ()=> setState(0);

    return (
    <div className ='voters' >
        <h1>my votes {counter}</h1>
        <div>
        <Button click= {addHandler} text = 'Add one' FontAwesomeIcon icon= {faThumpsUp}/> 
        <Button click= {removeHandler} text = 'remove one'FontAwesomeIcon icon= {faThumpsDown}/> 
        <Button click= {resetHandler} text = 'reset'/>       

        </div>
       
    </div>
    );

} ;








export default HookLesson;