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
console.log(process.env.MONGO_CONNECT)
const server=app.listen(3500,()=>console.log(`Running in port 3500`));
const io=socketio(server);