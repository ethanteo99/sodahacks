var canvas;
var stage;
var circle;

var textColor = "#000000";
var buttonColor = "#0033cc";
var textFont = "30px VT323";
var width = 1000;
var height = 600;
var font = '30px VT323';

function init(){
  canvas = document.getElementById("demoCanvas");
  stage = new createjs.Stage(canvas);

  stage.update();

  createMenu();
}
 
function handleClick(event) {
  console.log("clicked!");
}

function choosePlayer() {
  stage.removeAllChildren();
  document.removeEventListener('keydown', handleStartMenuKey);
  document.addEventListener('keydown', handleChoosePlayerMenuKey);
  console.log("choose player!");

  var title = new createjs.Text("Choose Player", "70px VT323", textColor);
  title.x = canvas.width / 2 - title.getMeasuredWidth() / 2;
  title.y = title.y = (canvas.height / 15) * 4;

  var player1 = new createjs.Text("Player 1 (a)", "50px VT323", textColor);
  player1.x = canvas.width / 2 - player1.getMeasuredWidth() / 2;
  player1.y = (canvas.height / 15) * 8;
  
  var player2 = new createjs.Text("Player 2 (b)", "50px VT323", textColor);
  player2.x = canvas.width / 2 - player2.getMeasuredWidth() / 2;
  player2.y = (canvas.height / 15) * 10;

  var player3 = new createjs.Text("Player 3 (c)", "50px VT323", textColor);
  player3.x = canvas.width / 2 - player3.getMeasuredWidth() / 2;
  player3.y = (canvas.height / 15) * 12;

  stage.addChild(title, player1, player2, player3);
  stage.update();
}

function createMenu() {
    document.addEventListener('keydown', handleStartMenuKey);

    var menu = new createjs.Container();
    menu.x = 0;
    menu.y = 0;
    menu.setBounds(0, 0, width, height);

    var welcome = new createjs.Text('Welcome to Cal!', '50px VT323', 'blue');
    welcome.x = canvas.width/2 - welcome.getMeasuredWidth()/2;
    welcome.y = 100;

    var start = new createjs.Text('Start Game (S)', font);
    start.x = canvas.width/2 - start.getMeasuredWidth()/2;
    start.y = 200;

    start.addEventListener("click", handleClick);

    var instructions = new createjs.Text('Instructions (I)', font);
    instructions.x = canvas.width/2 - instructions.getMeasuredWidth()/2;
    instructions.y = 250;

    menu.addChild(welcome, start, instructions);
    stage.addChild(menu);
    stage.update();
}


function handleStartMenuKey(event) {
    if (event.keyCode == 83) {
        console.log("start game");
        choosePlayer();
    } else if (event.keyCode == 73) {
        console.log('show instructions');
    }
}

function handleChoosePlayerMenuKey(event) {
  if (event.keyCode == 65) {
    console.log("wants to be player 1!");
  } else if (event.keyCode == 66) {
    console.log("wants to be player 2!");
  } else if (event.keyCode == 67) {
    console.log("wants to be player 3!");
  }
}
