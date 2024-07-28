const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
    }
});

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New user", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('typing', (isTyping) => {
        if (isTyping) {
            socket.broadcast.emit('typing', { name: users[socket.id] });
        } else {
            socket.broadcast.emit('typing', null);
        }
    });

    socket.on('disconnect', () => {
        delete users[socket.id];
    });
});

httpServer.listen(8000);
