const fields = Array.prototype.slice.call(document.getElementsByClassName('field-button'));
let round = 0;


function insert() {			
	for (let i = 0; i < fields.length; i++) {
		fields[i].addEventListener('click', function() {
			if (fields[i].innerText === "") {

				if (round%2 === 0) {
					fields[i].innerHTML = "O";
				}

				if (round%2 !== 0) {
					fields[i].innerHTML = "X";
				}

				if (round >= 4) {
					winCheck();
				}

				round++;

			} else {
				Alert.render("Pick empty field!");
			}		
		});				
	};		
	return;
}
insert();

function gamer(withPlayer){
	Alert.render( withPlayer.name + " win!" );
	gameState = 'ended';
	gameRound++;
	setGameElements();
	withPlayer.score++;
	setGamePoints();
}

function winCheck() {
	if (fields[0].innerText === fields[1].innerText && fields[1].innerText === fields[2].innerText && fields[2].innerText === "X" ||
		fields[3].innerText === fields[4].innerText && fields[4].innerText === fields[5].innerText && fields[5].innerText === "X"||
		fields[6].innerText === fields[7].innerText && fields[7].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[0].innerText === fields[3].innerText && fields[3].innerText === fields[6].innerText && fields[6].innerText === "X"||
		fields[1].innerText === fields[4].innerText && fields[4].innerText === fields[7].innerText && fields[7].innerText === "X"||
		fields[2].innerText === fields[5].innerText && fields[5].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[0].innerText === fields[4].innerText && fields[4].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[2].innerText === fields[4].innerText && fields[4].innerText === fields[6].innerText && fields[6].innerText === "X" ){
		
		setTimeout(function(){
			gamer(player2);
		}, 500);

	}else if(fields[0].innerText === fields[1].innerText && fields[1].innerText === fields[2].innerText && fields[2].innerText === "O" ||
		fields[3].innerText === fields[4].innerText && fields[4].innerText === fields[5].innerText && fields[5].innerText === "O"||
		fields[6].innerText === fields[7].innerText && fields[7].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[0].innerText === fields[3].innerText && fields[3].innerText === fields[6].innerText && fields[6].innerText === "O"||
		fields[1].innerText === fields[4].innerText && fields[4].innerText === fields[7].innerText && fields[7].innerText === "O"||
		fields[2].innerText === fields[5].innerText && fields[5].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[0].innerText === fields[4].innerText && fields[4].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[2].innerText === fields[4].innerText && fields[4].innerText === fields[6].innerText && fields[6].innerText === "O" ) {
		
		setTimeout(function(){
		gamer(player);
		}, 500);

	}else if(fields[0].innerText && fields[1].innerText && fields[2].innerText && fields[3].innerText && fields[4].innerText && fields[5].innerText && fields[6].innerText && fields[7].innerText && fields[8].innerText !== "" ) {
		
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
	newGameElem.addEventListener('click', pickPlayers);
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

// prompt functions 
function changeText(val){
	playerNameElem.innerHTML = val;	
	if (val !== "") {
 		player.name = val;
 	} else {
 		player.name = "Player 1";
 	}

}

function changeText2(val){
	player2NameElem.innerHTML = val;
	if (val !== "") {
 		player2.name = val;
 	} else {
 		player2.name = "Player 2";
 	}
}
///

function pickPlayers() {
	Prompt.render('Please enter your name', 'changeText').then(function () {
		Prompt.render('Please enter your name', 'changeText2').then(function () {
			newGame();
		});
	});
}

function newGame() {
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

function nextGame() {
	gameState='started';
	setGameElements();
}

const player1PointsElem = document.getElementById('player1Score');
	player2PointsElem = document.getElementById('player2Score');

function setGamePoints() {
    player1PointsElem.innerHTML = player.score;
    player2PointsElem.innerHTML = player2.score;
}


//Custom Alert & Prompt


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
		document.getElementById('dialogboxhead').innerHTML = "Result";
	    document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button id="closeOk" onclick="Alert.ok()"><div class="insider"></div>OK</button>';

		document.addEventListener("keyup", function(event) {		 
			event.preventDefault();		
			if (event.keyCode === 13) {
				document.getElementById("closeOk").click();
		  }
		});	
	}
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}

var Alert = new CustomAlert();


function CustomPrompt() {
	var self = this;
	this.render = function (dialog, func) {
		return new Promise(function (resolve, reject) {
			var winW = window.innerWidth;
			var winH = window.innerHeight;
			var dialogoverlay = document.getElementById('dialogoverlay');
			var dialogbox = document.getElementById('dialogbox');
			dialogoverlay.style.display = "block";
			dialogoverlay.style.height = winH + "px";
			dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
			dialogbox.style.top = "100px";
			dialogbox.style.display = "block";
			document.getElementById('dialogboxhead').innerHTML = "Player name";
			document.getElementById('dialogboxbody').innerHTML = dialog;
			document.getElementById('dialogboxbody').innerHTML += '<input id="prompt_value1">';
			document.getElementById('dialogboxfoot').innerHTML = '<button id="closeOK"><div class="insider"></div>OK</button> <button id="closeCancel"><div class="insider"></div>Cancel</button>';

			var closeCancel = document.getElementById('closeCancel');
			var closeOk = document.getElementById('closeOK');
			var prompt_value1 = document.getElementById('prompt_value1');

			prompt_value1.focus();

////// alow enter and esc on prompt
			prompt_value1.addEventListener("keyup", function(event) {			 
			  event.preventDefault();		
			  if (event.keyCode === 13) {
			    document.getElementById("closeOK").click();
			  }
			  if (event.keyCode === 27) {
			    document.getElementById("closeCancel").click();
			  }
			});


			closeOk.addEventListener('click', function() {
				self.ok(func);
				resolve();
			});
			
			closeCancel.addEventListener('click', function() {
				self.cancel();
				reject();
			});

		});
	}
	this.cancel = function () {
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
	this.ok = function (func) {
		prompt_value1 = document.getElementById('prompt_value1').value;
		window[func](prompt_value1);
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}

var Prompt = new CustomPrompt();



