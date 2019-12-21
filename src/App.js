import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
      memory: 0
    };
  }

  addToInput = value => {
    this.setState({ input: this.state.input + value });
  };

  addZeroToInput = value => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + value })
    };
  }

  addDecimal = value => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + value })
    }
  }

  clearInput = () => {
    this.setState({ input: "" })
  }

  add = () => {
    // eslint-disable-next-line
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    // eslint-disable-next-line
    this.state.operator = "plus";
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

    this.setState({ input: this.state.input, memory: parseInt(this.state.memory) + parseInt(this.state.input) })
  }

  memorySub = () => {
    // eslint-disable-next-line
    this.state.memory = this.state.memory - this.state.input;
    this.setState({ input: this.state.input })
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
