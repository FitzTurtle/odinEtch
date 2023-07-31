
const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

let gridNum=10;
let newSize = 800/gridNum;

let x = 10;
let y = 10;
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

createGrid(x,y);