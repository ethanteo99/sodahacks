var canvas;
var stage;
var width = 1000;
var height = 600;
var font = '30px VT323'

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
