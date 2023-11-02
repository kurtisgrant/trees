// Tree Class
class TreeCell {
    constructor(parent) {
        this.parent = parent
        this.dna = parent.dna
        this.cellOfBranch = parent.cellOfBranch + 1
        // this.branchingCell = branchCellsRemaining === 0
        // this.startingCell = branchCellsRemaining === -1
        // this.level = this.branchingCell ? parent.level + 1 : parent.level
        this.children = [];
        if (this.startingCell) {

        }
    }
}

class Tree {
    constructor(x, y, geneTable) { 
        this.geneTable = geneTable; 
        this.startingCell = new TreeCell({ 
            dna: geneTable, 
            level: -1, 
            cellOfLevel: -1, 
            x: x, 
            y: y, 
            angle: 0 
        }) 
        this.generation = generation; 
    }
    grow() {
        // Use Agent class to draw the tree based on the GeneTable.
    }

    show() {
        // Handle drawing the tree.
    }
}