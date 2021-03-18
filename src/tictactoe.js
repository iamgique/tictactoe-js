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
        this.alreadyTakenMsg = 'This field is already taken';
        this.samePlayerAreRunningMsg = 'The same player cannot take two turn in one time';
        this.rowAlreadyTakenMsg = 'row are taken by a player: ';
        this.colAlreadyTakenMsg = 'column are taken by a player: ';
        this.diagonalAlreadyTakenMsg = 'diagonal are taken by a player: ';
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
            return this.samePlayerAreRunningMsg;
        }

        if(this.isAlreadyTaken(row, col)) {
            return this.alreadyTakenMsg;
        }

        this.board[row][col] = player;

        if(this.rowIsAlreadyTaken()) {
            return this.rowAlreadyTakenMsg + player;
        }

        if(this.colIsAlreadyTaken()) {
            return this.colAlreadyTakenMsg + player;
        }

        if(this.diagonalIsAlreadyTaken()) {
            return this.diagonalAlreadyTakenMsg + player;
        }

        this.runningCount += 1;
        this.currentstate = player === 'O' ? 'X' : 'O';
    }

    isFirstPlayerState() {
        return this.currentstate === '';
    }

    setFirstPlayerState(player) {
        this.currentstate = player;
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

    diagonalIsAlreadyTaken() {
        return ((this.board[0][0] === 'O' && this.board[1][1] === 'O' && this.board[2][2] === 'O') || 
        (this.board[0][0] === 'X' && this.board[1][1] === 'X' && this.board[2][2] === 'X')) ||
        ((this.board[0][2] === 'O' && this.board[1][1] === 'O' && this.board[2][0] === 'O') || 
        (this.board[0][2] === 'X' && this.board[1][1] === 'X' && this.board[2][0] === 'X'));
    }
}

module.exports = TicTacToe;