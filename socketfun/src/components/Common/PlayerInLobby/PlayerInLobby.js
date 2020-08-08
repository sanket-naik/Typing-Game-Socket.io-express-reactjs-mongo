import React from 'react'
import './PlayerInLobby.css'

export default function PlayerInLobby(props) {
    return (
        <div className="out LobbyPlayers">
            {console.log(props.players)}
        <span>Total Players: </span> <span className="CountLobby">{props.players.length}</span>
        </div>
    )
}
