const { checkGameStatus } = require('../game_logic/game_instance');

var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', () => {
  describe('checkGameStatus', () => {
    it('should tell me when the game is over', function () {
      var players = [
        {
          ships: [
            {
              locations: [[0, 0]],
              damage: [[0, 0]],
            },
          ],
        },
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });

  it('some other stuff', function () {});
});
