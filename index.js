class Board {
	constructor() {
		//board will consist of rows and columns in a board[row][col] fashion
		this.board = [[],[],[]];
		this.markers['_', 'X', 'O'];
	}
	
	//checks if board piece is empty (defined) and if not, returns '_' placeholder 
	print(idx1, idx2) {
		return this.board[idx1][idx2]
		  ?	this.board[idx1][idx2]
		  : '_'
	}

	showBoard() {
		console.log('*******\n');
		console.log('*' + this.print(0,0) || '_' + '*' + this.print(0,1) || '_' + '*' + this.print(0,2) || '_' + '*\n');
		console.log('*' + this.print(1,0) || '_' + '*' + this.print(1,1) || '_' + '*' + this.print(1,2) || '_' + '*\n');
		console.log('*' + this.print(2,0) || '_' + '*' + this.print(2,1) || '_' + '*' + this.print(2,2) || '_' + '*\n');
		console.log('*******');
	}

	checkWinStatus() {
		//horizontal axis - first row
		if (!!this.board[0][0] && this.board[0][0] === this.board[0][1] && this.board[0][0] === this.board[0][2]) {
			return 'Player ' + this.board[0][0] + ' Wins!';
		//horizontal axis - second row
		} else if (!!this.board[1][0] && this.board[1][0] === this.board[1][1] && this.board[1][0] === this.board[1][2]) {
			return 'Player ' + this.board[1][0] + ' Wins!';
		//horizontal axis - third row
		} else if (!!this.board[2][0] && this.board[2][0] === this.board[2][1] && this.board[2][0] === this.board[2][2]) {
			return 'Player ' + this.board[1][0] + ' Wins!';

		//vertical axis - first column
		} else if (!!this.board[0][0] && this.board[0][0] === this.board[1][0] && this.board[0][0] === this.board[2][0]) {
			return 'Player ' + this.board[1][0] + ' Wins!';
		//vertical axis - second column
		} else if (!!this.board[0][1] && this.board[0][1] === this.board[1][1] && this.board[0][1] === this.board[2][1]) {
			return 'Player ' + this.board[1][0] + ' Wins!';
		//vertical axis - third column
		} else if (!!this.board[0][2] && this.board[0][2] === this.board[1][2] && this.board[0][2] === this.board[2][2]) {
			return 'Player ' + this.board[1][0] + ' Wins!';

		//diagonal axis - top left to bottom right
		} else if (!!this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
			return 'Player ' + this.board[1][0] + ' Wins!';
		//diagonal axis - top right to bottom left
		} else if (!!this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[2][0] === this.board[2][0]) {
			return 'Player ' + this.board[1][0] + ' Wins!';
		}
	}

	makeMove(playerNum, idx1, idx2) {
		let playerMarker = this.markers[playerNum];
		//toggle the indicated board piece to the corresponding playerMarker
		this.board[idx1][idx2] = playerMarker;
		this.checkWinStatus() ? 'Congratulations!' : this.showBoard()
	}
}

module.exports = Board;