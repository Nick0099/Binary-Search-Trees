class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class tree{
    constructor(array){
        this.root = this.buildTree(array);
    }
    buildTree(array){
        const sort = [...new Set(array)].sort((a,b) => a-b);
        return this.b
    }
}
