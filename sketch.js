
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1,bin2,bin3;
var ground;

function preload()
{
	var canvas= createCanvas(400,400);
	engine= Engine.create();
	world= engine.world;

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= createSprite(800,200,410,20)
	
	paper= new Ball(50,500);
	paper.shapeColor= color("yellow");

	bas1= new Bin(590,660,200,20);
	bas1.shapeColor= color("pink");
	bas1.setStatic = "true";

	bas2=new Bin(500,600,20,100);
	bas2.shapeColor= color("pink");
	bas1.setStatic = "true";

	bas3=new Bin(680,600,20,100);
	bas3.shapeColor= color("pink");
	bas1.setStatic = "true";

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  bas1.display();
  bas2.display();
  bas3.dispaly();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x:85,y:-85});
	}
}



