        var canvas;
        var block1,block2,block3,block4;
        var ball, edges;
        var music;

     function preload(){
        music = loadSound("music.mp3");
    }    


    function setup(){
        canvas = createCanvas(825,600);

         block1 = createSprite(0,580,360,30);
         block1.shapeColor = "#800080";

         block2 = createSprite(295,580,200,30);
         block2.shapeColor = "#6E0458";

         block3 = createSprite(510,580,200,30);
         block3.shapeColor = "#421C52";
   
         block4 = createSprite(725,580,200,30);
         block4.shapeColor = "#4A0E50"
    
         ball = createSprite(random(20,750),100, 40,40);
         ball.shapeColor = ("blue"); 
         ball.velocityY = 5;
         ball.velocityX = 3;
    
        music.loop();
}

    function draw() {
        background("lavender");
        edges=createEdgeSprites();
        ball.bounceOff(edges);

    
        if(block1.isTouching(ball) && ball.bounceOff(block1)){
            ball.shapeColor = "#800080";
            
        }
        if(block2.isTouching(ball) && ball.bounceOff(block2)){
            ball.shapeColor = "#6E0458";
        
        }
        if(block3.isTouching(ball)){
            ball.shapeColor = "#421C52";
            ball.velocityX = 0;
            ball.velocityY = 0;
            music.stop();
        }
        if(block4.isTouching(ball)&& ball.bounceOff(block4)){
            ball.shapeColor = "#4A0E50";
        }

        drawSprites();
}
