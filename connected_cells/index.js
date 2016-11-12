const grid = [
  [1, 1, 1, 0, 1,], //1
  [0, 0, 1, 0, 0,], //2
  [1, 1, 0, 1, 0,], //3
  [0, 1, 1, 0, 0,], //4
  [0, 0, 0, 0, 0,], //5
  [0, 1, 0, 0, 0,], //6
  [0, 0, 1, 1, 0,], //7
];

function Connected (grid) {
  this.grid = grid;
  this.queuedCells = [];
  this.found = 0;
  this.biggestRegion = 0;
}

Connected.prototype.enqueue = function enqueue (rows, cols) {
  this.queuedCells.push({rows, cols});
}

Connected.prototype.dequeue = function dequeue (rows, cols) {
  return this.queuedCells.shift();
}
console.log('-------------------------------');

Connected.prototype.traverse = function traverse () {
  this.found = 0;
  while (this.queuedCells.length > 0) {
    const {rows, cols} = this.dequeue();

    if(this.grid[rows - 1] && this.grid[rows - 1][cols - 1] === 1) {
      this.enqueue(rows - 1, cols - 1);
    }
    if(this.grid[rows - 1] && this.grid[rows - 1][cols] === 1) {
      this.enqueue(rows - 1, cols);
    }
    if(this.grid[rows - 1] && this.grid[rows - 1][cols + 1] === 1) {
      this.enqueue(rows - 1, cols + 1);
    }

    if(this.grid[rows] && this.grid[rows][cols + 1] === 1) {
      this.enqueue(rows, cols + 1);
    }
    if(this.grid[rows] && this.grid[rows][cols - 1] === 1) {
      this.enqueue(rows, cols - 1);
    }

    if(this.grid[rows + 1] && this.grid[rows + 1][cols - 1] === 1) {
      this.enqueue(rows + 1, cols - 1);
    }
    if(this.grid[rows + 1] && this.grid[rows + 1][cols] === 1) {
      this.enqueue(rows + 1, cols);
    }
    if(this.grid[rows + 1] && this.grid[rows + 1][cols + 1] === 1) {
      this.enqueue(rows + 1, cols + 1);
    }

    if(this.grid[rows][cols] === 1 ) {
      this.found++;
      this.grid[rows][cols] = 4;
    }
  }
  if(this.found > this.biggestRegion) {
    this.biggestRegion = this.found;
  }
}

Connected.prototype.find = function find () {
  for (let rows = 0; rows < this.grid.length; rows++) {
    for (let columns = 0; columns < this.grid[rows].length; columns++) {
      if (this.grid[rows][columns] === 1) {
        this.enqueue(rows, columns);
        this.traverse(rows, columns);
      }
    }
  }
}

Connected.prototype.result = function result() {
  console.log(this.biggestRegion);
  return this.biggestRegion;
}

const connected = new Connected(grid);
connected.find();
connected.result();
