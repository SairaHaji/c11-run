


var path, pathImg
var run,running,runImg
var rightw,leftw
function preload(){
  //pre-load images
pathImg=loadImage("path.png")
runImg=loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite (200,200)
path.addImage(pathImg)
path.velocityY=4
path.scale=1.2
rightw=createSprite(370,200,20,400)
leftw=createSprite(34,200,20,400)

run=createSprite(200,200)
run.addAnimation("runn",runImg)
run.scale=0.05



}

function draw() {
  background(0);
if (path.y>400){
  path.y=height/2
}
run.x=mouseX
run.collide(leftw)
run.collide(rightw)

leftw.visible=false
rightw.visible=false



drawSprites()
}
