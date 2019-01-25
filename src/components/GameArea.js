import React, { Component } from 'react';

// Component Imports
import GameBoard from "./GameBoard";

class GameArea extends Component {
  constructor(){
    super();
    this.state = {
      playerTurn : "player1",
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

  handleBoxClick = (board, col, row, player) => {
    let gameBoardsCopy = [...this.state.gameBoards];

    gameBoardsCopy[board][col][row] = player;

    this.setState({gameBoards : gameBoardsCopy});
  }

  componentDidMount(){
    // Test
    this.handleBoxClick(0, 0, 2, "P1")
    this.handleBoxClick(0, 0, 3, "P2")
    this.handleBoxClick(1, 2, 2, "P1")
    this.handleBoxClick(0, 0, 0, "P2")
    this.handleBoxClick(3, 2, 1, "P1")
    this.handleBoxClick(2, 2, 0, "P2")
    this.handleBoxClick(0, 3, 2, "P1")
    this.handleBoxClick(1, 0, 1, "P2")
    this.handleBoxClick(0, 1, 3, "P1")
    this.handleBoxClick(2, 1, 3, "P2")
  }

  render() {
    return (
      <div className="gameArea">
        <GameBoard boardNumber={0} gameBoards={this.state.gameBoards}/>
        <GameBoard boardNumber={1} gameBoards={this.state.gameBoards}/>
        <GameBoard boardNumber={2} gameBoards={this.state.gameBoards}/>
        <GameBoard boardNumber={3} gameBoards={this.state.gameBoards}/>
      </div>
    );
  }
}

export default GameArea;