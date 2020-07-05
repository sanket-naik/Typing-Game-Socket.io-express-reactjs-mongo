import React, { useState } from 'react'
import socket from'../../sockeConfig';

export default function JoinTyper() {

    const[userInput, setUserInput]= useState({gameID:"", nickName:''})

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setUserInput({...userInput, [name]:value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        socket.emit('join-game', userInput)
    }

    return (
        <div>
            <h2>Enter Game</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="gameID"
                        placeholder="Enter game ID" 
                        value={userInput.gameID} 
                        onChange={handleChange}/>
                </div>
                <div>
                    <input 
                        type="text" 
                        name="nickName"
                        placeholder="Enter name" 
                        value={userInput.nickName} 
                        onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
