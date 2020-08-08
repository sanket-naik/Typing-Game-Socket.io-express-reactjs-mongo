import React, { useState, useEffect } from 'react'
import socket from './../../sockeConfig'

function CountDown() {

    const [timer, setTimer] = useState({countdown:"", msg:""})

    useEffect(() => {
       socket.on('timer',(data)=>{
           setTimer(data);
           console.log(data)
       })
       socket.on('done',()=>{
           socket.removeListener('timer')
       })
    }, [])

    const {countDown, msg}=timer;

    return (
        <div>
            <h3>{countDown}</h3>
            <h4>{msg}</h4>
        </div>
    )
}

export default CountDown
