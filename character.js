class Character {
    constructor(){
      
    }


     start(){

        player1 = createSprite(width/2 - 50,height - 90)
        player1.addImage("player1.jpg", player1Img)
        player1.scale = 0.8

        
        player2 = createSprite(width/2 + 50,height - 90)
        player2.addImage("player2.jpg", player2Img)
        player2.scale = 0.8


        this.addSprites(player1, player1Img, player2, player2Img)
     }
}