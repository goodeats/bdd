var expect = require('chai').expect;

expect(true).to.be.true;

function titleCase(title) {
  var words = title.split(' ');
  var titleCasedWords = words.map(function (word) {
    return word[0].toUpperCase() + word.substring(1);
  });
  return titleCasedWords.join(' ');
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('patrick')).to.equal('Patrick');
expect(titleCase('the great mouse detective')).to.equal(
  'The Great Mouse Detective'
);
