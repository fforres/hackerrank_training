const this.data = [
  [ [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ] ],
  [ [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ] ],
  [ [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ] ],
  [ [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ],
    [ 0, 0, 0, 0 ] ]
]
size = 4;
for(let X = 0; X < size; X++ ){
  for(let Y = 0; Y < size; Y++ ){
    for(let Z = 0; Z < size; Z++ ){
      const toSum = (this.data[X][Y][Z-1]? this.data[X][Y][Z-1]: 0);
      this.data[X][Y][Z] = this.data[X][Y][Z] + toSum;
    }
  }
}
for(let X = 0; X < size; X++ ){
  for(let Y = 0; Y < size; Y++ ){
    for(let Z = 0; Z < size; Z++ ){
      const toSum = (this.data[X][Y-1]? this.data[X][Y-1][Z]: 0);
      this.data[X][Y][Z] = this.data[X][Y][Z] + toSum;
    }
  }
}
for(let X = 0; X < size; X++ ){
  for(let Y = 0; Y < size; Y++ ){
    for(let Z = 0; Z < size; Z++ ){
      const toSum = (this.data[X-1]? this.data[X-1][Y][Z]: 0);
      this.data[X][Y][Z] = this.data[X][Y][Z] + toSum;
    }
  }
}
