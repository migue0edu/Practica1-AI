class Node {
  constructor(father){
      this.father = father;
      this.sons = [];
      this.cords = {x:'', y:''};
  }

};

class Tree {
    constructor(){
        this.nodes = [];
    }

    addNode(node){
        this.nodes.add(node);
    }
}