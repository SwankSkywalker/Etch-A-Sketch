const grid = document.querySelector('#container');

function createGrid() {
    for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
};

createGrid();
