console.log("View");

var socket = io();

socket.on('button clicked', function(data){
	console.log(data);
	$('h3').append(data);
});
