const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    const gridItemColumn = document.createElement("div");
    gridItemColumn.classList.add("grid-item-column");
    gridContainer.appendChild(gridItemColumn);

    for (let j = 0; j < 16; j++) {
        const gridItemRow = document.createElement("div");
        gridItemRow.classList.add("grid-item-row");
        gridItemColumn.appendChild(gridItemRow);
    }
}

let gridItemRow = document.querySelectorAll(".grid-item-row");
gridItemRow.forEach((gridItemRow) => {
    gridItemRow.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "white";
    });
});