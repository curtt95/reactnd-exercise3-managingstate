import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score.js';
import Game from './Game.js';

class App extends Component {
  
  state = {
   	numQuestions: 0,
    numCorrect: 0
  }

  updateScore = (result) => {
    if (!result) {
      this.setState({
        numQuestions: this.state.numQuestions + 1
      });
    } else {
      this.setState({
        numCorrect: this.state.numCorrect + 1,
        numQuestions: this.state.numQuestions + 1
      });
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>

		  <Game updateScore={this.updateScore}/>
          <Score numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect}/>
        </div>
      </div>
    );
  }
}

export default App;
