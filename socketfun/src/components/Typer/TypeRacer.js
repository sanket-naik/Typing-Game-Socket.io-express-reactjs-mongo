import React from 'react'
import socket from './../../sockeConfig'
import { Redirect } from 'react-router-dom';
import StartBtn from './StartBtn';
import CountDown from './CountDown';

function TypeRacer({gameState}) {

    const findPlayer=players=>{
        return players.find(player=>player.socketID===socket.id)
    }
    const{_id, players}=gameState;
    const player =findPlayer(players)

    if(_id===""){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <CountDown/>
            <StartBtn player={player} gameID={_id}/>
        </div>
    )
}

export default TypeRacer
