var canvas;
var stage;
var textColor = "#000000";
var buttonColor = "#0033cc";

var black = "#0E1111";
var white = "#EEF0F0";
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

  document.removeEventListener('keydown', proceedWithPlayer);

  hud();
}

function hud(){
    stage.removeAllChildren();
    var background = new createjs.Shape();
    background.graphics.beginFill("#4C5B5C").drawRect(0,0,1000,600);

    var rec1 = new createjs.Shape();
    rec1.graphics.setStrokeStyle(8, "round");
    rec1.graphics.beginStroke(white).beginFill(black).drawRect(30, 370, 710, 200); 

    var rec2 = new createjs.Shape();
    rec2.graphics.setStrokeStyle(8, "round");
    rec2.graphics.beginStroke(white).beginFill(black).drawRect(770, 22, 200, 318); 

    var rec3 = new createjs.Shape();
    rec3.graphics.setStrokeStyle(8, "round");
    rec3.graphics.beginStroke(white).beginFill(black).drawRect(770, 370, 200, 200); 

    var date = new createjs.Text('Year 1, Semester 1', '30px VT323', white);
    date.x = 385 - date.getMeasuredWidth()/2;
    date.y = 388;

    var nametext = new createjs.Text('Chad', '30px VT323', white);
    nametext.x = 870 - nametext.getMeasuredWidth()/2;
    nametext.y = 190 + nametext.getMeasuredHeight();

    var gpatext = new createjs.Text('GPA: 2.56', '30px VT323', white);
    gpatext.x = 870 - gpatext.getMeasuredWidth()/2;
    gpatext.y = 230 + gpatext.getMeasuredHeight();

    var haptext = new createjs.Text('Happiness: 73%', '30px VT323', white);
    haptext.x = 870 - haptext.getMeasuredWidth()/2;
    haptext.y = 270 + haptext.getMeasuredHeight();

    var atrtext = new createjs.Text('Attributes', '30px VT323', white);
    atrtext.x = 870 - atrtext.getMeasuredWidth()/2;
    atrtext.y = 390 + atrtext.getMeasuredHeight();


    var inttext = new createjs.Text('Intelligence: 73', '25px VT323', white);
    inttext.x = 870 - inttext.getMeasuredWidth()/2;
    inttext.y = 440 + inttext.getMeasuredHeight();

    var soctext = new createjs.Text('Social: 73', '25px VT323', white);
    soctext.x = 870 - soctext.getMeasuredWidth()/2;
    soctext.y = 470 + soctext.getMeasuredHeight();

    var sletext = new createjs.Text('Sleep: 73', '25px VT323', white);
    sletext.x = 870 - sletext.getMeasuredWidth()/2;
    sletext.y = 500 + sletext.getMeasuredHeight();

   

    

    var cha = new createjs.Bitmap("img/dogelet.png");
    cha.x = 870 - 144/2;
    cha.y = 50;
    cha.scale = .5;
    cha.image.onload = function() {
    stage.update();
    }
 

    stage.addChild(background);
    stage.addChild(rec1);
    stage.addChild(rec2);
    stage.addChild(rec3);
    stage.addChild(date);
    stage.addChild(gpatext);
    stage.addChild(haptext); 
    stage.addChild(atrtext);
    stage.addChild(inttext);
    stage.addChild(soctext);
    stage.addChild(sletext);
    stage.addChild(nametext);
    stage.addChild(cha);
    stage.update();
    
    }

