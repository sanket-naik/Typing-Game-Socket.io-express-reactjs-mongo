import React, { useState } from 'react'
import socket from'../../sockeConfig';
import Button from '../../neumorphism/Button/Button';
import Input from '../../neumorphism/Input/Input';
import './Typer.css'

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
            <div className="GameMenu ManuDiv">
            <div className="Headings HeadMain" style={{marginBottom:'50px'}}>Create Game</div>
            <div className="">
                <form onSubmit={onSubmit}>
                    <div>
                        <Input 
                            iconSize="15px"
                            placeholder="Please Enter name.." 
                            icon="https://res.cloudinary.com/dlmozkbdc/image/upload/v1596797560/Socket/Group_5_1_uay1gg.svg"
                            className="CreateGameInput"
                            value={name} 
                            onChange={handleChange}/>
                    </div>
                    <Button style={{marginTop:"20px"}}>Submit</Button>
                </form>
           </div>
           </div>
        </div>
    )
}
