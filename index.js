const path = require('path');
const express = require('express');  
const app = express(); //ejecutamos express en app
//app contiene la configuración de todo el servidor
//settings
app.set ('port', process.env.PORT || 3000); //SELECT PORT

// static files 
app.use(express.static(path.join(__dirname, 'public')));

// start server
const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});


//websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('new connection', socket.id);

    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message', data);
    });
    socket.on('chat:typing', (data) => {
        socket.broadcast.emit()
    });

});