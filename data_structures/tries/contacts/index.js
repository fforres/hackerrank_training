const data = require('./data2');
const result = [];
function node(){
  this.$ = 0;
}

node.prototype.find = function(term){
  let currentWords = null;
  let searchObject = this;
  for( let i = 0; i < term.length; i++) {
    const el = term.charAt(i);
    if(searchObject[el]) {
      currentWords = searchObject[el].$;
      searchObject = searchObject[el];
    } else {
      currentWords = 0;
      break;
    }
  }
  if(currentWords !== null) {
    result.push(currentWords)
  }
}

node.prototype.add = function(term) {
  let searchObject = this;
  for( let i = 0; i < term.length; i++) {
    const el = term.charAt(i);
    if (!searchObject[el]) {
      searchObject[el] = new node();
    }
    searchObject[el].$++;
    searchObject = searchObject[el];
  }
}

function processData (input) {
  const data = input.split('\n')
  data.shift();
  const n = new node();
  while(data.length) {
    const action = data.shift().split(' ');
    n[action[0]](action[1]);
  }
  console.log(result.join('\n'))
}

processData(data);
