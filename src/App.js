import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      previousNumber: 0,
      currentNumber: 0,
      operator: "",
      memory: 0
    };
  }

  addToInput = value => {
    this.setState({ input: value });
  };


  // addToInput = value => {
  //   if (this.state.input !== 0) {
  //     this.setState({ input: this.state.input + value })
  //   } else {
  //     this.setState({ input: value });
  //   };
  // }


  addZeroToInput = value => {
    if (this.state.input !== 0) {
      this.setState({ input: this.state.input + value })
    };
  }

  addDecimal = value => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + value })
    }
  }

  clearInput = () => {
    this.setState({ input: 0, previousNumber: 0, currentNumber: 0 })
  }

  // Chance, 12/31- Current UI bug, now it displays the operations, but only preforms the first operator action, not any other operations after. Also, need to follow current changes to constructor ie input is no longer a string in all other functions that currently are checking for input to be "" instead of zero

  add = () => {
    // eslint-disable-next-line
    this.setState({
      previousNumber: this.state.input,
      operator: "plus",
    }, (prevState) => {
      this.setState({
        input: prevState.previousNumber + prevState.input,
      })
    })
    // this.state.previousNumber = this.state.input;

    // this.setState({ input: `${this.state.previousNumber} + ` });
    // eslint-disable-next-line
    // this.state.operator = "plus";
  }

  subtract = () => {
    // eslint-disable-next-line
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    // eslint-disable-next-line
    this.state.operator = "subtract";
  }

  divide = () => {
    // eslint-disable-next-line
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    // eslint-disable-next-line
    this.state.operator = "divide";
  }

  multiply = () => {
    // eslint-disable-next-line
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    // eslint-disable-next-line
    this.state.operator = "multiply";
  }
  memoryClear = () => {
    this.setState({ memory: 0 });
  }

  memoryRecall = () => {
    // eslint-disable-next-line
    this.state.input = this.state.memory;
    this.setState({ input: this.state.input });
  }

  memoryAdd = () => {
    console.log('memory', this.state.memory, 'input', this.state.input);

    this.setState({ input: 0, memory: parseFloat(this.state.memory) + parseFloat(this.state.input) })
  }

  memorySub = () => {
    console.log('memory', this.state.memory, 'input', this.state.input);
    // eslint-disable-next-line
    this.state.memory = this.state.memory - this.state.input;
    this.setState({ input: 0 })
  }

  sqrt = () => {
    this.setState({ memory: 0 });
  }

  squared = () => {
    this.setState({ memory: 0 });
  }

  pie = () => {
    this.setState({ memory: 0 });
  }

  roman = () => {
    this.setState({ memory: 0 });
  }

  evaluate = () => {
    // eslint-disable-next-line
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({ input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber) })
    } else if (this.state.operator === "subtract") {
      this.setState({ input: parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber) })
    } else if (this.state.operator === "divide") {
      this.setState({ input: parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber) })
    } else if (this.state.operator === "multiply") {
      this.setState({ input: parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber) })
    }
  };


  render() {
    return (<div className="App" >
      <div className="wrapper">
        <div className="row">
          <Input>{this.state.input}</Input>
        </div>
        <div className="row">
          <Button handleClick={this.sqrt}>√</Button>
          <Button hendleClick={this.squared}>x^2</Button>
          <Button handleClick={this.pie}>π</Button>
          <Button handleClick={this.roman}>III</Button>
        </div>
        <div className="row">
          <Button handleClick={this.memoryClear}>MC</Button>
          <Button handleClick={this.memoryRecall}>MR</Button>
          <Button handleClick={this.memoryAdd}>M+</Button>
          <Button handleClick={this.memorySub}>M-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.divide}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.evaluate}>=</Button>
          <Button handleClick={this.subtract}>-</Button>
        </div>
        <div className='row'><ClearButton handleClear={this.clearInput}>Clear</ClearButton></div>
      </div>
    </div>)
      ;
  };
};

export default App;
