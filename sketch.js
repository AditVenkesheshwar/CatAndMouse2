var canvas,bg;
var together;
var tom, tomIng1, tomImg2, tomImg3, tomImg4;
var jerry, jerry1,jerry2,jerry2,jerry4;

function preload(){
bg = loadImage("images/garden.png");
tomImg1 = loadAnimation("images/cat1.png");
tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
tomImg3 = loadAnimation("images/cat4.png");
//tomImg4 = loadAnimation("/images/cat1.png");
jerryImg1 = loadAnimation("images/mouse1.png");
jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png" );
jerryImg3 = loadAnimation("images/mouse4.png");
//jerryImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(880,600);
    tom.addAnimation("tomAsleep", tomImg1);
    tom.scale = 0.1;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStandingStill", jerryImg1);
    jerry.scale = 0.1;
}

function draw(){
    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
        tom.velocityX = 0;
        tom.addAnimation("tomImg3", tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomImg3")
        jerry.addAnimation("jerryImg3", jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryImg3")
    }
    drawSprites();

}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -6;
        tom.addAnimation("tomSprinting", tomImg2);
        tom.changeAnimation("tomSprinting")

        jerry.addAnimation("jerryAn1", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryAn1");

    }
}
