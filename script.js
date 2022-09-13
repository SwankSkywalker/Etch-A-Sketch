const grid = document.querySelector('.container');
const resetbtn = document.querySelector('#reset');
let slider = document.querySelector('#slider');

let gridSize = 16;

let cells = document.querySelectorAll('.cell')

function makeGrid() {
    createGrid(gridSize);
    displayGridSize();

    const brushes = document.querySelectorAll('.brush');
    for (let brush of brushes) {
        brush.addEventListener('click', function () {
            document.querySelector('.active').classList.remove('active');
            colorTheme = brush.dataset.name;
            brush.classList.add('active');
        });
    }

    blackbtn.classList.add('active');
    slider.addEventListener('input', displayGridSize);
    slider.addEventListener('change', changeGridSize);
}

function createGrid(size) {
    document.documentElement.style.setProperty('--grid-size', size);
    for (i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(cell);
    }
}

//Event listeners to change grid cell colors
const blackbtn = document.querySelector('#black');
blackbtn.addEventListener('click', function() {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});
    
const rainbowbtn = document.querySelector('#rainbow');
rainbowbtn.addEventListener('click', function() {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randoColor();
        })
    }
});

const choosebtn = document.querySelector('#userColor');
choosebtn.addEventListener('click', function() {
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('userColor').value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
});

resetbtn.addEventListener('click', clearGrid);

//grid functions
function changeGridSize() {
    for (let cell of cells) {
        cell.remove()
    }
    gridSize = slider.value
    createGrid(gridSize);
    cells = document.querySelectorAll('.cell');
}

function displayGridSize() {
    const gridSizeDisplay = document.querySelector('label[for="grid-size"]');
    gridSizeDisplay.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
}

function clearGrid() {
    for (let cell of cells) {
        cell.style.backgroundColor = 'white'
    }
}


function randoColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

makeGrid();

