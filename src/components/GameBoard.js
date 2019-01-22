import React from 'react';
import './GameBoard.css';

// Component Imports
import Box from "./Box";

const GameBoard = () => {
  return (
    <div className="GameBoard">
      <ul className="rows">
        <li className="row row1">
          <ul className="columns">
            <Box player="player1" column="A" row="1"/>
            <Box player="null" column="A" row="2"/>
            <Box player="null" column="A" row="3"/>
            <Box player="player2" column="A" row="4"/>
          </ul>
        </li>
        <li className="row row2">
          <ul className="columns">
            <Box player="null" column="B" row="1" />
            <Box player="null" column="B" row="2" />
            <Box player="null" column="B" row="3" />
            <Box player="null" column="B" row="4" />
          </ul>
        </li>
        <li className="row row3">
          <ul className="columns">
            <Box player="null" column="C" row="1" />
            <Box player="null" column="C" row="2" />
            <Box player="player1" column="C" row="3" />
            <Box player="player2" column="C" row="4" />
          </ul>
        </li>
        <li className="row row4">
          <ul className="columns">
            <Box player="player1" column="D" row="1" />
            <Box player="player2" column="D" row="2" />
            <Box player="player2" column="D" row="3" />
            <Box player="player1" column="D" row="4" />
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default GameBoard;