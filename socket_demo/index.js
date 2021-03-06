// Socket Demo | Server

var express = require('express');
var path = require('path');
var app = express(); // the main app
var http = require('http').Server(app);
var io = require('socket.io')(http);

var control = express(); // Control Panel Sub App
var view = express(); // Patient Sub App

app.use(express.static(path.join(__dirname, 'client')));
control.get('/', function (req, res) {
  res.sendFile('./client' + control.mountpath + "/");
})

view.get('/', function (req, res) {
  res.sendFile('./client' + view.mountpath + "/");
})

app.use('/view', view); // mount the sub app
app.use('/control', control); // mount the sub app

// Socket Setup
io.on('connection', function(socket){
  console.log("user connected");
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('button clicked', function(data){
    console.log('Button ID: ' + data);
    // Send that to view
    // socket.broadcast.emit send it to all connected clients except this one
    socket.broadcast.emit('button clicked', data);
  });
  socket.on('mouse move', function(data){
    socket.broadcast.emit('mouse move', data);
  });
})


http.listen(3000, function(){
  console.log('listening on *:3000');
});
