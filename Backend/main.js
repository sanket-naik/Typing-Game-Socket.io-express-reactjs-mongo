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
                           isPartyLeader: true,
                           nickName
                   }
                   console.log(player)
                   game.players.push(player)
                   game = await game.save();

                   const gameID = game._id.toString();
                   socket.join(gameID);
                   io.to(gameID).emit('updateGame', game)

                }catch(err){
                        console.log(err)
                }
        })

        socket.on('join-game',async ({gameID:_id, nickName})=>{
                try{
                  let game=await Game.findById(_id);

                  if(game.isOpen){
                        const gameID = game._id.toString();
                        socket.join(gameID);

                        let player={
                                socketID:socket.id,
                                nickName
                        }
                        game.players.push(player);
                        game=await game.save();
                        io.to(gameID).emit('updateGame',game);
                  }
                  
                }catch(err){
                        console.log(err)
                }
        })

        socket.on('timer', async({gameID, playerID})=>{
                let countDown = 5;
                let game= await Game.findById(gameID);
                let player = game.players.find(player=>player._id==playerID)
                if(player.isPartyLeader){
                        let timerID = setInterval(async()=>{
                                if(countDown>=0){
                                        io.emit(gameID).emit('timer', {countDown, msg:"Starting game"});
                                        countDown--;
                                }else{
                                        game.isOpen=false;
                                        game= await game.save();
                                        io.to(gameID).emit('updateGame', game)
                                        startGameClock(gameID);
                                        clearInterval(timerID)
                                }
                        }, 1000)
                }
        })
})

const startGameClock=async(gameID)=>{
        let game=await Game.findById(gameID)
        game.startTime =new Date().getTime();
        game = await game.save();
        let time= 120;
        let timerID = setInterval(function gameIntervalFunc(){
                const formatTime = calculateTime(time)
                return gameIntervalFunc;
        }(), 1000)
}