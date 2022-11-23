const container = document.querySelector("#grid-container");
resetGrid(16);
document.querySelector("button").addEventListener("click", setGridSize);

function draw(event) {
  event.target.classList.add("draw");
}

function setGridSize() {
  const newSize = prompt("Enter new grid size");
  if (!newSize) return;
  else if (newSize>100) {
    alert("Grid size too big (max size 100)");
    return;
  }
  resetGrid(+newSize);
}

function resetGrid(size) {
  const oldElements = container.querySelectorAll(".grid-element");
  oldElements.forEach(element => element.remove())
  container.classList.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.classList.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let row=0; row<size; row++) {
    for (let col=0; col<size; col++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-element");
      gridElement.style.gridRow = `${row+1} / ${row+2}`;
      gridElement.style.gridColumn = `${col+1} / ${col+2}`;
      gridElement.addEventListener("mouseover", draw);
      container.appendChild(gridElement);
    }
  }
}