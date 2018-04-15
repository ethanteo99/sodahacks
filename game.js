var canvas;
var stage;
var circle;

var textColor = "#000000";
var buttonColor = "#0033cc";
var textFont = "30px VT323";

function init(){
  canvas = document.getElementById("demoCanvas");
  stage = new createjs.Stage(canvas);

  circle = new createjs.Shape();
  circle.graphics.beginFill("black").drawCircle(0, 0, 40);
  //Set position of Shape instance.
  circle.x = circle.y = 50;

  circle.addEventListener("click", handleClick);

  stage.addChild(circle);
  stage.update();

  choosePlayer();
}
 
function handleClick(event) {
  console.log("clicked!");
}

function handleClickPlayer1(event) {
  console.log("player 1 clicked!");
}

function handleClickPlayer2(event) {
  console.log("player 2 clicked!");
}

function handleClickPlayer3(event) {
  console.log("player 3 clicked!");
}

function choosePlayer() {
  console.log("choose player!");

  var title = new createjs.Text("Choose Player", "60px VT323", textColor);
  title.x = canvas.width / 2 - title.getMeasuredWidth() / 2;
  title.y = title.y = (canvas.height / 15) * 4;

  var player1 = new createjs.Text("Player 1", "40px VT323", textColor);
  player1.x = canvas.width / 2 - player1.getMeasuredWidth() / 2;
  player1.y = (canvas.height / 15) * 8;
  player1.addEventListener("click", handleClickPlayer1);
  
  var player2 = new createjs.Text("Player 2", "40px VT323", textColor);
  player2.x = canvas.width / 2 - player2.getMeasuredWidth() / 2;
  player2.y = (canvas.height / 15) * 10;
  player2.addEventListener("click", handleClickPlayer2);

  var player3 = new createjs.Text("Player 3", "40px VT323", textColor);
  player3.x = canvas.width / 2 - player3.getMeasuredWidth() / 2;
  player3.y = (canvas.height / 15) * 12;
  player3.addEventListener("click", handleClickPlayer3);

  stage.addChild(title);
  stage.addChild(player1);
  stage.addChild(player2);
  stage.addChild(player3);
  stage.update();
}
