const data = require('./data').split('\n');
const test = require('./test').split('\n');

function start(n) {
  if (n === 1) return false;
  if (n <= 3) return true;
  // if (!(n&1)) return false; // check even //BITWISE OPERATOR
  if (n % 2 === 0) return false;
  for (var div = 3; div <= Math.floor(Math.sqrt(n)); div += 2) {
    if ((n/div % 1) === 0) return false;
  }
  return true;
}

data.shift();
data.forEach((n) => start(n) ? console.log('Prime') : console.log('Not prime'));
