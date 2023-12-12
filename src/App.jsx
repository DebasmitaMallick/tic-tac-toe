import { useState } from "react";
import Gameboard from "./components/Gameboard";
import { Player } from "./components/Player";
import { Log } from "./components/Log";

const deriveActivePlayer = (gameTurns) => gameTurns.length > 0 && gameTurns[0].player === 'X' ? 'O' : 'X'

function App() {
  const [gameTurns, setGameTurns] = useState([]);
    
    const activePlayer = deriveActivePlayer(gameTurns);

    const handleSelectSquare = (rowIdx, colIdx) => {

      setGameTurns(prevTurns => { // when you update a state with the help of old state value, always use the previous state

        const currentPlayer = deriveActivePlayer(prevTurns)

        const updatedTurns = 
        [
          { square : { row: rowIdx, col: colIdx },
            player: currentPlayer }, 
            ...prevTurns
        ];
        return updatedTurns;
      });
    }

    return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
          </ol>

          <Gameboard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>

        <Log turns={gameTurns} />
      </main>
    );
}

export default App
