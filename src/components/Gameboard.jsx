import React from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const Gameboard = ({ onSelectSquare, turns }) => {
    let gameBoard = initialGameBoard;
    for(const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square
        gameBoard[row][col] = player
    }

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
                gameBoard.map((row, rowIdx) => 
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