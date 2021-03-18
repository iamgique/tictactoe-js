class TicTacToe {

    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.player = ['O', 'X'];
        this.runningCount = 1;
        this.currentstate = '';
    }

    board() {
        return this.board();
    }

    player() {
        return this.player();
    }

    running(player, row, col) {
        if(this.isOver()){
            return true;
        }

        if(this.isFirstPlayerState()) {
            this.setFirstPlayerState(player);
        }

        if(this.isNotCorrectCurrentState(player)) {
            return 'error';
        }

        if(this.isAlreadyTaken(row, col)) {
            return 'This field is already taken';
        }

        this.board[row][col] = player;
        this.runningCount += 1;
        this.currentstate = player === 'O' ? 'X' : 'O';

        if(this.rowIsAlreadyTaken()) {
            return 'row are taken by a player';
        }

        if(this.colIsAlreadyTaken()) {
            return 'column are taken by a player';
        }
    }

    isFirstPlayerState() {
        return this.currentstate === '';
    }

    setFirstPlayerState(player) {
        if(this.currentstate === '') {
            this.currentstate = player;
        }
    }

    isOver() {
        return this.runningCount === 9;
    }

    isAlreadyTaken(row, col) {
        return this.board[row][col] !== '';
    }

    isNotCorrectCurrentState(player) {
        return this.currentstate !== player;
    }

    rowIsAlreadyTaken() {
        for(let i = 0; i < 3; i++) {
            if((this.board[i][0] === 'O' && this.board[i][1] === 'O' && this.board[i][2] === 'O') || 
                (this.board[i][0] === 'X' && this.board[i][1] === 'X' && this.board[i][2] === 'X')) {
                return true;
            }
        }
    }

    colIsAlreadyTaken() {
        for(let i = 0; i < 3; i++) {
            if((this.board[0][i] === 'O' && this.board[1][i] === 'O' && this.board[2][i] === 'O') || 
                (this.board[0][i] === 'X' && this.board[1][i] === 'X' && this.board[2][i] === 'X')) {
                return true;
            }
        }
    }
}

module.exports = TicTacToe;