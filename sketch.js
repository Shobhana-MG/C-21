var fixedRect, movingRect
var m,s;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(700, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(600,400,50,80)
  rect1.velocityX=-1
  rect1.shapeColor="pink"
  rect2=createSprite(500,400,50,80)
rect2.shapeColor="blue"
  rect3=createSprite(400,400,50,80)
  rect3.shapeColor="red"
  rect3.velocityY=-1
  rect4=createSprite(400,100,50,80)
  rect4.shapeColor="green"
  rect4.velocityY=2

/*
  m=createSprite(200,100,30,40)
  m.shapeColor="pink"
  m.velocityX=5

  s=createSprite(700,100.40,30)
  s.shapeColor="purple"
  s.velocityX=-5*/
}
function draw() {
  background(0); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 bounceOff(rect1,rect2);
bounceOff(rect3,rect4);

  if (isTouching(rect1,rect2)){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  
/*
if(m.y-s.y<m.height/2+s.height/2
  &&s.y-m.y<s.height/2+m.height/2){
    m.velocityY=m.velocityY*(-1)
    s.velocityY=s.velocityY*(-1)

}

if(m.x-s.x<m.width/2+s.width/2
  &&s.x-m.x<s.width/2+m.width/2){
    m.velocityX=m.velocityX*(-1)
    s.velocityX=s.velocityX*(-1)

}*/
  drawSprites();
}




