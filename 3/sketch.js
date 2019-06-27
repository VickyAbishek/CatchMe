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
var isFound = false;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    canyon = {
        x_pos: 100,
        width: 100,
        height: 500
    }
    
    collectable = {
        x_pos: canyon.x_pos + 50,
        y_pos: floorPos_y-100,
        size: 5,
        length: 15,
        isFound: false
    }
    
//    mountain = {
//        startingBase: treePos_x-150,
//        y_pos: floorPos_y,
//        endingBase: treePos_x+300
//    }
}

function isGrounded() {
    var result = false;
    if( gameChar_y === floorPos_y ) {
        return true;
    }
    return result;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue

	noStroke();
//    stroke(0,0,0);
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    fill(160,82,45);
    rect(canyon.x_pos,floorPos_y,canyon.width,canyon.height);
    
    
    checkPlummeting();

	//the game character
	if(isLeft && isFalling)
	{
        if( isGrounded() ) isFalling=false;
        
		// add your jumping-left code
        stroke(0,0,0);
        getJumpingHands();
        getSideHead("left");
        getJumpingBody();
        if(gameChar_y )
        getJumpingSideLegs("left");
        if( gameChar_x != 20 && gameChar_x > 20 )
        {
            gameChar_x -= 5;
        }
	}
	else if(isRight && isFalling)
	{
        if( isGrounded() ) isFalling=false;
        
		// add your jumping-right code
        stroke(0,0,0);
        getJumpingHands();
        getSideHead("right");
        getJumpingBody();
        if( isGrounded() ) {
            getSideLegs();
        }else {
            getJumpingSideLegs("right");    
        }
        
        if( gameChar_x != width-20 && gameChar_x < width-20 )
        {
            gameChar_x += 5;
        }
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
        if( gameChar_x != width-20 && gameChar_x < width-20 )
        {
            gameChar_x += 5;
        }
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        stroke(0,0,0);
        getBody();
        getHead();
        getJumpingHands();
        getJumpingLegs();
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
    
    
//    Disected into several functions, to avoid clumpy code
    fallingDown();
    jumpCharacter();
    displayCollectable();

}

function checkPlummeting() {
    if( gameChar_x >= canyon.x_pos && 
       gameChar_x <= canyon.x_pos+canyon.width &&
       gameChar_y == floorPos_y) {
        isPlummeting = true;
    } else {
        isPlummeting = false;
    }
}

function displayCollectable() {
    if( !collectable.isFound ) {
        getCollectable();
    }
    
    if( abs(gameChar_x-collectable.x_pos) <= 25 && abs(gameChar_y-collectable.y_pos) <= 55) {
        collectable.isFound = true;
    }
}

function jumpCharacter() {
    if(isJumping) {
        if( gameChar_y === floorPos_y )
        {
            gameChar_y -= 80;
        }   
    }
}

function fallingDown() {
    if( floorPos_y != gameChar_y ) {
        var rateOfDrop = 2;
        gameChar_y += rateOfDrop;
        isFalling = true;
    } else if( isPlummeting && floorPos_y == gameChar_y ) {
        isFalling = false;
        var rateOfDrop = 15;
        gameChar_y += rateOfDrop;
    } else {
        isFalling = false;
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

function getCollectable() {
    push();
    fill(255,255,120);
//    translate(width*0.1, height*0,1);
//    rotate(frameCount / -100.0);
    star(collectable.x_pos, collectable.y_pos, collectable.size, collectable.length, 5);
    pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}