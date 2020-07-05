import React, { useState } from 'react'
import socket from'./../../sockeConfig'

function StartBtn({player, gameID}) {

    const[showBtn, setShowBtn]=useState(true)
    const{isPartyLeader}=player;

    const handleClick=(e)=>{
        socket.emit('timer', {playerID : player._id, gameID});
        setShowBtn(false)
    }
    return (
       (isPartyLeader && showBtn) ? <button 
                                        onClick={handleClick}>Start Game</button>
                                        :null
                                        // <span>Please wait <b>admin</b> should start the game</span>
                                    
    )
}

export default StartBtn
