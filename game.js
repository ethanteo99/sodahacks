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

function init() {
  console.log("hello" + player.intelligence);
  canvas = document.getElementById("demoCanvas");
  stage = new createjs.Stage(canvas);

  createjs.Ticker.on("tick", stage);
  stage.update();
  createMenu();
}

function tick(event) {
    stage.update(event);
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

function landmarkReached() {
  console.log("Received final grades.");
  var difficulty;
  if (player.name == "Chad") {
    difficulty = 80;
  } else if (player.name == "EECS") {
    difficulty = 90;
  } else {
    difficulty = 70;
  }
  var change = ((player.intelligence*0.7 + player.sleep*0.3 - difficulty)/100)*player.GPA;
  player.GPA = player.GPA - change;
  if(change > 0) {
    console.log("You did well on your finals!");
    if(player.GPA > 4) {
      player.GPA = 4;
    }
  } else if (change < 0) {
    console.log("You did poorly on your finals.");
  }
  console.log("Your new GPA is: " + player.GPA);
}

function endWeek() {
  stage.removeAllChildren();
  document.addEventListener('keydown', handleChooseFocus);
  console.log("choose player!");

  var title = new createjs.Text("Choose focus for next week", "70px VT323", textColor);
  title.x = canvas.width / 2 - title.getMeasuredWidth() / 2;
  title.y = title.y = (canvas.height / 15) * 4;

  var sleep = new createjs.Text("Sleep (a)", "50px VT323", textColor);
  sleep.x = canvas.width / 2 - sleep.getMeasuredWidth() / 2;
  sleep.y = (canvas.height / 15) * 8;

  var study = new createjs.Text("Study (b)", "50px VT323", textColor);
  study.x = canvas.width / 2 - study.getMeasuredWidth() / 2;
  study.y = (canvas.height / 15) * 10;

  var party = new createjs.Text("Party (c)", "50px VT323", textColor);
  party.x = canvas.width / 2 - party.getMeasuredWidth() / 2;
  party.y = (canvas.height / 15) * 12;

  stage.addChild(title, sleep, study, party);
  stage.update();
}

function handleChooseFocus(event) {
  var focus = 0;
  if (event.keyCode == 65) {
    console.log("Let's focus on sleeping!");
    focus = 1;
  } else if (event.keyCode == 66) {
    console.log("Let's focus on studying!");
    focus = 2;
  } else if (event.keyCode == 67) {
    console.log("Let's focus on partying!");
    focus = 3;
  }

  if(focus != 0) {
    document.removeEventListener('keydown', handleChoosePlayerMenuKey);
    initStatChanges(focus);
  }
}

function minusRandomScalar() {
  return Math.floor(Math.random() * 5);
}

function initStatChanges(focus) {
  var scalar = Math.floor(Math.random() * 6 + 1);
  if (focus == 1) {

    if (scalar == 1 || scalar == 2) {
      console.log("Despite trying your best, you had a rough week of sleep: +" + scalar);
    }
    else {
      console.log("You sleep like a baby: +" + scalar);
    }

    player.sleep = player.sleep + scalar;
    player.intelligence = player.intelligence - minusRandomScalar;
    player.social = player.social - minusRandomScalar;
  }

  if (focus == 2) {

    if (scalar == 1 || scalar == 2) {
      console.log("Even after studying, the concepts are still fuzzy in your brain: +" + scalar);
    } else {
      console.log("You spend countless hours at Moffitt, shower less, and stink more: +" + scalar);
    }

    player.sleep = player.sleep - minusRandomScalar;
    player.intelligence = player.intelligence + scalar;
    player.social = player.social - minusRandomScalar;

  }

  if (focus == 3) {
    if (scalar == 1 || scalar == 2) {
      console.log("Your friends are busy this week, but they manage to squeeze in a little time for you +" + scalar);
    }
    else {
      console.log("You go to a frat party, shotgun a beer, slap a wine bag, and win a game of beer pong +" + scalar);
    }

    player.sleep = player.sleep - minusRandomScalar;
    player.intelligence = player.intelligence - minusRandomScalar;
    player.social = player.social + scalar;

  }

  updateHappiness();
  if (happiness <= 0) {
    console.log("You lose please quit.");
  }

}

function updateHappiness() {
  player.happiness = player.happiness + (((.6 * social) + (.4 * sleep) - 80) / 100) * player.happiness;
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

    var nametext = new createjs.Text(player.name, '30px VT323', white);
    nametext.x = 870 - nametext.getMeasuredWidth()/2;
    nametext.y = 190 + nametext.getMeasuredHeight();

    var gpatext = new createjs.Text('GPA: ' + player.GPA, '30px VT323', white);
    gpatext.x = 870 - gpatext.getMeasuredWidth()/2;
    gpatext.y = 230 + gpatext.getMeasuredHeight();

    var haptext = new createjs.Text('Happiness: ' + player.happiness + '%', '30px VT323', white);
    haptext.x = 870 - haptext.getMeasuredWidth()/2;
    haptext.y = 270 + haptext.getMeasuredHeight();

    var atrtext = new createjs.Text('Attributes', '30px VT323', white);
    atrtext.x = 870 - atrtext.getMeasuredWidth()/2;
    atrtext.y = 390 + atrtext.getMeasuredHeight();


    var inttext = new createjs.Text('Intelligence: ' + player.intelligence, '25px VT323', white);
    inttext.x = 870 - inttext.getMeasuredWidth()/2;
    inttext.y = 440 + inttext.getMeasuredHeight();

    var soctext = new createjs.Text('Social: ' + player.social, '25px VT323', white);
    soctext.x = 870 - soctext.getMeasuredWidth()/2;
    soctext.y = 470 + soctext.getMeasuredHeight();

    var sletext = new createjs.Text('Sleep: ' + player.sleep, '25px VT323', white);
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
