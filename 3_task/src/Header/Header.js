import React from "react"
import "./Header.css";



const Header = () => {
  const date = new Date();

  return(
    <div className = "header">
    <h1>Task 3 </h1>
    <p>{date.toDateString()}</p>
  </div>
      
  );
    
  
    
  
};

export default Header;
      
    
      
    




