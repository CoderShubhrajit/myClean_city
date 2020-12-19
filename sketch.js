const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperBall, ground, dustbin1, dustbin2, dustbin3, wall;

function preload() {

}

function setup() {
	createCanvas(1150, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperBall = new ball(100, 485, 70);
	ground = new bal(575, 550, 1150, 10);
	dustbin1 = new Dustbin(900, 510);
	dustbin2 = new Dustbin2(815, 430);
	dustbin3 = new Dustbin3(985, 430);
	wall = new Wall(1150, 300);

	Engine.run(engine);

}


function draw() {
	background("lightblue");

	Engine.update(engine);

	rectMode(CENTER);
	paperBall.display();
	ground.display();
	dustbin1.display();
	//dustbin2.display();
	//dustbin3.display();
	wall.display();

	/*if (paperBall.y - dustbin1.y < paperBall.height/2 + dustbin1.height/2 &&
	   dustbin1.y - paperBall.y < dustbin1.height/2 + paperBall.height/2){
		score = score+1;
		paperBall.x = 100;
		paperBall.y = 520;
	}*/
	/* if (paperBall.x > 440 && paperBall.x < 560 && paperBall.y < 470){
		 paperBall.x = 100;
		 paperBall.y = 520;
		 score = score+1;
	 }*/

	//keyPressed();

	//drawSprites();

	textSize(22);
	text("press up arrow to jump", 50, 50);
	text("press down arrow to stop", 50, 75);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, { x: 90, y: -120 });
	}
}