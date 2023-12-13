import React from 'react';

const Gameboard = ({ onSelectSquare, board }) => {
    console.log('gameboard');

    // const handleSelectSquare = (rowIdx, colIdx) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
    //         updatedGameBoard[rowIdx][colIdx] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

    
    return (
        <ol id='game-board'>
            {
                board.map((row, rowIdx) => 
                    <li key={rowIdx}>
                        <ol>
                            {
                                row.map((playerSymbol, colIdx) => 
                                    <li key={colIdx}>
                                        <button onClick={() => onSelectSquare(rowIdx, colIdx)} disabled={playerSymbol}>{playerSymbol}</button>
                                    </li>
                                )
                            }
                        </ol>
                    </li>
                )
            }
        </ol>
    )
}

export default Gameboard