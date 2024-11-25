import {WebSocketServer,WebSocket} from "ws";
import express from 'express';

const app = express();
const httpServer = app.listen(3000);

const wss = new WebSocketServer({server:httpServer});

wss.on('connection',(socket)=>{

    socket.on('error',(error)=>{
        console.log(error);
    })

    socket.on('message',(data,isBinary)=>{
        socket.send(data,{binary:isBinary})
    })

})