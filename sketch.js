var bedroom, bedroomImg, livingr, livingrImg, kitchen, kitchenImg;
var door2Img, door2;


var gameState = 1;

var gameState = PLAY;
var marry1, marryImg1, door1, door1Img, Q1, boyQ, boyQImg, clockQ,clockQImg, doorQ, doorQImg;
var trafficImg, traffic, crabImg, crab, remoteImg, remote;

function preload(){

    bedroomImg = loadImage("assets/darkroom.jpeg");
    livingrImg = loadImage("assets/livingroom.jpeg");
    kitchenImg = loadImage ("assets/kitchen.jpeg");
    marryImg1 = loadImage("assets/G2.png");
    door1Img = loadImage("assets/closedroom.png");
    door2Img = loadImage("assets/door2.jpeg");
    boyQImg = loadImage("assets/boyQ.png");
    clockQImg = loadImage("assets/clockQ.png");
    doorQImg = loadImage("assets/doorQ.png");
    trafficImg = loadImage("assets/trafficLight.png");
    crabImg = loadImage("assets/crab.png");
    remoteImg = loadImage("assets/remote.png");




}

function setup(){
    createCanvas(windowWidth, windowHeight);

    

    bedroom = createSprite(width/2,height/2,width,height);
    bedroom.addImage("br",bedroomImg);
    bedroom.scale = 4;

    livingr = createSprite(width/2,height/2,width,height);
    livingr.addImage("lr",livingrImg);
    livingr.scale = 2.5;
    livingr.visible = false;

    kitchen = createSprite(width/2,height/2,width,height);
    kitchen.addImage("kt",kitchenImg);
    kitchen.scale = 0.68;
    kitchen.visible = false;

    marry1 = createSprite(width/2 - 500, height - 220);
    marry1.addImage("girl1", marryImg1);
    marry1.scale = 0.5;

    

    door1 = createSprite(width/2 + 500, height - 320);
    door1.addImage("door1", door1Img);
    door1.scale = 0.3;

    door2 = createSprite(width/2 + 500, height - 320);
    door2.addImage("door2", door2Img);
    door2.scale = 1.7;
    door2.visible = false;

    boyQ = createSprite(width/3 - 150, height/4 + 170,120,150);
    boyQ.addImage("boy", boyQImg);
    boyQ.visible = false;

    clockQ = createSprite(width/3 + 230, height/4 + 170,170,150);
    clockQ.addImage("clock", clockQImg);
    clockQ.visible = false;

    doorQ = createSprite(width/3 + 600, height/4 + 170,120,150);
    doorQ.addImage("door", doorQImg);
    doorQ.scale = 3;
    doorQ.visible = false;

    remote = createSprite(width/3 - 150, height/4 + 170,120,150);
    remote.addImage("remote", remoteImg);
    remote.visible = false;

    traffic = createSprite(width/3 + 230, height/4 + 170,170,150);
    traffic.addImage("tr", trafficImg);
    traffic.visible = false;

    crab = createSprite(width/3 + 600, height/4 + 170,120,150);
    crab.addImage("cr", crabImg);
    crab.visible = false;



    }

function draw() {
    background("black");

    if (keyIsDown(RIGHT_ARROW)){
        marry1.x = marry1.x + 7;
    }
    
    if(gameState === 1){
       /*if (keyIsDown(RIGHT_ARROW)){
            marry1.x = marry1.x + 7;
        }*/

        if (marry1.isTouching(door1)){
            quiz1()
          }

        if (mousePressedOver(clockQ)){
            gameState = 2;
        }
    }

    else if(gameState === 2){
        marry1.visible = true;
        marry1.x = width/2 - 500;
        marry1.y = height - 220

        livingr.visible = true;
        door2.visible = true; 
        
        boyQ.destroy();
        doorQ.destroy();
        clockQ.destroy();

        /*if (keyIsDown(UP_ARROW)){
            marry1.x = marry1.x + 7;
        }*/

        //marry1.x = mouseX;
        
        if (marry1.isTouching(door2)){
            quiz2()
        }
    }
    
    drawSprites();
}


function quiz1(){

    background("blue");
    
    marry1.visible = false;
    door1.visible = false;
    bedroom.visible = false;
    textSize (50);

    fill ("yellow");
    text ("What has Hands but cannot Clap?", width/4 , height/4 - 50);
 
     boyQ.visible = true;
     boyQ.scale = 0.5;
     if (mousePressedOver(boyQ)){
         //wrongAnswer(); 
         boyQ.visible = false;
     }
 
     clockQ.visible = true;
     clockQ.scale = 0.5;
     /*if (mousePressedOver(clockQ)){
         twoStage();        
     }*/
 
     doorQ.visible = true;
     doorQ.scale = 0.5;
     if (mousePressedOver(doorQ)){
         //wrongAnswer();
         doorQ.visible = false;
     }
 
     
     }
 
function quiz2() {

        background("blue");
       
        marry1.visible = false;
        door2.visible = false;
        livingr.visible = false;
    
        textSize (50);
        //fill ("yellow");
        //text ("Complete The Quiz To Open The Door", width/2, height/4 - 200);
        fill ("yellow");
        text ("Three eyes have I, all in a column;", width/4 +10, height/4 - 50);
        text ("when the red one opens, all freeze like the snow.", width/4 - 50 , height/4);
     
         remote.visible = true;
         remote.scale = 0.5;
         if (mousePressedOver(remote)){
             //boyQclicked();
             remote.visible = false;
         }
     
         traffic.visible = true;

         traffic.scale = 0.5;
         /*if (mousePressedOver(clockQ)){
             clockQclicked();
             
         }*/
     
         crab.visible = true;
         crab.scale = 0.5;
         if (mousePressedOver(crab)){
            // boyQclicked();
             crab.visible = false;
         }
     
    }
    
    

