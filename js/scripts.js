const fields = Array.prototype.slice.call(document.getElementsByClassName('field-button'));
let round = 0;
	console.log(fields);


function insert () {			
	for ( let i = 0; i < fields.length; i++) {
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
				alert("Pole zajęte");
			}		
		});				
	};		
	return
}
insert();
/*
function winCheck() {
	
	if (fields[0].innerText === fields[1].innerText && fields[1].innerText === fields[2].innerText ||
		fields[3].innerText === fields[4].innerText && fields[4].innerText === fields[5].innerText ||
		fields[6].innerText === fields[7].innerText && fields[7].innerText === fields[8].innerText ||
		fields[0].innerText === fields[3].innerText && fields[3].innerText === fields[6].innerText ||
		fields[1].innerText === fields[4].innerText && fields[4].innerText === fields[7].innerText ||
		fields[2].innerText === fields[5].innerText && fields[5].innerText === fields[8].innerText ||
		fields[0].innerText === fields[4].innerText && fields[4].innerText === fields[8].innerText ||
		fields[2].innerText === fields[4].innerText && fields[4].innerText === fields[6].innerText) {
		alert("wygrana");
	}  else if (round == 9 ) {
		alert("remis");
	}
	return
}
*/
function winCheck() {
	if (fields[0].innerText === fields[1].innerText && fields[1].innerText === fields[2].innerText && fields[2].innerText === "X" ||
		fields[3].innerText === fields[4].innerText && fields[4].innerText === fields[5].innerText && fields[5].innerText === "X"||
		fields[6].innerText === fields[7].innerText && fields[7].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[0].innerText === fields[3].innerText && fields[3].innerText === fields[6].innerText && fields[6].innerText === "X"||
		fields[1].innerText === fields[4].innerText && fields[4].innerText === fields[7].innerText && fields[7].innerText === "X"||
		fields[2].innerText === fields[5].innerText && fields[5].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[0].innerText === fields[4].innerText && fields[4].innerText === fields[8].innerText && fields[8].innerText === "X"||
		fields[2].innerText === fields[4].innerText && fields[4].innerText === fields[6].innerText && fields[6].innerText === "X" ){
		alert("wygrana  " + player2.name);
		gameState = "ended";
		gameRound++;
		setGameElements();
		player2.score++;
		setGamePoints();

	}  else if (fields[0].innerText === fields[1].innerText && fields[1].innerText === fields[2].innerText && fields[2].innerText === "O" ||
		fields[3].innerText === fields[4].innerText && fields[4].innerText === fields[5].innerText && fields[5].innerText === "O"||
		fields[6].innerText === fields[7].innerText && fields[7].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[0].innerText === fields[3].innerText && fields[3].innerText === fields[6].innerText && fields[6].innerText === "O"||
		fields[1].innerText === fields[4].innerText && fields[4].innerText === fields[7].innerText && fields[7].innerText === "O"||
		fields[2].innerText === fields[5].innerText && fields[5].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[0].innerText === fields[4].innerText && fields[4].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[2].innerText === fields[4].innerText && fields[4].innerText === fields[6].innerText && fields[6].innerText === "O" ) {
		alert("wygrana " + player.name);
		gameState = "ended";
		gameRound++;
		setGameElements();
		player.score++;
		setGamePoints();

	} else if (fields[0].innerText && fields[1].innerText && fields[2].innerText && fields[3].innerText && fields[4].innerText && fields[5].innerText && fields[6].innerText && fields[7].innerText && fields[8].innerText !== "") {
		alert("remis");
		gameState = "ended";
		gameRound++;
		setGameElements();
	}
	return
}


const newGameElem = document.getElementById("newGame");
      newGameElem.addEventListener("click", newGame);
      nextGameElem = document.getElementById("nextRound");
      nextGameElem.addEventListener("click", nextGame);

let gameState = "notStarted",
	player = {
		name: "",
		score: 0
	},
	player2 = {
		name: "",
		score: 0
	};
	gameRound = 0;
const field = document.getElementById('gameBoard');
	player1Elem = document.getElementById("player1");
	player2Elem = document.getElementById("player2");


function setGameElements() {
	switch(gameState) {
		case "started":
			newGameElem.style.display = "none";
			nextGameElem.style.display = "none";
			field.style.display = "flex";
			field.style.alignItems = "center";
			player1Elem.style.display = "block";
			player2Elem.style.display = "block";
			round = 0;
			break;
		case "ended":

			newGameElem.style.display ="block";
			for ( let i = 0; i < fields.length; i++){
				fields[i].innerText = "";
			}
			round = 0;
		case "notStarted":
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
	gameState="started";
	setGameElements();
}

function newGame() {
	player.name = prompt("Please enter your name", "Player 1");
	player2.name = prompt("Please enter your name", "Player 2");
	if (player.name && player2.name) {
		gameState="started";
		gameRound = 0;
		setGameElements();
		playerNameElem.innerHTML = player.name;
		player2NameElem.innerHTML = player2.name;
		player.score = player2.score = 0;
		setGamePoints();
	}
}
const player1PointsElem = document.getElementById("player1Score");
	player2PointsElem = document.getElementById("player2Score");

function setGamePoints() {
    player1PointsElem.innerHTML = player.score;
    player2PointsElem.innerHTML = player2.score;
}