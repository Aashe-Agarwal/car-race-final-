var  database;
var playerCount,gamestate =0;
var game,form,player,allPlayers,car1,car2,car3,car4,cars,car1img,car2img, car3img,car4img,trackimg;
var CarsAtEnd = 0;
var gameState=0;
function preload(){
  car1img=loadImage("car1.png");
  car2img=loadImage("car2.png");
  car3img=loadImage("car3.png");
  car4img=loadImage("car4.png");
  track=loadImage("track.jpg")
}

function setup(){
  database = firebase.database();
  
  createCanvas(displayWidth-50,displayHeight-200);
 game = new Game();
 game.getState();
 game.start();
 
}


function draw(){
  if(gameState === 0){
    background("pink");
  }
  else{
    background("blue")
  }
 
  if(playerCount === 4 && CarsAtEnd === 0){
    game.update(1);
    
  }
  if(gameState === 1){
   
    game.play();
   // game.getCarsAtEnd();
    if(CarsAtEnd === 4){
      game.update(2);
    }
   
  }
  
  
  if(gameState === 2 && CarsAtEnd === 4){
    
    game.displayRanks();
  }
 
}

