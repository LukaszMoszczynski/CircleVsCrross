let fields = Array.prototype.slice.call(document.getElementsByClassName('field-button'));
	round = 0;
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
		alert("wygrana X");

	}  else if (fields[0].innerText === fields[1].innerText && fields[1].innerText === fields[2].innerText && fields[2].innerText === "O" ||
		fields[3].innerText === fields[4].innerText && fields[4].innerText === fields[5].innerText && fields[5].innerText === "O"||
		fields[6].innerText === fields[7].innerText && fields[7].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[0].innerText === fields[3].innerText && fields[3].innerText === fields[6].innerText && fields[6].innerText === "O"||
		fields[1].innerText === fields[4].innerText && fields[4].innerText === fields[7].innerText && fields[7].innerText === "O"||
		fields[2].innerText === fields[5].innerText && fields[5].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[0].innerText === fields[4].innerText && fields[4].innerText === fields[8].innerText && fields[8].innerText === "O"||
		fields[2].innerText === fields[4].innerText && fields[4].innerText === fields[6].innerText && fields[6].innerText === "O" ) {
		alert("wygrana O");
	}

	else if (round == 9 ) {
		alert("remis");
	}
	return
}




