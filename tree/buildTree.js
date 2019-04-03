require('../js/treantjs/Treant');
let gTree = require('electron').remote.getGlobal('solutionTree').tree;

let settings = {
    container: '#tree-simple',
    connectors: {type: 'step'}
};

let nodes = [];

for (let node of gTree.nodes){
    let newNode = {};
    if(nodes.length === 0){
        newNode.text = {name: node.coords};
    }
    else{
        newNode.text = {name: node.coords};
        newNode.parent = nodes[node.father];
    }
    nodes.push(newNode);
}


let config = [
    settings
];

config = config.concat(nodes);


let my_chart = new Treant(config);