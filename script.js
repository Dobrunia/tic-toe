const start = document.getElementById('start');
const play = document.getElementById('play');
const board = document.getElementById('board');
const restart = document.getElementById('restart');
const score = document.getElementById('score');
const scoreTeam = document.getElementById('score-team');

let ITEMS = [["item0", "item1", "item2"], 
			["item3", "item4", "item5"], 
			["item6", "item7", "item8"], 
			["item0", "item3", "item6"], 
			["item1", "item4", "item7"], 
			["item2", "item5", "item8"], 
			["item0", "item4", "item8"], 
			["item2", "item4", "item6"]];
let turn = 1;
let score0 = 0;
let scoreX = 0;

let myBoard = new Board();
myBoard.display();

play.addEventListener('click', () => {
	start.classList.add('disp');
	board.classList.remove('disp');
	restart.classList.remove('disp');
	score.classList.remove('disp');
});

restart.addEventListener('click', () => reload() );

for (let i = 0; i < 9; i++) {

	// document.getElementById(`item${i}`).addEventListener('mouseover', () => {

	// 	if (document.getElementById(`item${i}`).innerHTML == '') {

	// 		if (turn % 2 == 0) {

	// 			document.getElementById(`item${i}`).style.backgroundImage = "url('x.svg')";
					
	// 		} else {

	// 			document.getElementById(`item${i}`).style.backgroundImage = "url('0.svg')";
					
	// 		}

	// 	}

	// });

	// document.getElementById(`item${i}`).addEventListener('mouseleave', () => document.getElementById(`item${i}`).style.backgroundImage = "");

	document.getElementById(`item${i}`).addEventListener('click', () => {myBoard.nextTurn(i)});
};

let check = () => {

	ITEMS.forEach(item => {

		if (((document.getElementById(`${item[0]}`).innerHTML == document.getElementById(`${item[1]}`).innerHTML) && (document.getElementById(`${item[0]}`).innerHTML == document.getElementById(`${item[2]}`).innerHTML)) && (document.getElementById(`${item[0]}`).innerHTML !== '')) {
			
			document.getElementById(`${item[0]}`).style.backgroundColor = "green";
			document.getElementById(`${item[1]}`).style.backgroundColor = "green";
			document.getElementById(`${item[2]}`).style.backgroundColor = "green";

			(turn % 2 == 0) ? score0++ : scoreX++;

			setTimeout(reload, 1000);

			scoreTeam.value = `${score0} : ${scoreX}`;
		}
	});
};

let reload = () => {

	turn = 1;

	for (let i = 0; i < 9; i++) {

		document.getElementById(`item${i}`).style.backgroundColor = "#fff";
		document.getElementById(`item${i}`).innerHTML = '';
	}
}
//https://svgontheweb.com/ru/