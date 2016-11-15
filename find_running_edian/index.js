const data = require('./data').split('\n');

function Median(){
  this.refArr = [];
  this.biggest = 0;
  this.refOject = {};
}

Median.prototype.bubbleUp = function(index) {
  const parentIndex = Math.floor((index - 1) / 2);
  if (this.refArr[index] > this.refArr[parentIndex]) {
    const aux = this.refArr[parentIndex];
    this.refArr[parentIndex] = this.refArr[index];
    this.refArr[index] = aux;
    this.bubbleUp(parentIndex);
  }
}
Median.prototype.add = function (el) {
  this.refArr.push(el)
  this.bubbleUp(this.refArr.length - 1);
  return this;
}
Median.prototype.calculateMedian = function(){
  let calculatedMedian = 0;
  if (this.refArr.length === 0) {
    calculatedMedian = 0;
  } else if (this.refArr.length % 2) {
    // impar
    const middle = (this.refArr.length + 1) / 2;
    calculatedMedian = this.refArr[middle]/2;
  } else {
    // PAR
    const middle = this.refArr.length / 2;
    calculatedMedian = (this.refArr[middle] + this.refArr[middle - 1]) / 2;
  }
  console.log(calculatedMedian);
}

function start(data) {
  const median = new Median();
  for (let i = parseInt(data.shift()); i > 0; i--) {
    median.add(parseInt(data.shift())).calculateMedian();
  }
}

start(data);

// const parent = Math.floor((i-1)/2);
        //                0
        //       1                  2
        //   3       4         5         6
        // 7   8   9   10   11   12   13   14
