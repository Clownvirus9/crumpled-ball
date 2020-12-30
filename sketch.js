
var paper;
var bin1;
var bin2;
var bin3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(600,570,1200,20);
	bin1 = new dustbin(990,560,200,10);
	bin2 = new dustbin(1090,465,10,200);
	bin3 = new dustbin(890,465,10,200);
    paper = new Paper(120,500);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
    ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	paper.display();


   drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-85});
	}
	}
	


