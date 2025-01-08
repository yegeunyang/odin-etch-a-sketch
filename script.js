const defaultColor = "white";
let randomColor = false;

function setGrid(number) {
    const gridContainer = document.querySelector(".grid-container");

    for (let i = 0; i < number; i++) {
        const gridItemColumn = document.createElement("div");
        gridItemColumn.classList.add("grid-item-column");
        gridContainer.appendChild(gridItemColumn);
    
        for (let j = 0; j < number; j++) {
            const gridItemRow = document.createElement("div");
            gridItemRow.classList.add("grid-item-row");
            gridItemColumn.appendChild(gridItemRow);
        }
    }
}

function removeGrid() {
    const gridContainer = document.querySelector(".grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function setHoverColor(color) {
    let gridItemRow = document.querySelectorAll(".grid-item-row");
    gridItemRow.forEach((gridItemRow) => {
        gridItemRow.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = color;
        });
    });
}

let resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", () => {
    let gridSize = prompt("Enter the grid size [8, 16, 32, 64]: ");
    if (gridSize === "8" || gridSize === "16" || gridSize === "32"
    || gridSize === "64") {
        removeGrid();
        setGrid(parseInt(gridSize), 10);
        setHoverColor(defaultColor);
    } else {
        alert("Invalid grid size!");
    }
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    const gridItemRow = document.querySelectorAll(".grid-item-row");
    gridItemRow.forEach((gridItemRow) => {
        gridItemRow.style.backgroundColor = "black";
    });
});

let randomButton = document.querySelector("#random");
randomButton.addEventListener("click", () => {
    randomColor = !randomColor;
    if (randomColor) {
        setHoverColor(getRandomColor());
    } else {
        setHoverColor(defaultColor);
    }
});

setGrid(16);
setHoverColor(defaultColor);