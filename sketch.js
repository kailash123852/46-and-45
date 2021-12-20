var bg;
var player,playerImage;
var ducks,duckGroup,duckImage;
var goldenDucks,goldenDucksGroup,goldenDuckImage;
var Score=0;
var bombs,bombsGroup,bombsImage;
var GameState="play";
function preload() {
bg=loadImage("background.jpg");
playerImage=loadImage("player.png");
duckImage=loadImage("duck.png");
goldenDuckImage=loadImage("duck2.png");
bombsImage=loadImage("bomb.png");
}

function setup() {
  createCanvas(1900,900);
  player=new Player(200,200);
  duckGroup=new Group();
  goldenGroup=new Group();
  bombsGroup=new Group();

}

function draw() {
  background(bg);
  textSize(50)
  text("Score:"+Score,20,40); 
  if(GameState=="play"){
  player.spt.x=World.mouseX; 
  player.spt.y=World.mouseY;
  duck();
  bomb();
  goldenDuck();
  if(player.spt.isTouching(duckGroup)){
    Score=Score+1;
    duckGroup.destroyEach();
  }
  if(player.spt.isTouching(goldenGroup)){
    Score=Score+5;
    goldenGroup.destroyEach();
  }
  if(Score>5){
    GameState="win";
  }
  if(bombsGroup.isTouching(player.spt)){
    GameState="fail"
  }
}
if(GameState=="win"){
  textSize(100);
  fill("black");
  text("YOU WON🎆🎆",600,400);
  player.spt.destroy()
  bombsGroup.destroyEach();
  duckGroup.destroyEach();
}
if(GameState=="fail"){
  textSize(100);
  fill("black");
  text("GAME OVER",600,400);
  player.spt.destroy()
  bombsGroup.destroyEach();
  duckGroup.destoryEach();
}
  drawSprites();

}

function duck(){
  if(frameCount%50==0){
  ducks=createSprite(10,850,20,20);
  ducks.addImage(duckImage);
  ducks.scale=0.2;
  ducks.velocityY=random([-5,-10,-20]);
  ducks.x=random(100,1800);
  duckGroup.add(ducks);
}}

function bomb(){
    if(frameCount%200==0){
    bombs=createSprite(100,850,20,20);
    bombs.addImage(bombsImage);
    bombs.scale=0.3;
    bombs.velocityY=-15;
    bombs.x=random(100,1800);
    bombsGroup.add(bombs);
  }
}

function goldenDuck(){
  rand=Math.round(random(100,600));
  console.log(rand);
  if(frameCount%rand==0){
    goldenDucks=createSprite(100,850,20,20);
    goldenDucks.addImage(goldenDuckImage);
    goldenDucks.scale=0.5;
    goldenDucks.velocityY=-15;
    goldenDucks.x=random(100,1800)
    goldenGroup.add(goldenDucks);

  }
}