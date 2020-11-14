const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var line1,line2,line3;


function preload()
{

}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,690,800,20)
	paper = new Paper(100,600,40)
	line1 = new Dustbin(650,670,200,10);
	line2 = new Dustbin(543,625,10,100);
	line3 = new Dustbin(757,625,10,100);
    console.log(ground)
	Engine.run(engine);
  
}


function draw() {

rectMode(CENTER)
  background(0);
  
   ground.display();
   paper.display();
   line1.display();
   line2.display();
   line3.display();
  drawSprites();
}
function keyPressed() {
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-125});
	}
}	



