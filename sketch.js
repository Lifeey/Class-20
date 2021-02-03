

var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(600, 200, 80, 50);
  movingRect.shapeColor="green";
  movingRect.debug="true"
  movingRect.velocityX=-5;
  fixedRect=createSprite(300, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug="true"
  fixedRect.velocityX=5;

}

function draw() {
  background(55,255,255);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
 //collision detection condition in horizontal direction
  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2)
    {
          movingRect.velocityX= movingRect.velocityX*(-1);//-5*-1=5
          fixedRect.velocityX = fixedRect.velocityX*(-1);//5=-5
    }

    ////collision detection condition in vertical direction
    if( movingRect.y -fixedRect.y < movingRect.height/2 +fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
    {
       movingRect.velocityY = movingRect.velocityY*(-1);
       fixedRect.velocityY= movingRect.velocityY*(-1)
    }; 
  
  drawSprites();
}