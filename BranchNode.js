

class BranchNode {
    constructor(parent, tilt) {
        this.parent = parent;
        this.angle = parent ? parent.angle + tilt : tilt;
        this.growthChance = parent.growthChance
        this.growthFrequency = parent.growthFrequency
        this.growthHormone = parent.growthHormone + 1
        this.position = p5.Vector.fromAngle(this.angle).mult(1.5);
        this.tiltRange = 50
        if (this.parent) {
            this.position.add(this.parent.position);
        }
        this.children = []
        console.log('gH: ', this.growthHormone)
    }
    grow() {
        if (this.children.length === 0) {
            let branched = false
            if (random() < this.growthChance && this.growthFrequency > 15 && this.growthChance > 0.2) {
                if (sigmoid(this.growthHormone, this.growthFrequency)) {
                    branched = true
                    this.growthHormone = 0
                    let branchAngle = random(- PI / this.tiltRange, PI / this.tiltRange) + HALF_PI/random(2,3.5)
                    const child1 = this.addChild(branchAngle);
                    const child2 = this.addChild(-branchAngle);
                    child1.growthChance *= 0.6
                    child2.growthChance *= 0.6
                    child1.growthFrequency *= 0.8
                    child2.growthFrequency *= 0.8
                }
                let angle = random(- PI / this.tiltRange, PI / this.tiltRange)
                const child = this.addChild(angle);
                if (branched) {
                    child.growthChance *= 0.95
                    child.growthFrequency *= 0.85
                }
            }
        } else {
            for(let i = 0; i < this.children.length; i++) {
                this.children[i].grow();
            }
        }
    }
    addChild(angle) {
        const child = new BranchNode(this, angle);
        this.children.push(child);
        return child
    }
    show() {
        stroke(255)
        strokeWeight(2)
        point(this.position.x, this.position.y);
        for(let i = 0; i < this.children.length; i++) {
            this.children[i].show();
        }
    }
}

function sigmoid(value, midPoint) {
    // Parameters
    const steepness = 0.6;  // Adjusts the steepness of the curve
    
    // Logistic Sigmoid Function to calculate probability
    const probability = 1 / (1 + exp(-steepness * (value - midPoint)));
  
    // Use P5.js random() function to generate a number between 0 and 1
    // If the random number is less than or equal to the calculated probability, return true
    return random() <= probability;
  }