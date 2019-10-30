import React, { Component } from 'react';

class Header extends Component {

  render(){
    return(
      <header>
        <h1>Welcome to Fizz Buzz!</h1>
        <p>Numbers divisable by <span className="fizz">{this.props.fizz}</span> are replaced by the word <span className="fizz">FIZZ</span></p>
        <p>Numbers divisible by <span className="buzz">{this.props.buzz}</span> are replaced by the word <span className="buzz">BUZZ</span></p>
        <p>Numbers divisible by both are replaced by the word <span className="fizz">FIZZ</span><span className="buzz">BUZZ</span></p>
        <p>Use the buttons to increase or decrease the number!</p>
      </header>
    );
  }


}

export default Header;
