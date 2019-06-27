/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft = false;
var isFalling = false;
var isPlummeting = false;
var isRight = false;
var isJumping = false;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code

	}
	else if(isLeft)
	{
		// add your walking left code
        stroke(0,0,0);
        getSideHead("left");
        getSideBody();
        getSideHands();
        getSideLegs();
        if( gameChar_x != 20 && gameChar_x > 20 )
        {
            gameChar_x -= 5;    
        }
            

	}
	else if(isRight)
	{
		// add your walking right code
        stroke(0,0,0);
        getSideHead("right");
        getSideBody();
        getSideHands();
        getSideLegs();
        console.log("width" + width + " " + gameChar_x );
        if( gameChar_x != width-20 && gameChar_x < width-20 )
            gameChar_x += 5;

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        console.log("character falling fallig down")
        stroke(0,0,0);
        getBody();
        getHead();
        getJumpingHands();
        getJumpingLegs();
        isFalling = false;

	}
	else
	{
		// add your standing front facing code
        stroke(0,0,0);
        getBody();
        getHead();
        getLegs();
        getHands();

	}
    
    

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if( floorPos_y != gameChar_y ) {
        if( gameChar_y === floorPos_y ) {
            isFalling = false;
        }else {
            gameChar_y += 5;
            isFalling = true;
        }
    } else if(isJumping) {
        if( gameChar_y === floorPos_y )
        {
            gameChar_y -= 50;
        }
    }

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	console.log("keyPressed: " + keyCode);
    switch(keyCode) {
        case 37:isLeft = true;
                break;
        case 39:isRight = true;
                break;
        case 32:isJumping = true;
                break;
    }
    
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + keyCode);
    switch(keyCode) {
        case 37:isLeft = false;
                break;
        case 39:isRight = false;
                break;
        case 32:isJumping = false;
                break;
    }
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
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}