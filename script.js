const grid = document.querySelector('.container');
const resetbtn = document.getElementById('reset');
const blackbtn = document.getElementById('black');
const rainbowbtn = document.getElementById('rainbow');
const choosebtn = document.getElementById('colorPickButton');
let colorPick = [];
let colorTheme = [];
let slider = document.getElementById('slider');

let currentState = false;


function createGrid(sliderVal) {
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${sliderVal}), 1fr`;
    grid.style.gridTemplateRows = `repeat(${sliderVal}), 1fr`;
    for (let i = 1; i <= sliderVal * sliderVal; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('cell');
        newDiv.style.backgroundColor = 'white';
        grid.appendChild(newDiv);
    }
    grid.addEventListener('mouseover', toggleColoring);
}
createGrid(16);

function toggleColoring() {
    const cells = document.querySelectorAll('.cell');

    if (!currentState) {
        cells.forEach((cell) => {
            cell.addEventListener('mouseover', changeBackground);
        });
        currentState = true;
    } else {
        cells.forEach((cell) => {
            cell.removeEventListener('mouseover', changeBackground);
        });
        currentState = false;
    }
}

//event listeners
rainbowbtn.addEventListener('click', ()=> {
    colorTheme = 'rainbow';
});

blackbtn.addEventListener('click', ()=> {
    colorTheme = 'black';
});
choosebtn.addEventListener('click', () => {
    colorTheme = 'colorPickButton';
});

resetbtn.addEventListener('click', () => {
    const newDivs = document.querySelectorAll('.cell');
    newDivs.forEach((div) => {
        div.style.backgroundColor = 'white';
});

function changeBackground(e) {
    switch (colorTheme) {
        case 'rainbow':
            let randomNum = Math.floor(Math.random() * 360);
            colorPick = `hsl(${randomNum}, 100%, 50%)`;
            e.target.style.backgroundColor = colorPick;
            break;
        case 'black':
            colorPick = 'black';
            e.target.style.backgroundColor = colorPick;
            break;
        case 'colorPickButton':
            let userPick = document.getElementById('userColor')
            colorPick = userPick.value;
            e.target.style.backgroundColor = colorPick;
            break;
    }
}
changeBackground();

slider.addEventListener('mouseup', clearGrid);

function clearGrid() {
    let gridDivs = document.querySelectorAll('.cell');
    gridDivs.forEach((div) => {
        return div.remove();
    });
    createGrid(slider.value);
}
clearGrid();



/* function createGrid(gridNum = 16) {
    let gridArea = gridNum * gridNum;
    grid.style.gridTemplateColumns = `repeat(${gridNum}, auto)`;
    grid.style.gridTemplateRows = `repeat(${gridNum}, auto)`;
    for (i = 0; i <= gridArea; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div);
    }
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
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

const slider = document.querySelector('#slider');
const slideVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    slideVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}), 1fr); grid-template-rows: repeat(${val}, 1fr);`);
    for (let i = 0; i < val * val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div)
    }
});


const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
    let promptCellNum = prompt('How many squares per side? (Maximum: 100)');
    let gridNum = parseInt(promptCellNum, 16);
    if (isNaN(gridNum)){
        alert('You must enter a positive integer (Maximum: 100)');
        return;
    } else if (gridNum <= 0) {
        alert('You must enter a positive integer (Maximum: 100)');
        return;
    } else if (gridNum >= 100) {
        alert('You must enter a positive integer (Maximum: 100)');
        return;
    }
});

const black = document.querySelector('#black');
black.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', function(){
    let val = document.getElementById('slider');
    let cell = grid.children;
    for (i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randoColor();
        })
    }
});

const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function() {
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = grid.children;
    for (i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
});
createGrid()*/})