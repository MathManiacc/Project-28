
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImage, boy;

function preload()
{
	boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200, 650, 7000, 20);
	tree = new Tree(730, 400, 380, 500);
	stone = new Stone(90, 450, 50, 50);

	mango1 = new Mango(730, 250);
	mango2 = new Mango(800, 330);
	mango3 = new Mango(800, 250);
	mango4 = new Mango(730, 330);
	mango5 = new Mango(650, 330);
	mango6 = new Mango(860, 330);

	slingshot = new Sling(stone.body,{x:167.5, y:150});

	Engine.run(engine);

	boy = createSprite(160, 570, 50, 80);
	boy.addImage(boyImage);
	boy.scale = 0.13
  
}


function draw() {
	rectMode(CENTER);
	background("lightgray");
  
	drawSprites();
	ground.display();
	tree.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
}



