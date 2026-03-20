const { Server } = require('socket.io');

// Initialize Socket.io
const io = new Server();

// Event handler for a new connection
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Event handler for chat messages
    socket.on('chat message', (msg) => {
        console.log(`Message received: ${msg}`);
        // Broadcast the message to all connected clients
        io.emit('chat message', msg);
    });

    // Event handler for disconnect
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

module.exports = io;