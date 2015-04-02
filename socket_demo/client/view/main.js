console.log("View");

var socket = io();

socket.on('button clicked', function(data){
	console.log(data);
	$('h3').append(data);
});

socket.on('mouse move', function(data){
	var square = document.createElement("div");
	$(square).css("position", "absolute");
	$(square).css("left", data.x);
	$(square).css("top", data.y);
	$(square).css("width", "10px");
	$(square).css("height", "10px");
	$(square).css("background", 'red');
	$('body').append(square);
	
});
