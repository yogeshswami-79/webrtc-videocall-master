const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const PORT = 3000 || process.env.PORT;

// create http server
const server = http.createServer(app);

//set static folder 
app.use(express.static(path.join(__dirname, 'socket')));

//initialize io
const io = socketio(server);

io.on("connection", (socket) => {
    socket.on("msg",data => {
        socket.broadcast.emit("message", data);
        // io.emit("message", data);
    })
})

server.listen(PORT, () => console.log(`listening on port ${PORT}`))