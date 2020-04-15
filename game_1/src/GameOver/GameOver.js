import React from 'react';
import './GameOver.css'

const closeHandler = ()=>{
    window.location.reload ();
};


const GameOver = (props) => {
    return (

         <div className= 'popup'>

        <div className= 'gamers'>
            <div>
        <h2>Oops Game over!</h2>
        <p> Your score is: {props.score}</p>
        </div>
        <button className = 'btn2' onClick = {closeHandler}>close</button>

    </div>
    </div>
    );

    
    
    
  };



  export default GameOver;