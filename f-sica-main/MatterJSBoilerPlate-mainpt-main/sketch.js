
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bola
var retângulo
var quadrado

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
	var plane_options = {
		isStatic : true
	  }
	
	

	  

  var bola_options= {
	isStatic:false ,
	restitution:0.3,
	  friction: 0 ,
	  density:1.2 
  }

  /*var block2_options= {
	restitution:0.7,
	friction: 0.01 ,
	frictionAir: 0.1

}*/
	bola=Bodies.circle(260,100,20,bola_options)
  World.add(world,bola);
groundObj=new Ground(width/2,670,width,20)
leftSide = new Ground(1100,600,20,120);
rigthSide = new Ground(1400,600,20,120);
}
function draw() {
  rectMode(CENTER);
  background(0);
  leftSide.show()
 rigthSide.show() 
  
 groundObj.show()
 ellipse(bola.position.x,bola.position.y,20)
}


function keyPressed(){
	if (keyCode === UP_ARROW)
	
		Matter.Body.applyForce(bola,bola.position,{x:85, y:-85});
	  
}