const data = require('./data');
const result = require('./result').split('\n');
console.log(result.length)

function Cube (size) {
  this.data = new Array(size);
  for (let i = 0; i < size; i++) {
    this.data[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      this.data[i][j] = new Array(size);
    }
  }
  this.subMatrixesSize = 3;
  this.subMatrixes = {};
  for (let i = 0; i < size; i += this.subMatrixesSize) {
    this.subMatrixes[`${i}${i}${i}`] = 0;
  }
  this.result = [];
}

Cube.prototype.update = function (arguments) {
  const coords = arguments;
  if (!this.data[coords[0]]) {
    this.data[coords[0]] = [];
  }
  if (!this.data[coords[0]][coords[1]]) {
    this.data[coords[0]][coords[1]] = [];
  }
  if (!this.data[coords[0]][coords[1]][coords[2]]){
    this.data[coords[0]][coords[1]][coords[2]] = 0;
  }
  this.data[coords[0]][coords[1]][coords[2]] = parseInt(coords[3]);
}

Cube.prototype.query = function (arguments) {
  let sum = 0;
  const coords = arguments
  for(let row = parseInt(coords[0]); row <= parseInt(coords[3]); row++ ) {
    for(let col = parseInt(coords[1]); col <= parseInt(coords[4]); col++ ) {
      for(let time = parseInt(coords[2]); time <= parseInt(coords[5]); time++ ) {
        if(!this.data[row]) {
          this.data[row] = [];
        }
        if(!this.data[row][col]) {
          this.data[row][col] = [];
        }
        if(!this.data[row][col][time]) {
          this.data[row][col][time] = 0;
        }
        sum = sum + this.data[row][col][time];
      }
    }
  }
  this.result.push(sum);
}

function processData(input) {
  const data = input.split('\n');
  const cubes = parseInt(data.shift());
  const consolidated = [];
  for(let i = cubes-1; i > 0; i-- ){
    const temp = data.shift().split(' ');
    const cube = new Cube(parseInt(temp[0]));
    const queries = parseInt(temp[1]);
    for (let query = 0; query < queries; query++) {
      const action = data.shift().split(' ');
      cube[action.shift().toLowerCase()](action);
      console.log(cube.subMatrixes)
    }
    // consolidated.concat(cube.result);
    console.log(`-------> finished  ${cubes - i + 1} out of ${cubes}`);
  }
}

processData(data);
