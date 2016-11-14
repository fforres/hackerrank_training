const cluster = require('cluster');
const data = require('./dataSmall');
const result = require('./resultSmall');
function Node(index) {
  this.index = index;
  this.visited = false;
  this.pushed = false;
  this.distance = -1;
  this.currentLVL = 0;
  this.relatedNodes = {};
}
Node.prototype.addRelation = function (index, node) {
  this.relatedNodes[index] = node;
}

function Graph() {
  this.refArray = [];
  this.queue = [];
  this.result = '';
  this.startingPoint = 0;
  this.numberOfNodes = 0;
  this.nodesData = [];
}

Graph.prototype.setNumberOfNodes = function(numberOfNodes) {
  this.numberOfNodes = numberOfNodes;
}
Graph.prototype.setResults = function(result) {
  this.result = result;
}
Graph.prototype.setStartingPoint = function(startingPoint) {
  this.startingPoint = startingPoint;
}
Graph.prototype.setNodesData = function(nodesData) {
  this.nodesData = nodesData;
}
Graph.prototype.handleNodeData = function() {
  console.log(this);
  for (var line = 0; line < this.nodesData.length; line++) {
    const nodeData = this.nodesData.shift().split(' ');
    this.relateNode(parseInt(nodeData[0]), parseInt(nodeData[1]));
  }
}

Graph.prototype.getOrCreateNode = function(index) {
  if (!this.refArray[index]) {
    this.refArray[index] = new Node(index);
  }
  return this.refArray[index];
}

Graph.prototype.relateNode = function(from, to) {
  const initialNode = this.getOrCreateNode(from);
  const targetNode = this.getOrCreateNode(to);
  initialNode.addRelation(to, targetNode)
  targetNode.addRelation(from, initialNode)
}


Graph.prototype.BFS = function() {
  let currentLVL = 1;
  this.queue.push(this.startingPoint);
  while (this.queue.length > 0) {
    const rootNode = this.getOrCreateNode(this.queue.shift());
    if(!rootNode.visited){
      rootNode.visited = true;
      rootNode.distance = 6 * rootNode.currentLVL;
      for (let i = 0, keys = Object.keys(rootNode.relatedNodes); i < keys.length; i++) {
        const childNode = this.getOrCreateNode(keys[i]);
        if (!childNode.pushed) {
          childNode.currentLVL = rootNode.currentLVL + 1;
          this.queue.push(keys[i]);
          childNode.pushed = true;
        }
      }
    }
  }
}

Graph.prototype.show = function() {
  const ans = [];
  for (let currentNodeIndex = 1; currentNodeIndex <= this.numberOfNodes; currentNodeIndex++) {
    const currentNode = this.getOrCreateNode(currentNodeIndex);
    if (currentNode) {
      if (currentNodeIndex !== this.startingPoint) {
        ans.push(currentNode.distance);
      }
    } else {
      ans.push(-1);
    }
  }
  const joinedAnswer = ans.join(' ');
  console.log(joinedAnswer, ' - ',this.result, ans.join(' '))
}
function processData(unparsedInput, unparsedOutput) {
  //Enter your code here
  const input = unparsedInput.split('\n');
  const output = unparsedOutput.split('\n');
  const iterations = parseInt(input.shift());
  const arrOfDatas = [];
  const arrOfGraphs = [];
  for (let graphs = iterations; graphs > 0; graphs--) {
    const thaGee = new Graph();

    const newLine = input.shift().split(' ');
    const numberOfNodes = parseInt(newLine[0]);
    const numberOfLines = parseInt(newLine[1]);
    thaGee.setNumberOfNodes(numberOfNodes);
    console.log(numberOfLines);
    thaGee.setNodesData(input.splice(0, numberOfLines));
    thaGee.setResults(output.shift());
    thaGee.setStartingPoint(parseInt(input.shift()));
    thaGee.handleNodeData();
    thaGee.BFS();
    thaGee.show();
    arrOfGraphs.push(thaGee);
  }
  // console.log(arrOfGraphs);
  // console.log(arrOfGraphs);
  // thaGee.BFS(parseInt(input.shift()))
  // thaGee.show()
}

processData(data, result)
