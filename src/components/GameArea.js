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
          {A1: null, A2: null, A3: null, A4: null},
          {B1: null, B2: null, B3: null, B4: null},
          {C1: null, C2: null, C3: null, C4: null},
          {D1: null, D2: null, D3: null, D4: null}
        ],
        [
          {A1: null, A2: null, A3: null, A4: null},
          {B1: null, B2: null, B3: null, B4: null},
          {C1: null, C2: null, C3: null, C4: null},
          {D1: null, D2: null, D3: null, D4: null}
        ],
        [
          {A1: null, A2: null, A3: null, A4: null},
          {B1: null, B2: null, B3: null, B4: null},
          {C1: null, C2: null, C3: null, C4: null},
          {D1: null, D2: null, D3: null, D4: null}
        ],
        [
          {A1: null, A2: null, A3: null, A4: null},
          {B1: null, B2: null, B3: null, B4: null},
          {C1: null, C2: null, C3: null, C4: null},
          {D1: null, D2: null, D3: null, D4: null}
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