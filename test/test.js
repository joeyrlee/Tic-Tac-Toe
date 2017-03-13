var assert = require('assert');
var Board = require('../index.js')

describe('Tictactoe board', function() {
	var myBoard = new Board();

  describe('new Board', function() {
    it('should return a new empty board', function() {
      assert.deepEqual([[],[],[]], myBoard.board);
    });
  });

  describe('makeMove method', function() {
  	it ('should allow each player to make moves', function() {
  		assert.equal();
  	})
  });

  describe('checkWinStatus method', function() {
  	it ('should check after a winning move and announce which player won', function() {
  		assert.equal();
  	})
  });
});