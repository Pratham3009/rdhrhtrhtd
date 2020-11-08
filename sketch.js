
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ground;
var rope1, rope2, rope3, rope4, rope5;
var world;

function setup() {
	createCanvas(1200, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new bob(200,500);
	bobObject2 = new bob(400,500);
	bobObject3 = new bob(600,500);
	bobObject4 = new bob(800,500);
	bobObject5 = new bob(1000,500);

	ground = new roof(200,300,800,10);

	rope1 = new rope(bobObject1.body,ground.body,-bobDiameter*2, 0);
	rope2 = new rope(bobObject2.body,ground.body,-bobDiameter*2, 0);
	rope3 = new rope(bobObject3.body,ground.body,-bobDiameter*2, 0);
	rope4 = new rope(bobObject4.body,ground.body,-bobDiameter*2, 0);
	rope5 = new rope(bobObject5.body,ground.body,-bobDiameter*2, 0);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
    //Render.run(render);
}


function draw() {

  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}



