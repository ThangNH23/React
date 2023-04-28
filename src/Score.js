import React, { Component } from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
          score1: 0,
          score2: 0,
          avg: 0
        };
      }
    
      myChangeScore1 = (event) => {
        this.setState({ score1: event.target.value });
      }
    
      myChangeScore2 = (event) => {
        this.setState({ score2: event.target.value });
      }
    
      alert_function = () => {
        let a = parseInt(this.state.score1);
        let b = parseInt(this.state.score2);
        let c = (a + b) / 2;
        this.setState({ avg: c });
    
        if(c>= 10){
            alert("Score 1: " + this.state.score1 + "\nScore 2: " + this.state.score2 + "\nAvg score: " + c + "\nGioi");
        }else if(c <= 10 && c >=5){
            alert("Score 1: " + this.state.score1 + "\nScore 2: " + this.state.score2 + "\nAvg score: " + c + "\nTam");
        }else{
            alert("Score 1: " + this.state.score1 + "\nScore 2: " + this.state.score2 + "\nAvg score: " + c + "\nKha");
        }
      }
    
      render() {
        return (
          <div>
            <label>
              <p>Score 1</p>
              <input type='number' min="0" max="10" value={this.state.score1} onChange={this.myChangeScore1} />
            </label>
            <label>
              <p>Score 2</p>
              <input type='number' min="0" max="10" value={this.state.score2} onChange={this.myChangeScore2} />
            </label>
            <button onClick={this.alert_function}>Click here to see your score</button>
          </div>
        );
      }
    }

export default Score;