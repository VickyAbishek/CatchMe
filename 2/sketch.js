/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function getHead(){
    fill(203,205,251);
    ellipse(gameChar_x, gameChar_y-60, 25, 25,255);
    ellipse(gameChar_x+5, gameChar_y-62, 3, 3);
    ellipse(gameChar_x-5, gameChar_y-62, 3, 3);
    ellipse(gameChar_x, gameChar_y-55, 6, 6);
}

function getBody() {
    fill(203,205,251);
    ellipse(gameChar_x, gameChar_y-30, 25,35);
}

function getHands() {
    strokeWeight(5);
    line(gameChar_x+10, gameChar_y-42, gameChar_x+20, gameChar_y-25);
    line(gameChar_x-10, gameChar_y-42, gameChar_x-20, gameChar_y-25);
    strokeWeight(1);
}

function getLegs() {
    strokeWeight(5);
    line(gameChar_x+5, gameChar_y, gameChar_x+5, gameChar_y-12);
    line(gameChar_x-5, gameChar_y, gameChar_x-5, gameChar_y-12);
    strokeWeight(1);
}

function getJumpingLegs() {
    strokeWeight(5);
    line(gameChar_x+15, gameChar_y, gameChar_x+5, gameChar_y-12);
    line(gameChar_x-15, gameChar_y, gameChar_x-5, gameChar_y-12);
    strokeWeight(1);
}

function getJumpingHands() {
    strokeWeight(5);
    line(gameChar_x+10, gameChar_y-42, gameChar_x+20, gameChar_y-55);
    line(gameChar_x-10, gameChar_y-42, gameChar_x-20, gameChar_y-55);
    strokeWeight(1);
}

function getSideBody() {
    fill(203,205,251);
    ellipse(gameChar_x, gameChar_y-30, 10,35);
}

function getSideLegs() {
    getJumpingLegs();
}

function getSideHands() {
    strokeWeight(5);
    line(gameChar_x+5, gameChar_y-42, gameChar_x+20, gameChar_y-25);
    line(gameChar_x-5, gameChar_y-42, gameChar_x-20, gameChar_y-25);
    strokeWeight(1);
}

function getSideHead(direction) {
    fill(203,205,251);
    ellipse(gameChar_x, gameChar_y-60, 15, 20,255);
    //setting default side body eye location as left
    var eye_location = gameChar_x-5;
    if( direction === "right" ) {
        eye_location += 10;
    }
    ellipse(eye_location, gameChar_y-62, 3, 3);
}

function getJumpingBody() {
    ellipse(gameChar_x, gameChar_y-35, 15,30);
}

function getJumpingSideLegs(direction) {
    strokeWeight(5);
    if( direction === "right") {
        line(gameChar_x+15, gameChar_y-10, gameChar_x+5, gameChar_y-20);//right leg
        line(gameChar_x-15, gameChar_y-25, gameChar_x-5, gameChar_y-20);//left leg
    } else if ( direction === "left" ) {
        line(gameChar_x+15, gameChar_y-25, gameChar_x+5, gameChar_y-20);//right leg
        line(gameChar_x-15, gameChar_y-10, gameChar_x-5, gameChar_y-20);//left leg
    }
    
    strokeWeight(1);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
    
    stroke(0,0,0);
    getBody();
    getHead();
    getLegs();
    getHands();
    

	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    
    stroke(0,0,0);
    gameChar_y -= 4;
    getBody();
    getHead();
    getJumpingHands();
    getJumpingLegs();
    

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    
    stroke(0,0,0);
    getSideHead("left");
    getSideBody();
    getSideHands();
    getSideLegs();

	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
    
    stroke(0,0,0);
    getSideHead("right");
    getSideBody();
    getSideHands();
    getSideLegs();


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
    
    stroke(0,0,0);
    gameChar_y -= 4;
    getJumpingHands();
    getSideHead("right");
    getJumpingBody();
    getJumpingSideLegs("right");


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    
    stroke(0,0,0);
    gameChar_y -= 4;
    getJumpingHands();
    getSideHead("left");
    getJumpingBody();
    getJumpingSideLegs("left");

}
