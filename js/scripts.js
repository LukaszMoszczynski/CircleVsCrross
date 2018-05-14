const fields = Array.prototype.slice.call(document.getElementsByClassName('field-button'));
let round = 0;

function insert () {			
	for (let i = 0; i < fields.length; i++) {
		fields[i].addEventListener('click', function() {
			if (fields[i].innerText === "") {

				if ( round%2 === 0) {
					fields[i].innerHTML = "O";
				}

				if ( round%2 !== 0) {
					fields[i].innerHTML = "X";
				}

				if (round >= 4) {
					winCheck();
				}

				round++;

			} else {
				Alert.render("Pick empty field");
			}		
		});				
	};		
	return;
}
insert();

function winCheck() {
	if ( fields[0].innerText === fields[1].innerText && fields[1].innerText === fields[2].innerText && fields[2].innerText === "X" ||
		fields[3].innerText === fields[4].innerText && fields[4].innerText === fields[5].innerText && fields[5].innerText === "X"||
		fields[6].innerText === fields[7].innerText && fields[7].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[0].innerText === fields[3].innerText && fields[3].innerText === fields[6].innerText && fields[6].innerText === "X"||
		fields[1].innerText === fields[4].innerText && fields[4].innerText === fields[7].innerText && fields[7].innerText === "X"||
		fields[2].innerText === fields[5].innerText && fields[5].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[0].innerText === fields[4].innerText && fields[4].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[2].innerText === fields[4].innerText && fields[4].innerText === fields[6].innerText && fields[6].innerText === "X" ){
		
		setTimeout(function(){
		Alert.render( player2.name + " win!" );
		gameState = 'ended';
		gameRound++;
		setGameElements();
		player2.score++;
		setGamePoints();
		}, 500);

	}else if  (fields[0].innerText === fields[1].innerText && fields[1].innerText === fields[2].innerText && fields[2].innerText === "O" ||
		fields[3].innerText === fields[4].innerText && fields[4].innerText === fields[5].innerText && fields[5].innerText === "O"||
		fields[6].innerText === fields[7].innerText && fields[7].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[0].innerText === fields[3].innerText && fields[3].innerText === fields[6].innerText && fields[6].innerText === "O"||
		fields[1].innerText === fields[4].innerText && fields[4].innerText === fields[7].innerText && fields[7].innerText === "O"||
		fields[2].innerText === fields[5].innerText && fields[5].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[0].innerText === fields[4].innerText && fields[4].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[2].innerText === fields[4].innerText && fields[4].innerText === fields[6].innerText && fields[6].innerText === "O" ) {
		
		setTimeout(function(){
		Alert.render( player.name + " win!" )
		gameState = 'ended';
		gameRound++;
		setGameElements();
		player.score++;
		setGamePoints();
		}, 500);

	}else if ( fields[0].innerText && fields[1].innerText && fields[2].innerText && fields[3].innerText && fields[4].innerText && fields[5].innerText && fields[6].innerText && fields[7].innerText && fields[8].innerText !== "" ) {
		
		setTimeout(function(){
		Alert.render("tie!");
		gameState = 'ended';
		gameRound++;
		setGameElements();
		}, 500);
	}
	return;
}


const newGameElem = document.getElementById('newGame');
	newGameElem.addEventListener('click', newGame);
	nextGameElem = document.getElementById('nextRound');
	nextGameElem.addEventListener('click', nextGame);

let gameState = 'notStarted';
let	player = {
		name: "",
		score: 0
	},
	player2 = {
		name: "",
		score: 0
	};
let	gameRound = 0;

const field = document.getElementById('gameBoard');
	player1Elem = document.getElementById('player1');
	player2Elem = document.getElementById('player2');


function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = "none";
			nextGameElem.style.display = "none";
			field.style.display = "flex";
			field.style.alignItems = "center";
			player1Elem.style.display = "block";
			player2Elem.style.display = "block";
			round = 0;
			break;

		case 'ended':
			newGameElem.style.display ="block";
			for ( let i = 0; i < fields.length; i++){
				fields[i].innerText = "";
			}
			round = 0;

		case 'notStarted':
		default:
			newGameElem.style.display = "block";
			field.style.display = "none";
			if (gameRound > 0) {
				nextGameElem.style.display = "block";
				player1Elem.style.display = "block";
				player2Elem.style.display = "block";
			} else {
				nextGameElem.style.display = "none";
				player1Elem.style.display = "none";
				player2Elem.style.display = "none";
			}			
	}
}
setGameElements();

const playerNameElem = document.getElementById('player1Name');
	player2NameElem = document.getElementById('player2Name');

function nextGame() {
	gameState='started';
	setGameElements();
}
////////////////


function changeText(val){
	playerNameElem.innerHTML = val;	
}

function changeText2(val2){
	player2NameElem.innerHTML = val2;
}
/////////

function newGame() {
	//player.name = Prompt.render('Please enter your name', 'changeText');
	player.name = prompt( "Please enter your name", "Player 1" );
	//player2.name = Prompt.render('Please enter your name', 'changeText2');
	player2.name = prompt( "Please enter your name", "Player 2" );
	if (player.name && player2.name) {
		gameState = "started";
		gameRound = 0;
		setGameElements();
		playerNameElem.innerHTML = player.name;
		player2NameElem.innerHTML = player2.name;
		player.score = player2.score = 0;
		setGamePoints();
	}
}
///////////
const player1PointsElem = document.getElementById('player1Score');
	player2PointsElem = document.getElementById('player2Score');

function setGamePoints() {
    player1PointsElem.innerHTML = player.score;
    player2PointsElem.innerHTML = player2.score;
}


///////////


function CustomAlert(){
	this.render = function(dialog){
		var winW = window.innerWidth;
	    var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
	    dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    dialogbox.style.top = "100px";
	    dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
	    document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
	}
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}

var Alert = new CustomAlert();

var prompt_value1 = "";

function CustomPrompt(){
	this.render = function(dialog, func){
		var winW = window.innerWidth;
	    var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
	    var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
	    dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
	    dialogbox.style.top = "100px";
	    dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "A value is required";
	    document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxbody').innerHTML += '<br><input id="prompt_value1" placeholder="type your name">';
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Prompt.ok(\''+func+'\')">OK</button> <button onclick="Prompt.cancel()">Cancel</button>';
	}
	this.cancel = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
	this.ok = function(func){
		prompt_value1 = document.getElementById('prompt_value1').value;
		window[func](prompt_value1);
		console.log(prompt_value1);
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Prompt = new CustomPrompt();



