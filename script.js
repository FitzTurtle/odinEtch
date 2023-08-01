const colors = ["red", "yellow", "orange", "blue", "indigo", "green", "violet", "purple"];
const container = document.querySelector(".container");

let gridNum=16;
let newSize = 800/gridNum;
let x = y = gridNum;

let newRow;
let newGrid;

function userPrompt(){
    gridNum = parseInt(prompt("What do you want the side lengths to be? \(Enter a value between 1 and 100 \)",10));

    if(Number.isInteger(gridNum) && gridNum >=1 && gridNum <=100){
    newSize = 800/gridNum;
    x = y = gridNum;
    clearGrid();
    initialize();
    } else {
        alert("Please enter a valid number from 1 through 100");
    }
}



function clearGrid() {
    containerBod = document.querySelectorAll(".row");
    containerBod.forEach(row => container.removeChild(row));
}

function createGrid(x, y) {

    for(let i = 0; i<y; i++){

        newRow = document.createElement('div');
        newRow.className = "row";
        container.appendChild(newRow);
        for(let j = 0; j<x; j++){
            newBox = document.createElement('div');
            newBox.className = "gridBorder";
            newRow.appendChild(newBox);

            newGrid = document.createElement('div');
            newGrid.className = "grid";
            resizeGrid(newGrid);
            newBox.appendChild(newGrid);
        }
    }
}

function resizeGrid(newGrid){
   newGrid.style.height = `${newSize-2}px`;
   newGrid.style.width = `${newSize-2}px`;
}


function initialize() {
    createGrid(x,y);
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => grid.addEventListener('mouseenter', hoverEffect));
}

function hoverEffect(e) {
    this.style.backgroundColor = colorPicker();
    if (this.style.opacity && parseFloat(this.style.opacity) < 1){
        this.style.opacity =  parseFloat(this.style.opacity)+.1;
    } else if (!this.style.opacity) {
        this.style.opacity = .1;
    }
}

function colorPicker () {
    return colors[Math.floor(Math.random()*8)];
}

initialize();
