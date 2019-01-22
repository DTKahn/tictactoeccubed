import React from 'react';

// Component Imports
import GameBoard from "./GameBoard";

const GameArea = () => {
  return (
    <div className="gameArea">
      <GameBoard />
      <GameBoard />
      <GameBoard />
      <GameBoard />
    </div>
  );
}

export default GameArea;