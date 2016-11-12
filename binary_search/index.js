const costs = [ 1, 4, 5, 3, 2 ];
const cash = 4;

for (let johnny = 0; johnny < costs.length; johnny++) {
  for (let sunny = johnny + 1; sunny < costs.length; sunny++) {
    if (costs[johnny] + costs[sunny] === cash
    ) {
      console.log((johnny + 1) + ' ' + (sunny + 1))
    }
  }
}
