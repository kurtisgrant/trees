class GeneTable {
    constructor(generations) {
        this.params = [
            "length",
            "lengthDeviation",
            "size",
            "sizeStep",
            "sizeInherit",
            "sizeFromGeneration",
            "red",
            "green",
            "blue",
            "redStep",
            "greenStep",
            "blueStep",
            "colourInherit",
            "colourDeviation",
            "branchNumber",
            "branchAngles",
            "angleDeviation",
            "curve",
            "twist",
            "downUp",
          ];
        this.table = new Array(this.params.length).fill(null).map(() => new Array(generations).fill(null));
    }

    getGene(param, generation) {
        return this.table[this.params.indexOf(param)][generation];
    }

    setGene(param, generation, value) {
        this.table[this.params.indexOf(param)][generation] = value;
    }

    createDOMTable() {
        const tableDiv = createDiv();
        const table = createElement('table');
        const thead = createElement('thead');
        const tbody = createElement('tbody');

        // Create Header
        const headerRow = createElement('tr');
        headerRow.child(createElement('th', 'Param \\ Gen'));
        for (let i = 0; i < this.table[0].length; i++) {
            headerRow.child(createElement('th', `Gen ${i}`));
        }
        thead.child(headerRow);

        // Create Body
        for (let i = 0; i < this.params.length; i++) {
            const row = createElement('tr');
            row.child(createElement('td', this.params[i]));
            for (let j = 0; j < this.table[i].length; j++) {
                const cell = createElement('td');
                const input = createInput(this.table[i][j] === null ? "" : this.table[i][j].toString());
                input.parent(cell);
                cell.parent(row);
            }
            row.parent(tbody);
        }

        // Assemble Table
        thead.parent(table);
        tbody.parent(table);
        table.parent(tableDiv);

        // Create commit button
        const commitButton = createButton('Commit Changes');
        commitButton.mousePressed(() => {
            this.commitChanges(tbody);
        });
        commitButton.parent(tableDiv);

    }

    commitChanges(tbody) {
        // Get all rows
        const rows = tbody.elt.querySelectorAll('tr');

        // Update each cell
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].querySelectorAll('td');
            for (let j = 1; j < cells.length; j++) {  // Skip the parameter name cell
                const inputValue = cells[j].querySelector('input').value;
                this.setGene(this.params[i], j - 1, inputValue);
            }
        }
    }
}