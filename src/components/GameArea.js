import React, { Component } from 'react';

// Component Imports
import GameBoard from "./GameBoard";

class GameArea extends Component {
  constructor(){
    super();
    this.state = {
      playerTurn : "player1",
      // gameBoards : [
      //   [
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null]
      //   ],
      //   [
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null]
      //   ],
      //   [
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null]
      //   ],
      //   [
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null],
      //     [null, null, null, null]
      //   ]
        gameBoards : [
          [
            ["P1", null, null, null],
            [null, "P1", null, null],
            [null, null, "P2", null],
            [null, null, null, "P1"]
          ],
          [
            [null, null, null, null],
            ["P2", null, null, null],
            [null, null, null, null],
            [null, null, null, "P2"]
          ],
          [
            [null, null, "P2", null],
            [null, null, "P2", null],
            ["P1", null, null, null],
            [null, null, "P2", null]
          ],
          [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            ["P1", null, null, "P1"]
          ]
      ]
    }
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