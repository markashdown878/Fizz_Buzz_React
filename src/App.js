import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import './App.css';

class App extends React.Component {

  //Change game numbers here
  state = {
    count: 1, //starting number
    fizz: 5,  //fizz number
    buzz: 7   //Buzz number
  };
  
  //decrease number function
  decreaseNumber = () => {
    if(this.state.count > 1){
      this.setState(
        (prevState) =>({count: prevState.count - 1})
      )
    }
  };

  //increase number function
  increaseNumber = () => {
    if(this.state.count < 100){
      this.setState(
        (prevState) => ({count: prevState.count + 1})
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Header fizz={this.state.fizz} buzz={this.state.buzz} />
        <Counter count={this.state.count} fizz={this.state.fizz} buzz={this.state.buzz} decreaseNumber={this.decreaseNumber} increaseNumber={this.increaseNumber}/>
      </div>
    );
  };


}

export default App;
