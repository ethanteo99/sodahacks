var canvas;
var stage;
var textColor = "#000000";
var buttonColor = "#0033cc";
var playerNum = 0;
const width = 1000;
const height = 600;
const font = '30px VT323';

var player = {
  name: "",
  intelligence: 0,
  social: 0,
  sleep: 0,
  GPA: 4,
  happiness: 100,
}

var intelligence;
var social;
var energy;
var GPA;
var happiness;

function init() {
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
  document.addEventListener('keydown', handleChoosePlayerMenuKey);
  console.log("choose player!");

  var title = new createjs.Text("Choose Player", "70px VT323", textColor);
  title.x = canvas.width / 2 - title.getMeasuredWidth() / 2;
  title.y = canvas.height / 15 * 4;

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
        document.removeEventListener('keydown', handleStartMenuKey);
        console.log("start game");
        choosePlayer();
    } else if (event.keyCode == 73) {
        showInstructions();
    }
}


function showInstructions(event) {
    console.log("works");
    var show = new createjs.Text('Instructions', font);
    show.x = 200;
    show.y = 300;

    stage.addChild(show);
    stage.update();
}

function handleChoosePlayerMenuKey(event) {
    let name, description;
    const confirm = new createjs.Text("Do you want to choose this player? (y/n)", "30px VT323", textColor);
    confirm.x = canvas.width / 2 - confirm.getMeasuredWidth() / 2;
    confirm.y = (canvas.height / 15) * 12;

    if (event.keyCode == 65) {
        stage.removeAllChildren();
        name = new createjs.Text("Chad", "50px VT323", textColor);
        playerNum = 1;
    } else if (event.keyCode == 66) {
        stage.removeAllChildren();
        name = new createjs.Text("EECS", "50px VT323", textColor);
        playerNum = 2;
    } else if (event.keyCode == 67) {
        stage.removeAllChildren();
        name = new createjs.Text("Media Studies", "50px VT323", textColor);
        playerNum = 3;
    }
    description = new createjs.Text("Enter Description", "40px VT323", textColor);
    description.x = canvas.width / 2 - description.getMeasuredWidth() / 2;
    description.y = (canvas.height / 15) * 8;

    name.x = canvas.width / 2 - name.getMeasuredWidth() / 2;
    name.y = (canvas.height / 15) * 4;

    stage.addChild(name, confirm, description);
    stage.update();
    document.removeEventListener('keydown', handleChoosePlayerMenuKey);
    document.addEventListener('keydown', proceedWithPlayer);
}

function proceedWithPlayer(event) {
    if (event.keyCode == 89) {
        initPlayer(playerNum);
    } else if (event.keyCode == 78) {
        handleChoosePlayerMenuKey();
    }
}


function initPlayer(playerNum) {
  console.log("initializing player");
  if(playerNum == 1) {
    player.name = "chad";
    player.intelligence = 20;
    player.social = 30;
    player.sleep = 25;
  } else if(playerNum == 2) {
    player.name = "eecs";
    player.intelligence = 35;
    player.social = 20;
    player.sleep = 20;
  } else if(playerNum == 3) {
    player.name = "media studies";
    player.intelligence = 20;
    player.social = 25;
    player.sleep = 30;
  }
  console.log(player);
}
