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
      // gameBoards : [
      //   [
      //     ["P1", null, null, null],
      //     [null, "P1", null, null],
      //     [null, null, "P2", null],
      //     [null, null, null, "P1"]
      //   ],
      //   [
      //     [null, null, null, null],
      //     ["P2", null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, "P2"]
      //   ],
      //   [
      //     [null, null, "P2", null],
      //     [null, null, "P2", null],
      //     ["P1", null, null, null],
      //     [null, null, "P2", null]
      //   ],
      //   [
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     ["P1", null, null, "P1"]
      //   ]
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

  componentDidMount(){
    // Test
    // this.handleBoxClick(0, 0, 2, "P1")
    // this.handleBoxClick(0, 0, 3, "P2")
    // this.handleBoxClick(1, 2, 2, "P1")
    // this.handleBoxClick(0, 0, 0, "P2")
    // this.handleBoxClick(3, 2, 1, "P1")
    // this.handleBoxClick(2, 2, 0, "P2")
    // this.handleBoxClick(0, 3, 2, "P1")
    // this.handleBoxClick(1, 0, 1, "P2")
    // this.handleBoxClick(0, 1, 3, "P1")
    // this.handleBoxClick(2, 1, 3, "P2")
  }

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