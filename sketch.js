function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 70, 50);
  movingRect=createSprite(250,400,30,50);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="blue";
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(((movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2)&&
  (fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2))&&
  ((movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)&&
  (fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)))
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="yellow";
  }
  else
  {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}