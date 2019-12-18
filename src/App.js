import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App" >
      <header className="App-header">
        <h1>Chances React Calculator</h1>
        <h2>Now With Improved Memory!</h2>
      </header>
      <div className="wrapper">
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>=</Button>
          <Button>-</Button>
        </div>
      </div>
    </div>)
      ;
  };
};

export default App;
