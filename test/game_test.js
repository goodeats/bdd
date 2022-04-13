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

  describe('takeTurn', () => {
    var takeTurn = require('../game_logic/game_instance').takeTurn;
    var guess, player;

    beforeEach(function () {
      guess = function () {
        return [0, 0];
      };
      player = {
        ships: [
          {
            locations: [[0, 0]],
            damage: [],
          },
        ],
      };
    });

    it('should return false if the game ends', function () {
      var actual = takeTurn(player, guess);
      expect(actual).to.be.false;
    });

    // testing async function
    function saveGame(callback) {
      setTimeout(function () {
        callback();
      }, 1000);
    }

    describe('saveGame', () => {
      it('should update save status', (done) => {
        var status = 'game not saved....';
        saveGame(function () {
          status = 'game saved!';
          expect(status).to.equal('game saved!');
          done();
        });
      });
    });
  });
});
