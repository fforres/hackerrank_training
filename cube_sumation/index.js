const data = require('./data');
const result = require('./result');

function Cube (size) {
  this.size = size;
  this.matrix = new Array(this.size);
  this.computedMatrix = new Array(this.size);
  // console.time(`creating_matrix_of_${this.size}`)
  for(let x = 0; x < size; x++) {
    this.matrix[x] = new Array(this.size);
    this.computedMatrix[x] = new Array(this.size);
    for(let y = 0; y < size; y++) {
      this.matrix[x][y] = new Array(this.size);
      this.computedMatrix[x][y] = new Array(this.size);
      for(let z = 0; z < size; z++) {
        this.matrix[x][y][z] = 0;
        this.computedMatrix[x][y][z] = 0;
      }
    }
  }
  // console.timeEnd(`creating_matrix_of_${this.size}`)
}
Cube.prototype.recalculateY = function(xCoord, yCoord, zCoord) {
  return this;
}
Cube.prototype.recalculateZ = function(xCoord, yCoord, zCoord) {
  return this;
}

Cube.prototype.recalculateX = function(xCoord, yCoord, zCoord) {
  let cummulative = [];
  console.log(this.matrix)
  for(let X = 0 ; X < this.size; X++) {
    cummulative = 0;
    for(let Y = 0 ; Y < this.size; Y++) {
      this.computedMatrix[X][Y][0] = cummulative + this.computedMatrix[0][Y][0]
      cummulative = this.computedMatrix[X][Y][0]
    }
  }
  console.log('----------')
  console.log(this.computedMatrix)
  return this;
}

Cube.prototype.update = function (arguments) {
  const coords = arguments;
  this.matrix[coords[0]][coords[1]][coords[2]] = parseInt(coords[3]);
  return this;
}
Cube.prototype.query = function (arguments) {
  // let sum = 0;
  // const coords = arguments
  // for(let row = parseInt(coords[0]); row <= parseInt(coords[3]); row++ ) {
  //   for(let col = parseInt(coords[1]); col <= parseInt(coords[4]); col++ ) {
  //     for(let time = parseInt(coords[2]); time <= parseInt(coords[5]); time++ ) {
  //       if(!this.data[row]) {
  //         this.data[row] = [];
  //       }
  //       if(!this.data[row][col]) {
  //         this.data[row][col] = [];
  //       }
  //       if(!this.data[row][col][time]) {
  //         this.data[row][col][time] = 0;
  //       }
  //       sum = sum + this.data[row][col][time];
  //     }
  //   }
  // }
  // this.result.push(sum);
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
      if (action === 'update' ) {
        cube.update(actions)
          .recalculateX(actions[0],actions[1],action[2])
          .recalculateY()
          .recalculateZ()
      } else {
        cube.query(actions);
      }

    }
    // consolidated = consolidated.concat(cube.result);
    console.timeEnd(`${i}`)
  }
}
debugger;

processData(data);
