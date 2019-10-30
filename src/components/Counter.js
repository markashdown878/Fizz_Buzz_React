import React, { Component } from 'react';

class Counter extends Component {


  render(){
    const fizzCount = this.props.fizz;
    const buzzCount = this.props.buzz;
    const fizz = <span className="fizz">FIZZ</span>;
    const buzz = <span className="buzz">BUZZ</span>;
    const fizBuzz = [fizz, buzz];

    return(
      <div className="counter">
        <h2 className="large-text">
          {
            (this.props.count % fizzCount === 0 && this.props.count % buzzCount === 0) ? fizBuzz:
            (this.props.count % fizzCount === 0)  ? fizz:
            (this.props.count % buzzCount === 0)  ? buzz:
            this.props.count
          }
        </h2>
        <button className="btn" onClick={this.props.decreaseNumber}>-</button>
        <button className="btn" onClick={this.props.increaseNumber}>+</button>
      </div>
    );
  }


}

export default Counter;
