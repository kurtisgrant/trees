// const PARAMS = [
//   "length",
//   "lengthDeviation",
//   "size",
//   "sizeStep",
//   "sizeInherit",
//   "sizeFromGeneration",
//   "red",
//   "green",
//   "blue",
//   "redStep",
//   "greenStep",
//   "blueStep",
//   "colourInherit",
//   "colourDeviation",
//   "branchNumber",
//   "branchAngles",
//   "angleDeviation",
//   "curve",
//   "twist",
//   "downUp",
// ];

let tree


function setup() {
    createCanvas(450, 500);
    // const geneTable = new GeneTable(3);
    // geneTable.createDOMTable();
    // frameRate(4)
    background(40);

    tree = new BranchNode({
        position: createVector(width/2, height*0.98),
        angle: 0 - HALF_PI,
        growthHormone: 0,
        growthChance: 1,
        growthFrequency: 50
    }, 0);

    
}

function draw() {
    background(40);
    tree.grow();
    tree.show();
}

function mousePressed() {
    tree.grow();
}
