var fixedRect, movingRect;

var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(50,100,20,20)
  car.shapeColor="blue";
  car.velocityX=4;
  wall=createSprite(1000,100,20,50);
  wall.shapeColor="brown";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red"; 
   }
   else{
  movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";

   }
if(isTouching(car,wall)){
  text("TOUCHED",200,200);
}
bounceOff(car,wall)
  drawSprites();
}
