const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg,bg;

function preload(){
  polygonImg=loadImage("polygon.png");
  morning = loadImage("morning.jpg")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  groundObj=new Ground();
  backgroundImg="gray";
  stand=new Stand(600, 295, 300, 10);
  block1=new Box(530,235,30,40);
  block2=new Box(560,235,30,40);
  block3=new Box(590,235,30,40);
  block4=new Box(620,235,30,40);
  block5=new Box(650,235,30,40);
  block6=new Box(560,195,30,40);
  block7=new Box(590,195,30,40);
  block8=new Box(620,195,30,40);
  block9=new Box(590,155,30,40);
  block10=new Box(500,275,30,40);
  block11=new Box(530,275,30,40);
  block12=new Box(560,275,30,40);
  block13=new Box(590,275,30,40);
  block14=new Box(620,275,30,40);
  block15=new Box(650,275,30,40);
  block16=new Box(680,275,30,40);
  polygon=Bodies.circle(125,200,20);
  World.add(world,polygon);
  slingshot=new SlingShot(this.polygon,{x:175,y:200});

}

function draw() { 
  if(backgroundImg){
    background(backgroundImg);
  }
  textSize(20);
  fill("blue");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  groundObj.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)
  getBackgroundImage();
  drawSprites();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon);
    Matter.Body.setPosition(this.polygon,{x:125,y:200});
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseData = await response.json();
  var br4m = responseData.datetime;
  var hour = br4m.slice(10,13);
  if (hour >=06 && hour <=18){
    bg = "morning.jpg"
  } else {
    bg = "night.jpg"
  }

  backgroundImg = loadImage(bg)
}