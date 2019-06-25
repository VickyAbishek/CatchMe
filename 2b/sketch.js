/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;

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

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    canyon = {
        x_pos: 25,
        width: 100
    }
    
    collectable = {
        x_pos: width/2-100,
        y_pos: 380,
        size: 50
    }
    
    mountain = {
        startingBase: treePos_x-150,
        y_pos: floorPos_y,
        endingBase: treePos_x+300
    }
    
    
}

function getClouds() {
    noStroke();
    fill(224,224,224);
    ellipse(90, 120, 85, 70);
    ellipse(150, 130, 100, 90);
    ellipse(220, 120, 150, 70);
    
    ellipse(880, 120, 85, 70);
    ellipse(950, 130, 100, 90);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, width); //draw some green ground
    
    
    //    Mountain
    noStroke();
    fill(121,85,72);
    triangle(mountain.startingBase, mountain.y_pos, mountain.endingBase, mountain.y_pos, 650, 250);
    
    //tree
    fill(120, 100, 40);
    rect(treePos_x, treePos_y, 60, 150);

    fill(0, 155, 0);
    triangle(treePos_x-100, treePos_y, treePos_x+150, treePos_y, treePos_x+40, treePos_y-200);
    triangle(treePos_x-100, treePos_y-50, treePos_x+150, treePos_y-50, treePos_x+40, treePos_y-220);
    triangle(treePos_x-100, treePos_y-100, treePos_x+150, treePos_y-100, treePos_x+40, treePos_y-250);
    
    
    //game character
    stroke(0,0,0);
    getBody();
    getHead();
    getHands();
    getLegs();
    
    //  Canyon
    fill(0,0,0);
    rect(canyon.x_pos,floorPos_y,canyon.width, 500);
    



//  Collectible
    fill(255,235,59);
    ellipse(collectable.x_pos,collectable.y_pos,collectable.size,collectable.size);
    fill(0);
    text("C",collectable.x_pos-3,collectable.y_pos+3);
    
    getClouds();



}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}
