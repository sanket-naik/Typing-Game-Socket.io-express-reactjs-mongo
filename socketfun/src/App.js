import React, { useEffect, useState } from 'react';
import './App.css';
import RouterSocket from './Router';
import socket from './sockeConfig'
import { withRouter } from 'react-router-dom';
import './neumorphism/styles.css'
import StartBtn from './components/Typer/StartBtn';

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
    return ()=>{
      socket.removeAllListeners()
    }
  }, [])

  useEffect(() => {
    if(gameState._id!==""){
      props.history.push('/typer/game/'+gameState._id)
    }
  }, [gameState._id])

  return (
    <div className="App">
      <RouterSocket {...props} gameState={gameState}/>
    </div>
  );
}

export default withRouter(App);
