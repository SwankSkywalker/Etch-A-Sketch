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

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (i = 0; i < val * val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

const black = document.querySelector('#black');
black.addEventListener('click', function(){

})
const rainbow = document.querySelector('#rainbow');


createGrid();
