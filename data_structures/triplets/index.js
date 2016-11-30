const data  = require('./data');

function MemoizedFactorial () {
  this.memo = [];
}

MemoizedFactorial.prototype.do = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  if (this.memo[number] ) {
    return this.memo[number];
  }
  this.memo[number] = this.do(number-1) * number;
  return this.memo[number];
}


function Triplets (arr) {
  this.arr = arr;
  this.length = 0;
  this.data = {};
}

Triplets.prototype.start = function() {
  while (this.arr.length > 0) {
    const number = this.arr.pop();
    if(!this.data[number]) {
      this.data[number] = true;
      this.length++;
    }
  }
  const factorial = new MemoizedFactorial();
  console.log(`${this.length} factorial = ${factorial.do(this.length)}`)
  console.log(`3 factorial = ${factorial.do(3)}`)
  console.log(`3 - ${this.length} factorial = ${factorial.do(this.length - 3)}`)
  console.log(factorial.do(this.length) / (factorial.do(3) * factorial.do(this.length-3)))
}

const triplets = new Triplets(data.split('\n')[1].split(' '))
triplets.start();
