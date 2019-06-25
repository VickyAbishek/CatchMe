/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
//	createCanvas(1024, 576);
    createCanvas(window.innerWidth, window.innerHeight);
}

// clouds color 158, 238, 224

function getClouds() {
    fill(224,224,224);
    ellipse(90, 120, 85, 70);
    ellipse(150, 130, 100, 90);
    ellipse(220, 120, 150, 70);
    
    ellipse(500, 120, 85, 70);
    ellipse(520, 120, 130, 70);
    
    ellipse(880, 120, 85, 70);
    ellipse(950, 130, 100, 90);
}

function draw()
{
	background(100, 130, 255); //fill the sky blue

	noStroke();
//    grass
	fill(0,155,0);
	rect(0, 550, window.innerWidth, 2000);

    getClouds();

//    Mountain
    fill(121,85,72);
    triangle(500, 550, 800, 550, 650, 250);

    
//	Tree    
    fill(120, 100, 40);
    rect(1200, 400, 60, 150);

    fill(0, 155, 0);
    triangle(1100, 400, 1350, 400, 1225, 200);
    triangle(1100, 350, 1350, 350, 1225, 150);
    triangle(1100, 300, 1350, 300, 1225, 100);
    
//  Canyon
    fill(0,0,0);
    rect(100,550,100,500);


//  Collectible
    fill(255,235,59);
    ellipse(300,500,30,30);
    fill(0);
    text("C",295,503);
}
