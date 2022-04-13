var fire = require('./ship_methods').fire;

function checkGameStatus(players) {
  return false;
}

function takeTurn(oposingPlayer, guessFunction) {
  var coordinates = guessFunction();
  fire(oposingPlayer, coordinates);
  var gameOver = checkGameStatus();
  return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;
