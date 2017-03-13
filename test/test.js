var assert = require('assert');
var Board = require('../index.js')

describe('Tictactoe', function() {
  describe('new Board', function() {
    it('should return a new empty board', function() {
      assert.deepEqual([[],[],[]], (new Board()).board);
    });
  });
});