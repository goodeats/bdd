const { beforeEach, it } = require('mocha');

var expect = require('chai').expect;

describe('placeShip', () => {
  var placeShip =
    require('../game_logic/player_methods.js').placeShip;
  var player;

  beforeEach(function () {
    player = {
      ships: [
        {
          size: 1,
          locations: [],
        },
        {
          size: 2,
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
      ],
    };
  });

  it('should throw an error if no direction is specified', () => {
    var ship = player.ships[0];
    var coordinates = [0, 1];

    var handler = function () {
      placeShip(player, ship, coordinates);
    };

    expect(handler).to.throw(Error);
    expect(handler).to.throw('Missing direction');
  });
});
