var runner, runner_running, bomb,coin,energyDrink, path, power;
var runnerImage, coinImage, pathImage;
var coinscore = 0
function  preload(){
  

  runnerImage=loadAnimation("Runner-1.png","Runner-2.png");
  pathImage=loadImage("path.png");
  coinImage=loadImage("coin.png");
  }

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=5;
  path.y=path.height/30;

  runner=createSprite(180,340,50,170);
  runner.addAnimation("running",runnerImage);
  runner.scale = 0.5
  
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3

  coin=createSprite(100,200,80,90);
  coin.addImage(coinImage);
  coin.scale=0.3
  
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
 left_boundary.visible=false;
right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score'+coinscore, 1,200);
  textSize(10);
  text('0', 20,230);
  path.velocityY=5;

  //runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  }
  if(runner.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  

  runner.collide(left_boundary);
  runner.collide(right_boundary);
  edges=createEdgeSprites();
  runner.collide(edges[3]);
drawSprites();
}

