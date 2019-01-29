import React, { Component } from 'react';

// Component Imports
import GameBoard from "./GameBoard";

class GameArea extends Component {
  constructor(){
    super();
    this.state = {
      playerTurn : "P1",
      gameBoards : [
        [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null]
        ],
        [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null]
        ],
        [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null]
        ],
        [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null]
        ]
      ]
    }
  }

  handleBoxClick = (board, row, col, player) => {
    let gameBoardsCopy = [...this.state.gameBoards];

    if (gameBoardsCopy[board][row][col] === null) {
      gameBoardsCopy[board][row][col] = player;

      let nextPlayer = "P1";
      if (this.state.playerTurn === "P1") {

        nextPlayer = "P2";
      }

      this.setState({
        gameBoards : gameBoardsCopy,
        playerTurn : nextPlayer
      });
    }
  }

  // componentDidMount(){

  // }

  render() {
    return (
      <div className="gameArea">
        {/* Render each game board */}
        {this.state.gameBoards.map((board, boardNumber) => <GameBoard 
          boardNumber={boardNumber} 
          gameBoards={this.state.gameBoards}
          board={board}
          handleBoxClick={this.handleBoxClick}
          playerTurn={this.state.playerTurn}
        />)}
      </div>
    );
  }
}

export default GameArea;