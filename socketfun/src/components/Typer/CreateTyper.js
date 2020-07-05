import React, { useState } from 'react'
import socket from'../../sockeConfig';

export default function CreateTyper() {

    const[name, setName]= useState("")

    const handleChange=(e)=>{
        setName(e.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        socket.emit('create-game', name)
    }

    return (
        <div>
            <h2>Create Game</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        value={name} 
                        onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
