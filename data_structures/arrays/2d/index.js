const data = require('./data');
console.log(data)
function Hourglass(matrix) {
  this.biggest = undefined;
  this.matrix = matrix;
}

Hourglass.prototype.calculateHourGlass = function(rows, cols) {
  const topRow = this.matrix[rows][cols] + this.matrix[rows][cols + 1] + this.matrix[rows][cols + 2]
  const bottomRow = this.matrix[rows + 2][cols] + this.matrix[rows + 2][cols + 1] + this.matrix[rows + 2][cols + 2]
  const middle = this.matrix[rows + 1][cols + 1];
  const calc = topRow + bottomRow + middle;
  if (calc > this.biggest || this.biggest === undefined) {
    this.biggest = calc;
  }
}


Hourglass.prototype.start = function() {
  for (let rows = 0; rows < this.matrix.length-2; rows++) {
    for (let columns = 0; columns < this.matrix[rows].length-2; columns++) {
      this.calculateHourGlass(rows, columns);
    }
  }
  return this;
}

Hourglass.prototype.result = function() { console.log(this.biggest) }

const hourglass = new Hourglass(data);
hourglass.start().result()
