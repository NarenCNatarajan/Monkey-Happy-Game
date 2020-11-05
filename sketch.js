
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survival_time = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  obstacleGroup = new Group ();
  foodGroup = new Group ();
}



function setup() {
  createCanvas (600,600)
  monkey = createSprite (80,290,20,20);
  monkey.addAnimation ("monkey",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite (400,350,900,10);
  ground.velocityX = -4;

  
  
  
  

  
}


function draw() {
 background ("black");
  if (ground.x > 0 ){
    ground.x = ground.width/2
  }
  
  monkey.collide(ground);
  monkey.collide(obstacleGroup)
  
  
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if (monkey.isTouching(foodGroup)){
    foodGroup.destroyEach ();
  }
  spawnObstacles ();
  spawnFoods ();
  
  stroke ("white");
  textSize (20);
  fill("white");
  //text("Score : "+ score,500,50);
  survival_time = Math.ceil(frameCount/frameRate())
  text ("Survival Time :" + survival_time,100,50)
  
  
  
  drawSprites();
}

function spawnObstacles (){
    if (frameCount % 300 === 0) {
     obstacle = createSprite(630,285,10,10);
     obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = ground.velocityX;
    obstacle.lifetime = 200;
    
    monkey.collide(obstacle);
    obstacleGroup.add(obstacle);
  }
}
function spawnFoods (){
  if (frameCount % 300 === 0){
    banana = createSprite (630,260,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = ground.velocityX;
    banana.lifetime = 200;
    
    position = Math.round(random(1,3));
    if (position === 1){
      banana.y = 120;
    }
    if (position === 2){
      banana.y = 160;
    }
    if (position === 3){
      banana.y = 200
    }
    foodGroup.add(banana)
  }
  
}






