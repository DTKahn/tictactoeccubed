import React from 'react';
import './GameBoard.css';

// Component Imports
import Box from "./Box";

const getColumn = number => {
  const colName = ["A", "B", "C", "D"]
  return colName[number]
}

const GameBoard = props => {
  return (
    <div className="GameBoard">
      {/* Render One Board */}
      <ul className="rows">
        
        {/* Render Rows */}
        {props.board.map((row, rowNumber) => {
          
          // Render One Row
          return (
            <li className="row">
              <ul className="columns">
                
                {/* Render Each Box in the Row */}
                {row.map((box, columnNumber) => <Box 
                  player={box}
                  column={getColumn(columnNumber)}
                  row={rowNumber + 1}
                  boardNumber={props.boardNumber}
                  rowNumber={rowNumber}
                  columnNumber={columnNumber}
                  handleBoxClick={props.handleBoxClick}
                  playerTurn={props.playerTurn}
                />)}
                {/* End of Render Each Box in the Row */}

              </ul>
            </li>
          )
          // End of Render One Row

        })}
        {/* End of Render Row */}

      </ul>

    </div>
  );
}

export default GameBoard;