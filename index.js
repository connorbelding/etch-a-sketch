function generateGrid(size = 16) {
    const container = document.createElement('div');
    container.classList.add('grid-container');

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell')
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    const gridArea = document.getElementById('grid-area');
    gridArea.appendChild(container);
}

generateGrid()