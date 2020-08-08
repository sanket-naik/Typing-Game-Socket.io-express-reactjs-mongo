import React, { useState, useRef } from 'react'
import socket from '../../sockeConfig'
import { useEffect } from 'react'

export default function Form({isOpen, isOver, gameID }) {

    const[userInput, setUserInput]=useState("")
    const textInput=useRef(null)

    useEffect(() => {
        if(!isOpen){
            textInput.current.focus()
        }
    }, [isOpen])

    const resetForm=()=>{setUserInput("")}

    const HandleChange=(e)=>{
        const{value}=e.target;
        let lastChar = value.charAt(value.length-1)
        if(lastChar === " "){
            socket.emit("userInput", {userInput, gameID});
            resetForm()
        }else{
            setUserInput(value)
        }
    }

    return (
        <div>
             <form >
                 {console.log(isOpen, isOver)}
                <input type="text" readOnly={isOpen || isOver} ref={textInput} onChange={HandleChange} value={userInput} />
             </form>
        </div>
    )
}
