const data = require('./data').split('\n').map(Number);
const test = require('./test').split('\n');
data.shift();

const memo = [];
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;
function start (n) {
  if(memo[n]) return memo[n];
  const data = (start(n-1) + start(n-2) + start(n-3))
  memo[n] = data;
  return memo[n];
}
while(data.length) {
  console.log(start(data.shift()));
}
