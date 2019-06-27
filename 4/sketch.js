/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var current_value;
var count;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;
    current_value = 2;
    count = 0;
    

	// Initialise arrays of scenery objects.
    tree = {
        x_pos: [0.3*width, 0.6*width, 1.2*width, 1.6*width],
        height: 150,
        width: 60,
        y_pos: floorPos_y-150
        // make sure the above property has the same subtracted value as height
    };
    
    
    clouds = {
        x_pos: [0.1*width, 0.4*width, 0.7*width, 1*width,
               1.2*width, 1.5*width, 1.8*width, 2*width,
                2.2*width, 2.3*width, 2.6*width, 3*width],
        y_pos: [(height-floorPos_y)-30]
//                , (height-floorPos_y)-40, (height-floorPos_y)-50, (height-floorPos_y)-20]
    }
    
    mountain = {
        x_pos: [0.1*width, 0.5*width, 1*width, 1.5*width,
               1.6*width, 1.8*width, 2.2*width, 2.5*width, 3*width],
        y_pos: floorPos_y,
        width: 250,
        height: 250
    }
    
    canyons = {
        x_pos: [0.2*width, 0.7*width, 1.3*width, 1.5*width, 1.8*width, 2.2*width, 2.5*width, 2.8*width],
        y_pos: floorPos_y,
        width: 100
    }
    collectable = {
        //making collectables appear only above canyons
        x_pos: canyons.x_pos,
        y_pos: floorPos_y-100,
        size: 5,
        length: 15,
        isFound: false
    }
}

function pushValues() {
    
    var limit = floor(Math.random()*3);
    if( limit == 0 ) limit = 3;
    for(var i=0; i< limit; i++) {
        var randomValue = (Math.random()*10)/10;
        var totalValue = randomValue + Number(current_value);
        mountain.x_pos.push( floor(totalValue*width) );   
        
        randomValue = (Math.random()*10)/10;
        totalValue = randomValue + Number(current_value);
        tree.x_pos.push( floor(totalValue*width) );  
    }

    limit = floor(Math.random()*4);
    if( limit == 0 || limit == 1 ) limit = 2;
    for(var i=0; i< limit; i++) {
        var randomValue = (Math.random()*10)/10;
        var totalValue = randomValue + Number(current_value);
        clouds.x_pos.push( floor(totalValue*width) );   
        
        randomValue = (Math.random()*10)/10;
        totalValue = randomValue + Number(current_value);
        canyons.x_pos.push( floor(totalValue*width) );     
    }
    
}

function draw()
{
	background(100, 155, 255); // fill the sky blue
    
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

    if( count % 100 == 0 ) {
        pushValues();
        ++current_value;
        ++count;
    } else {
        ++count;
    }
    
    push();
    translate(scrollPos, 0);
    
//    pushValues();
    
	// Draw clouds.
    getClouds();

	// Draw mountains.
    getMountains();

	// Draw trees.
    getTrees();

	// Draw canyons
    getCanyons();

	// Draw collectable items
    getColletables();
    
    pop();

	// Draw the game character - this must be last
    showCharacter();

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function getMountains() {
    noStroke();
    fill(121,85,72);
    for(var i=0; i<mountain.x_pos.length; i++) {
        var x1 = mountain.x_pos[i];
        var y = mountain.y_pos;
        var x2 = mountain.x_pos[i] + mountain.width;
        var x3 = (x1+x2)/2;
        var y3 = y-mountain.height;
        
        triangle(x1,y,x2,y,x3,y3);
    }
    
}

function getCanyons() {
    fill(0,0,0);
    for(var i=0; i<canyons.x_pos.length; i++) {
        rect(canyons.x_pos[i],canyons.y_pos,canyons.width, 500);   
    }    
}

function getColletables() {
    push();
    fill(255,255,120);
    for(var i=0; i<canyons.x_pos.length; i++) {
        star(canyons.x_pos[i]+50, collectable.y_pos, collectable.size, collectable.length, 5);    
    }
    pop();
}

function getTrees() {
    for(var i=0; i<tree.x_pos.length; i++){
        fill(120, 100, 40);
        rect(tree.x_pos[i], floorPos_y-150, tree.width, tree.height);

        fill(0, 155, 0);
        triangle(tree.x_pos[i]-100, tree.y_pos, tree.x_pos[i]+150, tree.y_pos, tree.x_pos[i]+40, tree.y_pos-200);
        triangle(tree.x_pos[i]-100, tree.y_pos-50, tree.x_pos[i]+150, tree.y_pos-50, tree.x_pos[i]+40, tree.y_pos-220);
        triangle(tree.x_pos[i]-100, tree.y_pos-100, tree.x_pos[i]+150, tree.y_pos-100, tree.x_pos[i]+40, tree.y_pos-250);
    }
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}

function showCharacter() {
    stroke(0,0,0);
    getBody();
    getHead();
    getLegs();
    getHands();
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

function getClouds() {
    for(var i=0; i<clouds.x_pos.length; i++){
        noStroke();
        fill(224,224,224);
        
        if( i%3 == 0 ) {
            ellipse(clouds.x_pos[i], clouds.y_pos, 85, 70);
            ellipse(clouds.x_pos[i]+50, clouds.y_pos, 100, 100);
            ellipse(clouds.x_pos[i]+100, clouds.y_pos, 100, 120);
        } else if ( i%2 == 0 ) {
            ellipse(clouds.x_pos[i], clouds.y_pos, 85, 70);
            ellipse(clouds.x_pos[i]+50, clouds.y_pos, 100, 90); 
        } else {            
            ellipse(clouds.x_pos[i], clouds.y_pos, 100, 100);
            ellipse(clouds.x_pos[i]+50, clouds.y_pos, 85, 70);
        }
    }
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