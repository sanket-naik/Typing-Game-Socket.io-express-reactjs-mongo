import React, { useState } from 'react'
import socket from'../../sockeConfig';
import Input from '../../neumorphism/Input/Input';
import Button from '../../neumorphism/Button/Button';

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
        // <div>
        //     <h2>Enter Game</h2>
        //     <form onSubmit={onSubmit}>
        //         <div>
        //             <input 
        //                 type="text" 
        //                 name="gameID"
        //                 placeholder="Enter game ID" 
        //                 value={userInput.gameID} 
        //                 onChange={handleChange}/>
        //         </div>
        //         <div>
        //             <input 
        //                 type="text" 
        //                 name="nickName"
        //                 placeholder="Enter name" 
        //                 value={userInput.nickName} 
        //                 onChange={handleChange}/>
        //         </div>
        //         <button type="submit">Submit</button>
        //     </form>
        // </div>
        
        <div>
            <div className="GameMenu ManuDiv">
            <div className="Headings HeadMain" style={{marginBottom:'50px'}}>Enter Game</div>
            <div className="">
                <form onSubmit={onSubmit}>
                    <div>
                        <Input 
                            icon="https://res.cloudinary.com/dlmozkbdc/image/upload/v1596807995/Socket/Group_5_2_ew8t5m.svg"
                            className="CreateGameInput"
                            iconSize="22px"
                            name="gameID"
                            placeholder="Enter game ID" 
                            value={userInput.gameID} 
                            onChange={handleChange}/>
                    </div>
                    <div>
                        <Input
                            icon="https://res.cloudinary.com/dlmozkbdc/image/upload/v1596797560/Socket/Group_5_1_uay1gg.svg" 
                            name="nickName"
                            iconSize="15px"
                            placeholder="Enter name" 
                            className="CreateGameInput"
                            value={userInput.nickName} 
                            onChange={handleChange}/>
                    </div>
                    <Button style={{marginTop:"20px"}}>Submit</Button>
                </form>
           </div>
           </div>
        </div>
    )
}
