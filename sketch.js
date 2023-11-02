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
    createCanvas(1520, 900);
    // const geneTable = new GeneTable(3);
    // geneTable.createDOMTable();
    // frameRate(4)
    background(40);
    tree1 = new BranchNode({
        position: createVector(width*.17, height*0.98),
        angle: 0 - HALF_PI,
        growthHormone: 0,
        growthChance: 1,
        growthFrequency: 50
    }, 0);
    tree2 = new BranchNode({
        position: createVector(width/2, height*0.98),
        angle: 0 - HALF_PI,
        growthHormone: 0,
        growthChance: 1,
        growthFrequency: 50
    }, 0);
    tree3 = new BranchNode({
        position: createVector(width*.83, height*0.98),
        angle: 0 - HALF_PI,
        growthHormone: 0,
        growthChance: 1,
        growthFrequency: 50
    }, 0);
    tree4 = new BranchNode({
        position: createVector(width*.17, height*0.48),
        angle: 0 - HALF_PI,
        growthHormone: 0,
        growthChance: 1,
        growthFrequency: 50
    }, 0);
    tree5 = new BranchNode({
        position: createVector(width/2, height*0.48),
        angle: 0 - HALF_PI,
        growthHormone: 0,
        growthChance: 1,
        growthFrequency: 50
    }, 0);
    tree6 = new BranchNode({
        position: createVector(width*.83, height*0.48),
        angle: 0 - HALF_PI,
        growthHormone: 0,
        growthChance: 1,
        growthFrequency: 50
    }, 0);
    
}

function draw() {
    background(40);
    tree1.grow();
    tree1.show();
    tree2.grow();
    tree2.show();
    tree3.grow();
    tree3.show();
    tree4.grow();
    tree4.show();
    tree5.grow();
    tree5.show();
    tree6.grow();
    tree6.show();
}

function mousePressed() {
    tree.grow();
}
