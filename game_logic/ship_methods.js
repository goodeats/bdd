function checkForShip(player, coordinates) {
  var shipPresent, ship;

  for (var i = 0; i < player.ships.length; i++) {
    var ship = player.ships[i];
    var shipPresent = ship.locations.filter(function (
      actualCoordinate
    ) {
      return (
        actualCoordinate[0] === coordinates[0] &&
        actualCoordinate[1] === coordinates[1]
      );
    })[0];

    if (shipPresent) {
      return true;
    }
  }
  return false;
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
