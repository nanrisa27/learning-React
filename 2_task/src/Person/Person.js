import React from "react";
import "./Person.css";



const Person = (props) => {
    return(
        <div className="card">
            <p>Hello, My name is {props.name} ,and iam {props.age}</p>

        </div>
    );
      
    
      
    
  };

  export default Person;