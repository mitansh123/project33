var scenery;


function preload(){
scenery = loadImage("snow1.jpg");



}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

snowflake1 = new snowflake(320,100);

}

function draw() {
  background(scenery); 
  
  snowflake1.display();


  drawSprites();
}