// Creating the constants

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Creating the variables

let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() 
{
  // Creating the canvas	
  createCanvas(800, 700);

  // Making my own engine create in the matter engine
  engine = Engine.create();

  // Creating the world
  world = engine.world;

  // Creating the ball

  var ball_options=
  {
    isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
  };

  ball = Bodies.circle(400,250,20,ball_options);
  World.add(world,ball);

  // Creating the grounds 

  groundObj = new Ground(width/2,670,width,20);
  leftSide = new Ground(570,600,10,120);
  rightSide = new Ground(750,600,10,120);
}

function draw() 
{
  // Updating my engine
  Engine.update(engine);

  // Styling the bodies

  rectMode(CENTER);
  ellipse(CENTER);

  // Setting the background color
  background(0);
  
  // Displaying the ball

  var position = ball.position
  ellipse(position.x,position.y,20);

  // Dislaying the grounds

  groundObj.display();
  leftSide.display();
  rightSide.display();
}

// Applying firce to the ball
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.12})
  }
}