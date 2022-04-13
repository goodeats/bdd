const { fire } = require('./ship_methods');

function placeShip(player, ship, startingCoordinates, direction) {
  if (!direction) throw Error('Missing direction');

  // some code here
}

function getRandomCoordinates() {
  var x = Math.floor(Math.random() * 9);
  var y = Math.floor(Math.random() * 9);
  return [x, y];
}

function getRandomDirection() {
  return Math.random() > 0.5 ? 'horizontal' : 'vertical';
}

function computerFire(player) {
  fire(player, getRandomCoordinates());
}

function computerPlaceShip(player, ship) {
  placeShip(
    player,
    ship,
    getRandomCoordinates(),
    getRandomDirection()
  );
}

module.exports = {
  placeShip: placeShip,
  computerFire: computerFire,
  computerPlaceShip: computerPlaceShip,
};
