var ball;
var database;
var gameBall;
var position1;

function setup(){
    createCanvas(500,500);
    gameBall = createSprite(250,250,10,10);
    gameBall.shapeColor = "red";

 
     database = firebase.database()

    var ballPosition =database.ref('ball/position') //reference

    ballPosition.on("value",readPosition,showError);

}

function draw(){
    background("white");

    if(position1!==undefined)
    {
  

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data)
{
    position1=data.val();
    gameBall.x=position1.x;
    gameBall.y=position1.y;

    console.log(position1);


}
function showError()
{
    console.log("error happened");
}


function writePosition(x,y)
{

    database.ref('ball/position').set({
          'x': position1.x+ x,
          'y':position1.y+y




    })
}
