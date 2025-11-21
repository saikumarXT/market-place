import express from 'express';
import cors from 'cors';
import { userRouter } from './controllers/user.js';
import http from 'http';
import { webSocketOnlineServer} from './sockets/socket.js'
import mongoose from 'mongoose';

const app=express();
app.use(express.json());        
app.use(cors());

await mongoose.connect('mongodb+srv://sk:yZfHtxyFzU73NOXv@cluster0.3vp3tpw.mongodb.net/market-place');

const server=http.createServer(app);
webSocketOnlineServer(server);

app.use('/api/v1/user',userRouter);
server.listen(3000,()=>{
    console.log("http://localhost:3000")
})