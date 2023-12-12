import React, { useState } from 'react'

export const Player = ({initialName, symbol, isActive}) => {
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    const handleEditClick = () => {
        setIsEditing((editable) => !editable)
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {
                    !isEditing ?
                    <span className="player-name">{playerName}</span> :
                    <input type="text" required value={playerName} onChange={handleChange} />
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {!isEditing ? "Edit" : "Save"}
            </button>
        </li>
    )
}
