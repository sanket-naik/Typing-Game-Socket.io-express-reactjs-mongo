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
                   game.players.push(player)
                   game = await game.save();

                   const gameID = game._id.toString();
                   socket.join(gameID);
                   io.to(gameID).emit('updateGame', game)
                   console.log("Game created")

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
                        console.log("one",game)
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
                                        console.log("tiemr end")
                                        game.isOpen=false;
                                        game= await game.save();
                                        console.log("two",game)
                                        io.to(gameID).emit('updateGame', game)
                                        startGameClock(gameID);
                                        clearInterval(timerID)
                                }
                        }, 1000)
                }
        })

        socket.on('userInput', async({userInput, gameID})=>{
                try{
                  let game=await Game.findById(gameID)
                  if(!game.isOpen && !game.isOver){
                        let player = game.players.find(player=>player.socketID===socket.id);
                        let word = game.words[player.currentWordIndex];
                        if(word== userInput){
                                player.currentWordIndex++;
                                if(player.currentWordIndex!==game.words.length){
                                        game=await game.save();
                                        io.to(gameID).emit("updateGame", game);
                                }else{
                                        let endTime =new Date().getTime()
                                        let {startTime}=game;
                                        player.WPM =calculateWPM(endTime, startTime, player);
                                        game=await game.save();
                                        socket.emit('done');
                                        io.emit("updateGame", game)
                                }
                        }
                  }
                }catch{
                        console.log(err)
                }
        })
})

const startGameClock=async(gameID)=>{
        let game=await Game.findById(gameID)
        game.startTime =new Date().getTime();
        game = await game.save();
        let time= 5;
        let timerID = setInterval(function gameIntervalFunc(){
                const formatTime = calculateTime(time)
                if(time>=0){
                        io.to(gameID).emit('timer', {countDown: formatTime, msg: "Time Remaning"});
                        time--;
                }else{
                       (async ()=>{
                        let endTime = new Date().getTime();
                        let game = await Game.findById(gameID)
                        let {startTime}= game;
                        game.isOver=true;
                        game.players.forEach((player, index)=>{
                                if(player.WPM===-1){
                                        game.players[index].WPM = calculateWPM(endTime, startTime, player)
                                }
                        })
                        game=await game.save();
                        console.log("three",game)
                        io.to(gameID).emit('updateGame', game);
                        clearInterval(timerID)
                       })()
                }
                return gameIntervalFunc;
        }(), 1000)
}

const calculateTime=(time)=>{
        let min= Math.floor(time/60);
        let seconds= time % 60;
        return `${min}:${seconds<10?"0"+seconds : seconds}`
}

const calculateWPM=(endTime, startTime, player)=>{
        let numOfWords = player.currentWordIndex;
        const timeInSeconds =(endTime - startTime)/1000;
        const timeInMinutes = timeInSeconds/60;
        const WPM= Math.floor(numOfWords/timeInMinutes);
        return WPM
}