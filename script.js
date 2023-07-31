
const container = document.querySelector(".container");

let x = 16;
let y = 16;
let newRow;
let newGrid;

row.setAttribute('class', "row");
grid.setAttribute('class', "grid");

function createGrid(x, y) {

    for(let i = 0; i<y; i++){

        newRow = document.createElement('div');
        newRow.className = "row";
        container.appendChild(newRow);
        for(let j = 0; j<x; j++){
            newGrid = document.createElement('div');
            newGrid.className = "grid";
            newRow.appendChild(newGrid);
        }
    }


}