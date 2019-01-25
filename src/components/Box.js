import React, { Component } from 'react';
import './Box.css';

const Box = props => {
  return (
    <li 
      className={"box " + props.player} 
      onClick={() => props.handleBoxClick(props.boardNumber, props.rowNumber, props.columnNumber, props.playerTurn)}
    >
      {props.column + props.row}
    </li>
  );
}

export default Box;