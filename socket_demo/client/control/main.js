console.log("Control");

var socket = io();

$('button').click(function(e){
	console.log(e.currentTarget.id);
	socket.emit('button clicked', e.currentTarget.id);
});
$('body').mousemove(function(e){
	sendDrawPos(e);
});
$('body').bind('touchmove', function(e){
	e.preventDefault();
	sendDrawPos(e);
});

function sendDrawPos(e){
	socket.emit('mouse move', { 
		x : e.pageX ? e.pageX : e.originalEvent.touches[0].pageX, 
		y : e.pageY ? e.pageY : e.originalEvent.touches[0].pageY
	})
}
