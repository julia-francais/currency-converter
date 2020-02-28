import React, { Component } from "react";
import "./styles.css";

const App = () => (
  <div className="App">
    <Amount>
      {amount => (
        <div>
          <h4> My currency converter </h4>
          <Euro amount={amount} />
          <Pound amount={amount} />
        </div>
      )}
    </Amount>
  </div>
);

class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
  }
  onIncrement = () => {
    this.setState(state => ({ amount: this.state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: this.state.amount - 1 }));
  };
  render() {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>

        <button type="button" onClick={this.onIncrement}>
          +
        </button>

        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}

const Euro = ({ amount }) => <p> Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p> Pound: {amount * 0.76}</p>;

export default App;
