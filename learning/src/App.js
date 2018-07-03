import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TIC - TAC - TOE GAME IN  REACT</h1>
        </header>
        <p>
          What is React?<br />
          React is declarative, efficient and flexible JS library for building user interfaces.
        </p>
        <p>
        To “remember” things, components use <b>state</b>.
        </p>
        <p>
        To collect data from multiple children, or to have two child components communicate with each other, 
        you need to declare the shared state in their parent component instead. 
        The parent component can pass the state back down to the children by using props; 
        this keeps the child components in sync with each other and with the parent component.
        </p>
        
        <div className="game-pos">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
