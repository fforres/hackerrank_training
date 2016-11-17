const data = require('./data').split('\n');

function Median(){
  this.refArr = [];
  this.sortedArr = [];
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
Median.prototype.sortDown = function() {
  let currentIndex = this.refArr.length - 1;
    this.sortedArr.push(this.refArr[0]);
    const aux = this.refArr[0];
    this.refArr[0] = this.refArr[currentIndex];
    this.refArr[currentIndex] = aux;
    this.bubbleDown();
  return this;
}

Median.prototype.bubbleDown = function() {
  let index = 0;
  while ((index*2)+1 < this.refArr.length) {
    if (this.refArr[(index*2) + 2] > this.refArr[(index*2) + 1]) {
      const aux = this.refArr[(index*2) + 2];
      this.refArr[(index*2) + 2] = this.refArr[index];
      this.refArr[index] = aux;
      index = (index*2) + 2;
    } else {
      const aux = this.refArr[(index*2) + 1];
      this.refArr[(index*2) + 1] = this.refArr[index];
      this.refArr[index] = aux;
      index = (index*2) + 1;
    }
  }
  return this;
}
Median.prototype.add = function (el) {
  this.refArr.push(el)
  this.bubbleUp(this.refArr.length - 1);
  return this;
}
Median.prototype.calculateMedian = function(){
  let calculatedMedian = 0;
  if (this.sortedArr.length === 0) {
    calculatedMedian = 0;
  } else if (this.sortedArr.length % 2) {
    // impar
    const middle = (this.sortedArr.length + 1) / 2;
    calculatedMedian = this.sortedArr[middle]/2;
  } else {
    // PAR
    const middle = this.sortedArr.length / 2;
    calculatedMedian = (this.sortedArr[middle] + this.sortedArr[middle - 1]) / 2;
  }
  console.log(calculatedMedian);
}

function start(data) {
  const median = new Median();
  for (let i = parseInt(data.shift()); i > 0; i--) {
    const toAdd = parseInt(data.shift());
    console.log(toAdd);
    median.add(toAdd).sortDown().calculateMedian();
    console.log("SORTED!!!!", median.sortedArr)
  }
}

start(data);
