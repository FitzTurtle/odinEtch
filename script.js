
const container = document.querySelector(".container");

let gridNum=15;
let newSize = 800/gridNum;

let x = y = gridNum;
let newRow;
let newGrid;

function createGrid(x, y) {

    for(let i = 0; i<y; i++){

        newRow = document.createElement('div');
        newRow.className = "row";
        container.appendChild(newRow);
        for(let j = 0; j<x; j++){
            newGrid = document.createElement('div');
            newGrid.className = "grid";
            resizeGrid(newGrid);
            newRow.appendChild(newGrid);
        }
    }
}

function resizeGrid(newGrid){
   newGrid.style.height = `${newSize-2}px`;
   newGrid.style.width = `${newSize-1}px`;
}


function initialize() {
    createGrid(x,y);


    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => grid.addEventListener('mouseenter', hoverEffect));
}

function hoverEffect(e) {
    this.style.backgroundColor = "red";
    if (this.style.opacity){
        this.style.opacity =  parseFloat(this.style.opacity)+.1;
    } else if (!this.style.opacity) {
        this.style.opacity = .1;
    }
    console.log(this.style.opacity);
}

initialize();
