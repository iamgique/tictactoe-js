const TicTacToe = require('../tictactoe');

let game;

beforeEach(() => {
    game = new TicTacToe();
});

it('a game has nine fields in a 3x3 grid', () => {
    expect(game.board.length).toEqual(3);
    expect(game.board[0].length).toEqual(3);
    expect(game.board[1].length).toEqual(3);
    expect(game.board[2].length).toEqual(3);
});

it('there are two players in the game (X and O)', () => {
    expect(game.player.length).toEqual(2);
    expect(game.player[0]).toEqual('O');
    expect(game.player[1]).toEqual('X');
});

it('a game is over when all fields are taken', () => {
    // [ X O X ]
    // [ O X O ]
    // [ O X O ]
    game.running(game.player[1], 0, 0);
    game.running(game.player[0], 0, 1);
    game.running(game.player[1], 0, 2);
    game.running(game.player[0], 1, 0);
    game.running(game.player[1], 1, 1);
    game.running(game.player[0], 1, 2);
    game.running(game.player[0], 2, 0);
    game.running(game.player[1], 2, 1);
    game.running(game.player[0], 2, 2);
    expect(game.isOver()).toEqual(true);
});

it('a player can take a field if not already taken', () => {
    game.running(game.player[1], 0, 0);
    expect(game.running(game.player[0], 0, 0)).toEqual('This field is already taken');
});

it('players take turns taking fields until the game is over', () => {
    game.running(game.player[1], 0, 0);
    expect(game.running(game.player[1], 1, 1)).toEqual('error');
});

it('a game is over when all fields in a row are taken by a player', () => {
    game.running(game.player[1], 0, 0);
    game.running(game.player[0], 1, 0);
    game.running(game.player[1], 0, 1);
    game.running(game.player[0], 1, 1);
    expect(game.running(game.player[1], 0, 2)).toEqual('row are taken by a player');
});

it('a game is over when all fields in a column are taken by a player', () => {
    game.running(game.player[1], 0, 0);
    game.running(game.player[0], 0, 1);
    game.running(game.player[1], 1, 0);
    game.running(game.player[0], 1, 1);
    expect(game.running(game.player[1], 2, 0)).toEqual('column are taken by a player');
});

it('a game is over when all fields in a diagonal are taken by a player', () => {
    
});

/*
In random order
- a game has nine fields in a 3x3 grid
- there are two players in the game (X and O)
- a game is over when all fields are taken
- a player can take a field if not already taken
- a game is over when all fields in a row are taken by a player
- a game is over when all fields in a column are taken by a player
- a game is over when all fields in a diagonal are taken by a player


*/