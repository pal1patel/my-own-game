var player1,player1Img,player2,player2Img
var background, backgroundImg
var referee, refereeImg
var ball, ballImg
var table, tableImg
var b1, b3, b4


function preload(){

  player1Img = loadImage("assets/player1.png")
  player2Img = loadImage("assets/player2.png")
  refereeImg = loadImage("assets/referee.gif")
  ballImg = loadImage("assets/ball.png")
  tableImg = loadImage("assets/pingpongtable.png")
  backgroundImg = loadImage("assets/background.png")
}

function setup(){

  createCanvas(windowWidth,windowHeight)

  player1 = createSprite(width/2 - 390,height - 500)
  player1.addImage("player1.jpg", player1Img)
  player1.scale = 0.4

  
  player2 = createSprite(width/2 + 260,height - 500)
  player2.addImage("player2.jpg", player2Img)
  player2.scale = 1.2
   

  table = createSprite(width/2 -50,height/2 -50,600,800)
  table.addImage("pingpongtable", tableImg)

  ball = createSprite(width/2 - 65,height - 490)
  ball.addImage("ball.png", ballImg)
  ball.scale = 0.1


  referee = createSprite(width/2 - 600,height - 800)
  referee.addImage("referee", refereeImg)
  referee.addAnimation("referee.gif")
  referee.scale = 1.5

  b1 = createSprite(width/2 -360,height/2 -50,10,400)
  b3 = createSprite(width/2 -90,height/2 -220,600,10)
  b4 = createSprite(width/2 -90,height/2 +120,600,10)

  ball.velocityX = 6
  ball.velocityY = 3
}

function draw() {
  
  background("lightblue");
  
  createEdgeSprites()

  drawSprites()

  player2.y = World.mouseY

  table.depth = player1.depth
  player1.depth += 1 
  player2.depth += 1
  ball.depth += 1
  referee.depth += 1

  
  ball.bounceOff(player2)
  ball.bounceOff(player1)
  ball.bounceOff(b1)
  ball.bounceOff(b3)
  ball.bounceOff(b4)
  

  player1.y = ball.y

  b1.visible = false
  b3.visible = false
  b4.visible = false

         
}




         



  
