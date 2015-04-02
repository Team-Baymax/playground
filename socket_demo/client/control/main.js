console.log("Control");

var socket = io();

$('button').click(function(e){
	console.log(e.currentTarget.id);
	socket.emit('button clicked', e.currentTarget.id);
});
$('body').mousemove(function(e){
	console.log({ x:e.pageX, y:e.pageY });
	socket.emit('mouse move', { x:e.pageX, y:e.pageY })
});
