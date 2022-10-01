function generateGrid(size = 16) {
    const container = document.createElement('div');
    container.classList.add('grid-container');

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.setAttribute('data-brightness', '1');
            cell.style.backgroundColor = '#eee';
            cell.addEventListener('pointerenter', handlePointerEnter);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
    const gridArea = document.getElementById('grid-area');
    gridArea.appendChild(container);
}

function handlePointerEnter(e) {
    const brightness = Number(e.target.getAttribute('data-brightness'));

    if (brightness > 0) {
        e.target.style.filter = `brightness(${brightness - 0.1})`;
        e.target.setAttribute('data-brightness', `${brightness - 0.1}`)
    };
}

generateGrid()