let last_touched;
let prevX = -1; 
let prevY = -1;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);

}

function keyPressed() {

}


function mouseDragged() {

	drawPoint(mouseX, mouseY);
	last_touched = millis();
		
}


function drawPoint(x,y){
	if(prevX > 0 ){
		line(prevX, prevY, x, y);
		//ellipse(x, y, 10 + sin( frameCount * 0.1) * 5, 10 + sin( frameCount * 0.1) * 5);
	}
	prevX = x;
	prevY = y;
	//console.log(x,y);
}

function drawTouches() {
	noStroke();
	fill(255, 192);

	for (var i = 0; i < touches.length; i++) {
		drawPoint(touches[i].x, touches[i].y);
		//scatter();

	}
	last_touched = millis();
		

}


function draw() {

	if (touches.length > 0) {
		drawTouches();
	}

	if(millis() - last_touched > 500){
		prevX = -1;
		prevY = -1;
	}

	//console.log(count);	
}