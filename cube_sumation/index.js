const data = require('./data');
const result = require('./result');

function Cube (size) {
  this.size = size;
  this.computedMatrix = new Array(this.size);
  // console.time(`creating_matrix_of_${this.size}`)
  for(let x = 0; x <= size; x++) {
    this.computedMatrix[x] = new Array(this.size);
    for(let y = 0; y <= size; y++) {
      this.computedMatrix[x][y] = new Array(this.size);
      for(let z = 0; z <= size; z++) {
        this.computedMatrix[x][y][z] = 0;
      }
    }
  }
}

Cube.prototype.recalculate = function(posX, posY, posZ) {
  for(let X = posX; X < this.size; X++ ){
    for(let Y = posY; Y < this.size; Y++ ){
      for(let Z = posZ; Z < this.size; Z++ ){
        const toSum = (this.computedMatrix[X][Y][Z-1]? this.computedMatrix[X][Y][Z-1]: 0);
        this.computedMatrix[X][Y][Z] = this.computedMatrix[X][Y][Z] + toSum;
      }
    }
  }
  for(let X = posX; X < this.size; X++ ){
    for(let Y = posY; Y < this.size; Y++ ){
      for(let Z = posZ; Z < this.size; Z++ ){
        const toSum = (this.computedMatrix[X][Y-1]? this.computedMatrix[X][Y-1][Z]: 0);
        this.computedMatrix[X][Y][Z] = this.computedMatrix[X][Y][Z] + toSum;
      }
    }
  }
  for(let X = posX; X < this.size; X++ ){
    for(let Y = posY; Y < this.size; Y++ ){
      for(let Z = posZ; Z < this.size; Z++ ){
        const toSum = (this.computedMatrix[X-1]? this.computedMatrix[X-1][Y][Z]: 0);
        this.computedMatrix[X][Y][Z] = this.computedMatrix[X][Y][Z] + toSum;
      }
    }
  }
  return this;
}

Cube.prototype.update = function (coords) {
  this.computedMatrix[coords[0]][coords[1]][coords[2]] = parseInt(coords[3]);
  this.recalculate(coords[0], coords[1], coords[2]);
}
Cube.prototype.query = function (coords) {
  console.log('\n');
  // 000 = 012
  // 100 = 312
  // 110 = 342
  // 010 = 042
  // 011 = 045
  // 001 = 015
  // 101 = 315
  // 111 = 345
  const nearCube = this.computedMatrix[coords[3]][coords[4]][coords[2]];
  const topCube = this.computedMatrix[coords[3]][coords[1]][coords[5]];
  const farCube = this.computedMatrix[coords[0]][coords[4]][coords[5]];

  const bigCube = this.computedMatrix[coords[3]][coords[4]][coords[5]];
  const smallCube = this.computedMatrix[coords[0]][coords[0]][coords[0]];
  console.log(nearCube)
  console.log(topCube)
  console.log(farCube)
  console.log(smallCube)
  console.log(bigCube)
  console.log(bigCube - nearCube - topCube - farCube + smallCube )
  console.log(this.computedMatrix)
}


function processData(input) {
  const data = input.split('\n');
  const cubes = parseInt(data.shift());
  let consolidated = [];
  for(let i = cubes; i > 0; i-- ){
    const temp = data.shift().split(' ');
    console.time(`${i}`)
    const cube = new Cube(parseInt(temp[0]));
    const queries = parseInt(temp[1]);
    for (let query = 0; query < queries; query++) {
      let actions = data.shift().split(' ');
      const action = actions.shift().toLowerCase();
      actions = actions.map(Number);
      cube[action](actions);
    }
    console.timeEnd(`${i}`)
  }
}
debugger;

processData(data);
