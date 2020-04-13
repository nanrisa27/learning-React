import React, {Component} from 'react';
import './App.css';
import Form from './Form/Form';
import View from './View/View';

class App extends Component{
  state = {
    firstname : '',
    lastname : '',
    phone: '',
    message: '',

  };

  changeHandler= (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render(){
    return(
      
      <div className = 'formInput'>

       <Form onChange= {this.changeHandler}/>

       <View firstname= {this.state.firstname} lastname={this.state.lastname} phone={this.state.phone} message={this.state.message}/>
      


    </div>

    );
    
  }
}

 
 

  



export default App;
