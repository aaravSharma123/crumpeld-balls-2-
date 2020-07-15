var paperball,dustbin,ground,dustbin1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);



	//Create the Bodies Here.


	Engine.run(engine);
  
	dustbin = new Dustbin(600,570,20,50);
	dustbin1 = new Dustbin(700,570,20,70);

	paperball = new Paperball(200,500,20);
	
}


function draw() {
  
  background(211,211,211);
  
  dustbin.display();
  paperball.display();
  ground.display();	
  
	
	
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:57,y:-57});
    }
}

