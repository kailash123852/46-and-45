class Player{
    constructor(x,y){
        this.spt=createSprite(x,y,20,20);
        this.spt.addImage(playerImage);
        this.spt.scale=0.8;
        
    }
}