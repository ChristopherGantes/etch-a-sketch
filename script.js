const container = document.querySelector("#container");
const gridBtn = document.querySelector("#size");

function createGrid(rows, columns) {
  container.textContent = "";
  
  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("id",`row`)

    for (let j = 0; j < columns; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", `${i}x${j}`);
      rowDiv.appendChild(square);
    }
    
    container.append(rowDiv);
  }
}

createGrid(16, 16);

container.addEventListener("mouseover", (event) => {
  let target = event.target;
  if (target == container) return;

  target.classList.add("hover");
});


gridBtn.onclick = () => {
  const rows = prompt("Enter row size");
  const columns = prompt("Enter column size");
  createGrid(rows, columns);
};