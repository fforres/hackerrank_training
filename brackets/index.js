var data = require('./data.json');
var results = require('./results.json');

function check(str) {
    const queue = [];
    if (str.length % 2 !== 0) {
        return("NO");
    } else {
        for (var i = 0; i < str.length; i++) {
            if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
                queue.push(str[i]);
            } else {
                if (queue.length === 0) {
                  return("NO");
                }
                if (closed(queue.pop(), str[i])) {
                    return("NO");
                }
            }
        }
        if (queue.length > 0) {
            return("NO");
        }
    }
    return("YES");
}

function closed(a, b) {
    return ((a === "(" && b !== ")") || (a === "{" && b !== "}") || (a === "[" && b !== "]"))
}

data.forEach((el, i) => {
  if(check(el) !== results[i]){
    console.log(i+1);
  };
})
