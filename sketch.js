
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1,box2,box3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(10,370,4000,10);
    ball = new Paper(100,200,30,30)
    box1 = new Box(500,210,20,100);
	  box2 = new Box(670,210,20,100);
	  box3 = new Box(580,250,168,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}




