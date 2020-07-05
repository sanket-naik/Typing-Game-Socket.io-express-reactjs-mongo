import React, { useEffect, useState } from 'react';
import './App.css';
import RouterSocket from './Router';
import socket from './sockeConfig'
import { withRouter } from 'react-router-dom';


function App(props) {

  const [gameState, setGameState] = useState({
          _id:"",
           idOpen:false,
           players:[],
           words:[]})

  useEffect(() => {
    socket.on('updateGame',game=>{
      console.log(game)
      setGameState(game)
    })
  }, [])

  useEffect(() => {
    if(gameState._id!==""){
      props.history.push('/game/'+gameState._id)
    }
    return ()=>{
      socket.removeAllListeners()
    }
  }, [gameState._id])

  return (
    <div className="App">
      <RouterSocket/>
    </div>
  );
}

export default withRouter(App);
