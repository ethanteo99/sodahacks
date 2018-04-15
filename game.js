var canvas;
var stage;
const width = 1000;
const height = 600;
const font = '30px VT323'

var intelligence;
var social;
var energy;
var GPA;
var health;

//Create a stage by getting a reference to the canvas
function init(){
    canvas = $("#demoCanvas");
    stage = new createjs.Stage("demoCanvas");
    createMenu();
    stage.update();
}

function createMenu() {
    document.addEventListener('keydown', handleKey);

    var menu = new createjs.Container();
    menu.x = 0;
    menu.y = 0;
    menu.setBounds(0, 0, width, height);

    var welcome = new createjs.Text('Welcome to Cal!', '50px VT323', 'blue');
    welcome.x = canvas.width()/2 - welcome.getMeasuredWidth()/2;
    welcome.y = 100;

    var start = new createjs.Text('Start Game (S)', font);
    start.x = canvas.width()/2 - start.getMeasuredWidth()/2;
    start.y = 200;

    start.addEventListener("click", handleClick);

    var instructions = new createjs.Text('Instructions (I)', font);
    instructions.x = canvas.width()/2 - instructions.getMeasuredWidth()/2;
    instructions.y = 250;

    instructions.addEventListener("mouseover", showInstructions);
    stage.enableMouseOver(20);

    menu.addChild(welcome, start, instructions);
    stage.addChild(menu);
    stage.update();
}


function handleClick(event) {
    console.log("testing");
}

function handleKey(event) {
    if (event.keyCode == 83) {
        console.log("start game");
    } else if (event.keyCode == 73) {
        console.log('show instructions');
    }
}

function choosePlayer(event) {
}

function showInstructions(event) {
    console.log("works");
    var show = new createjs.Text('Instructions');
    show.x = 200;
    show.y = 300;

    stage.addChild(show);
    stage.update();
}
