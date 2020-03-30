import React,{Component} from 'react';
import './App.css';
import Header from"./Header/Header";
import Footer from"./Footer/Footer";

class App extends Component{
  state = {
    like : 0
  };

  addHander = () => {
    console.log("test");
    this.setState({
      like:this.state.like + 1
    });
  }; 
  IncrementItem = () => {
    this.setState({ like: this.state.like + 1 });
  }
  DecreaseItem = () => {
    this.setState({ like: this.state.like - 1 });
  }
  resetHandler = () => {
    this.setState({ like: 0 });
  };
 

  render (){
    return (
      <div className = "container">
        <Header/>
        
      <main className = "main">
        <h1 className = {this.state.like == 0 ? "like": this.state.like % 2 === 0 ? " like even" : "like odd"} >Total likes: {this.state.like}</h1>
        
      <button className = "btn"  onClick={this.IncrementItem}> addlikes</button>
        <button className = "btn"  onClick={this.DecreaseItem}> remove like</button>
        <button className = "btn"  onClick={this.resetHandler}> reset</button>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default App;






