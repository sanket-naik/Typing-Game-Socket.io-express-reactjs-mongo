const express=require('express');
const app=express();
const socketio=require('socket.io');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

const QuoteApi = require('./QuoteAPI')
const Game = require('./Models/Game');

mongoose.connect(process.env.MONGO_CONNECT, 
        {useNewUrlParser: true, useUnifiedTopology:true},
        ()=>{ console.log("Connection success")});
// console.log(process.env.MONGO_CONNECT)
const server=app.listen(3500,()=>console.log(`Running in port 3500`));

const io=socketio(server);

io.on('connect', (socket)=>{
        socket.on('create-game',async (nickName)=>{
                try{
                   const QuoteData = await QuoteApi()
                   let game= new Game();
                   game.words = QuoteData;
                   let player ={
                           socketID : socket.id,
                           isPlayerLeader: true,
                           nickName
                   }
                   game.players.push(player)
                   game = await game.save();

                   const gameID = game._id.toString();
                   socket.join(gameID);
                   io.to(gameID).emit('updateGame', game)

                }catch(err){
                        console.log(err)
                }
        })
})