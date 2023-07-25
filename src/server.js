import { Express } from 'express';

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // 시그널링 데이터를 수신하고 모든 연결된 클라이언트들에게 전달
    socket.on('signal', (data) => {
        io.emit('signal', data);
    });

    // 사용자가 연결을 끊을 때 처리
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
