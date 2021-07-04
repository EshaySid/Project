
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;

var ball;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	
ground1=new Ground(200,390,400,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(50,50,20,ball_options);
	//world.add(world,ball);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,40);

  ground1.show();
  
  drawSprites();
 
}



