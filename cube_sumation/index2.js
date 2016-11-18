const data = [
  [1,1,1,0],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
]
size = 4;
console.log(data.join('\n'));
for(let X = 0; X < size; X++ ){
  for(let Y = 0; Y < size; Y++ ){
    const toSum = (data[X][Y - 1]? data[X][Y - 1] : 0);
    data[X][Y] = data[X][Y] + toSum;
  }
}
console.log('\n');
console.log(data.join('\n'));

for(let X = 0; X < size; X++ ){
  for(let Y = 0; Y < size; Y++ ){
    const toSum = 0;
    data[X][Y] = data[X][Y] + (data[X-1]? data[X-1][Y] : 0)
  }
}
console.log('\n');
console.log(data.join('\n'));
