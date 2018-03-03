var socket;

function setup() {
  createCanvas(600,600);
  background(51);
  socket=io.connect('http://localhost:3000');
  socket.on('mouse',newDrawing);

}

function newDrawing(data){
	noStroke();
 	fill(255,10,100);
 	ellipse(data.x,data.y,15,15);
}

function mouseDragged(){

	console.log(mouseX,mouseY);
	var data={
		x : mouseX,
		y : mouseY
	}
	socket.emit('mouse',data);
	noStroke();
 	fill(100);
 	ellipse(mouseX,mouseY,15,15);
}
function draw() {
  
}