const data = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]
const data2 = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]
size = 4;
data[2][1] = 4;
data2[2][1] = data[2][1];

console.log(data2.join('\n'));
for(let X = 2; X < size; X++ ){
  for(let Y = 1; Y < size; Y++ ){
    const toSum = (data2[X - 1]? data2[X - 1][Y] : 0);
    data2[X][Y] = data2[X][Y] + toSum;
  }
}
console.log('\n');
console.log(data2.join('\n'));

for(let X = 2; X < size; X++ ){
  for(let Y = 1; Y < size; Y++ ){
    const toSum = (data2[X][Y - 1]? data2[X][Y-1] : 0);
    data2[X][Y] = data2[X][Y] + toSum;
  }
}
console.log('\n');
console.log(data2.join('\n'));
