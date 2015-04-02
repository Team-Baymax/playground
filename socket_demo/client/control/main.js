console.log("Control");

var socket = io();

$('button').click(function(e){
	console.log(e.currentTarget.id);
	socket.emit('button clicked', e.currentTarget.id);
});
