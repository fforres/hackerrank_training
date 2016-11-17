const data  = require('./data');

function Char(data) {
  this.data = data
  this.finishesAWord = false;
  this.subChars = {};
}

function Trie(data) {
  this.data = data;
  this.trie = {}
  this.trie.subChars = {};
  this.error = undefined;
}

Trie.prototype.handleChar = function(char) {
  if (parentChar.finishesAWord) {
  }
}

Trie.prototype.handleWord = function(word, parentChar) {
  let parent = parentChar;
  for (var i = 0; i < word.length; i++) {
    const character = word[i];
    if (parent.subChars[character]) {
      if (parent.subChars[character].finishesAWord) {
        this.error = word;
        break;
      }
      parent = parent.subChars[character];
    } else {
      const char = new Char();
      char.data = character;
      if (i + 1 === word.length) {
        char.finishesAWord = true;
      }
      parent.subChars[character] = char;
      parent = char;
    }
    // get letter
    // check if letter already exists as childrend of current Trie
      // if does not exists, create "Char" and add it to trie.
      // if it ends the word, set that char as a workd end (this.finishesAWord = true)
      // if does exists add the word as error and break.
    // change "Parent trie" context
  }
  return this;
}

Trie.prototype.start = function() {
  console.log(this.data)
  const length = parseInt(this.data.shift());

  for (var i = 0; i < length; i++) {
    if (!this.error) {
      this.handleWord(this.data.shift(), this.trie)
    }
  }
  return this;
}

Trie.prototype.result = function() {
  if (this.error) {
    console.log(`BAD SET\n${this.error}`)
  } else {
    console.log('GOOD SET');
  }
}

const trie = new Trie(data.split('\n'));
trie.start().result();
