
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,treee,stone1,constraint1;
function preload()
{
	
}

function setup() {
	createCanvas(900, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(450, 600, 900, 200);
    

	treee = new tree(800, 350, 400, 400);
	mango1 = new object(630, 350, 50, 50);
	mango2 = new object(750, 350, 50, 50);
	mango3 = new object(690, 350, 50, 50);
	mango4 = new object(660, 300, 50, 50)
	mango5 = new object(770, 350, 50, 50);
	mango6 = new object(800, 350, 50, 50)
	boy = new man(230, 500, 200, 200)
	//Create the Bodies Here.
	stone1 = new stone(90,450,30, 30);
	constraint1 = new constraint(stone1.body,{x: 165,y: 450})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground.display();

  treee.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display()
 mango6.display()
 boy.display();
 stone1.display();
 constraint1.display();
 //constraint2.display();
 collided(mango1,stone1)
 collided(mango2,stone1)
 collided(mango3,stone1);
 collided(mango4,stone1);
 collided(mango5,stone1);
 collided(mango6,stone1)
 keySPACE();
 
  drawSprites();
 if(ground.body.position.y-mango1.body.position.y <= ground.height/2+mango1.height/2){
	textSize(20); 
	text("GOOD!",450, 200);
 }
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x: mouseX,y: mouseY})
}
function mouseReleased(){
	constraint1.fly();
	
}
function collided(ob1,ob2){
	if(ob1.body.position.x-ob2.body.position.x<=ob1.width/2+ob2.width/2){

	Matter.Body.setStatic(ob1.body,false)
	}
}



function keySPACE(){
	if(keyDown("space")){
	   Matter.Body.setPosition(stone1.body,{x:190,y:450})  
	   constraint1.attach(stone1.body);

	}
	
}
