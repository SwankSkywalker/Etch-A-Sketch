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
    grid.setAttribute('style', `grid-template-columns: repeat(${val}), 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (i = 0; i < val * val; i++) {
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

createGrid();
