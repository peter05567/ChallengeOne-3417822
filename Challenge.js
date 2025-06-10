class Trie {
    constructor() {
      this.root = this._createNode();
    }
  
    // Create a new Trie node
    _createNode() {
      return {
        children: {},
        isEndOfWord: false
      };
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = this._createNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this._traverse(word);
      return node !== null && node.isEndOfWord;
    }
  
    startsWith(prefix) {
      return this._traverse(prefix) !== null;
    }
  
    _traverse(str) {
      let node = this.root;
      for (let char of str) {
        if (!node.children[char]) {
          return null;
        }
        node = node.children[char];
      }
      return node;
    }
  }
  
  // --- Example usage ---
  let trie = new Trie();
  
  trie.insert("apple");
  console.log(trie.search("apple"));   // true
  console.log(trie.search("app"));     // false
  console.log(trie.startsWith("app")); // true
  
  trie.insert("app");
  console.log(trie.search("app"));     // true
  