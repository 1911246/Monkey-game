var bananaImage
var obstacleImage
var obstaclegroup
var background1
var score = 0;


function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png"  ,"Monkey_03.png",
  "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  var monkey = createSprite(45, 300,20,20);
  monkey.setAnimation("player_running");
  monkey.scale = 0.5;
  var ground = createSprite(200, 370,800,30);
  ground.visible(false);
  background1.setAnimation("backImange");
  
}

function draw() {
  background(220);
  spawnBanana();
  spawnObstacles();
  drawSprites();
  
  background1.velocityX = -4;
  
   if (background1.x < 0){
      background1.x = ground.width/2;
    }
  
  
  if(monkey.isTouching(BananaGroup)){
   banana.destroy();
   score = score + 2;
   monkey.scale =  monkey.scale + 0.10
   }
 
  
}

function spawnBanana(){
  if(World.frameCount % 80 === 0){
    var banana = createSprite(400, 270, 20,20);
    banana.setAnimation("bananaImage");
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.y = randomNumber(180,220);
    banana.lifetime = 100;
    BananaGroup.add(banana);
    
  }
}

function spawnObstacles(){
  if(World.frameCount % 200 === 0){
    var obstacle = createSprite(410,330,20,20);
    obstacle.setAnimation("obstacleImage");
    obstacle.scale = 0.13;
    obstacle.velocityX = -5;
    obstacle.lifetime = 100;
    ObstaclesGroup.add(obstacle);
  }
}

