import React from 'react'
import socket from './../../sockeConfig'
import { Redirect } from 'react-router-dom';
import StartBtn from './StartBtn';
import CountDown from './CountDown';
import DisplayWords from './DisplayWords';
import Form from './Form';
import ProgressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';

function TypeRacer({gameState}) {

    const findPlayer=players=>{
        return players.find(player=>player.socketID===socket.id)
    }
    const{_id, players, words, isOpen, isOver}=gameState;
    const player =findPlayer(players)

    if(_id===""){ 
        return <Redirect to="/"/>
    }

    return (
        <div>
            <DisplayWords words={words} player={player}/>
            <ProgressBar players={players} player={player} wordsLength={words.length}/>
            <Form isOpen={isOpen} isOver={isOver} gameID={_id} />
            <CountDown/>
            <StartBtn player={player} gameID={_id} players={players}/>
            <ScoreBoard players={players}/>
        </div>
    )
}

export default TypeRacer
