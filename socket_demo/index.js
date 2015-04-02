// var app = require('express')();
// var http = require('http').Server(app);
// 
// app.get('/view', function(req, res){
// 	console.log(req.url);
//   res.sendFile(__dirname + '/client' + req.url);
// });
// 
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });


var express = require('express');
var path = require('path');
var io = require('socket.io');

var app = express(); // the main app
var http = require('http').Server(app);
var control = express();
var view = express();

app.use(express.static(path.join(__dirname, 'client')));
control.get('/', function (req, res) {
  res.sendFile('./client' + control.mountpath + "/");
})

view.get('/', function (req, res) {
  res.sendFile('./client' + view.mountpath + "/");
})

app.use('/view', view); // mount the sub app
app.use('/control', control); // mount the sub app

http.listen(3000, function(){
  console.log('listening on *:3000');
});
