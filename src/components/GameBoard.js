import React from 'react';
import './GameBoard.css';

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <ul className="rows">
        <li className="row">
          <ul className="columns">
            <li className="column">x</li>
            <li className="column">x</li>
            <li className="column">x</li>
            <li className="column">x</li>
          </ul>
        </li>
        <li className="row">
          <ul className="columns">
            <li className="column">x</li>
            <li className="column">x</li>
            <li className="column">x</li>
            <li className="column">x</li>
          </ul>
        </li>
        <li className="row">
          <ul className="columns">
            <li className="column">x</li>
            <li className="column">x</li>
            <li className="column">x</li>
            <li className="column">x</li>
          </ul>
        </li>
        <li className="row">
          <ul className="columns">
            <li className="column">x</li>
            <li className="column">x</li>
            <li className="column">x</li>
            <li className="column">x</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default GameBoard;