import React from 'react'
import './View.css';




  
    const View = props =>{
      return(
        
        <div className = 'viewInput'>
  
        <h1>This is your input</h1>

         <p>
             First Name:{props.firstname}
         </p>
         <p>
             Last Name: {props.lastname}
         </p>
         <p>
             Phone: {props.phone}
         </p>
         <p>
             Message:{props.message}
         </p>
  
  
      </div>
  
      );
      
    };
  
  
   
   
  
    
  
  
  
  export default View;
  