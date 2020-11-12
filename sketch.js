
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,BOY,boy,stone,string,tree,mango1;

function preload()
{

}

function setup() {
	createCanvas(1000,580);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(1000,height,2000,20);
	BOY = new BoyClass(200,500,200,200);
	stone = new Stone(100,20,50,50);
	tree = new TreeClass(800,300,300,600);
	mango1 = new MangoClass(700,200,30,40);
	string = new String(stone.body,{x:130,y:450});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree.display();
  mango1.display();
  ground.display();
  BOY.display();
  stone.display();
  string.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}
function detectollision(stone,mango1){
	mangoBodyPosition = mango1.body.position
	stoneBodyPosition = stone.body.position
var distance  = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance= mango.r+stone.r){
	  matter.body.setStatic(mango.body,false);
  }
}

