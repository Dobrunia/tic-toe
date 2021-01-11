const boardElem = document.getElementById('board');
class Board {
	winCombinations = [[0, 1, 2], 
			[3, 4, 5], 
			[6, 7, 8], 
			[0, 3, 6], 
			[1, 4, 7], 
			[2, 5, 8], 
			[0, 4, 8], 
			[2, 4, 6]];

	constructor() {
		this.board = [];
		this.board.length = 9;
		this.turn = 0;
		this.gameOver = false;
	}

	display() {
		let html = "";
		for (let i = 0; i < this.board.length; i++) {
			html += `<div id="item${i}" class="item"></div>`;
		}
		boardElem.innerHTML = html;
	}

	checkWin(i) {
		const type = this.board[i].type;
		console.log(type);
		for (let combination of this.winCombinations.filter(combination => combination.includes(i))){
			let count = 0;
			for (let idx of combination) {
				if (!this.board[idx] || this.board[i].type != type) {
					console.log(this.board[i].type);
					console.log(this.board[i].type != type);
					break;
				}
				count++;
			}
			if (count === 3) {
				return true; 
			}
		}
		return false;
	}

	nextTurn(i) {
		if (!this.gameOver && !this.board[i]) {
			this.board[i] = new Figure(this.turn % 2 ? type.CROSS : type.ZERO, i);
			this.board[i].display(true);
			this.turn++;
			if (this.checkWin(i)) {
				this.gameOver = true;
				console.log("GAME OVER");
			}
		}
	}
}


