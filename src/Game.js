import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
   	super(props); 
    
    const newGameArr = this.newGame();
    
    this.state = {
      value1: newGameArr[0],
      value2: newGameArr[1],
      value3: newGameArr[2],
      proposedAnswer: newGameArr[3]
    }
  }
  
  newGame = () => {
   	const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    
    return [value1, value2, value3, proposedAnswer];
  }
  
  evaluateAnswer = () => {
    const correctanswer = this.state.value1 + this.state.value2 + this.state.value3;
    return correctanswer;
  }

	handleAnswerTrue = () => {
     	const correctans = this.handleAnswer();
      const userans = (correctans === true);
      
      this.props.updateScore(userans);
    }

	handleAnswerFalse = () => {
     const correctans = this.handleAnswer();
      const userans = (correctans === false);
      
      this.props.updateScore(userans);
    }

  handleAnswer = () => {
		const correctanswer = this.evaluateAnswer();
      	const gameanswer = (correctanswer === this.state.proposedAnswer);
      	
      	const newGameArr = this.newGame();
        this.setState({
          value1: newGameArr[0],
          value2: newGameArr[1],
          value3: newGameArr[2],
          proposedAnswer: newGameArr[3]
        })
    
    return gameanswer;
  }
  
 	render() {
     	return (
          <div>
        	<div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
            </div>
            <button
              onClick={this.handleAnswerTrue}>True</button>
            <button
              onClick={this.handleAnswerFalse}>False</button>
			</div>
        ); 
    }
}

export default Game