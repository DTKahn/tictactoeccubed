import React from 'react';
import './GameBoard.css';

// Component Imports
import Box from "./Box";

const GameBoard = props => {
  return (
    <div className="GameBoard">
      <ul className="rows">
        <li className="row row1">
          <ul className="columns">
            {props.gameBoards[props.boardNumber][0].map(box => <Box
              player={box}
              column="A"
              row={1}
            />)}
          </ul>
        </li>
        <li className="row row2">
          <ul className="columns">
            {props.gameBoards[props.boardNumber][1].map(box => <Box
              player={box}
              column="A"
              row={2}
            />)}
          </ul>
        </li>
        <li className="row row3">
          <ul className="columns">
            {props.gameBoards[props.boardNumber][2].map(box => <Box
              player={box}
              column="A"
              row={3}
            />)}
          </ul>
        </li>
        <li className="row row4">
          <ul className="columns">
            {props.gameBoards[props.boardNumber][3].map(box => <Box
              player={box}
              column="A"
              row={4}
            />)}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default GameBoard;