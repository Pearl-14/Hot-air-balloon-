var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
}

function setup(){
createCanvas(windowWidth, windowHeight);
//background image
bg = createSprite(165,485,windowWidth,windowHeight);
bg.addImage(bgImg);
bg.scale = 1.75

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.5;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -10 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY+0.9893579147597146907614;
   
        drawSprites();
        
}
