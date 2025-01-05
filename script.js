const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("id", `${i}x${j}`);
    container.appendChild(square);
  }
}

container.addEventListener("mouseover", (event) => {
  let target = event.target;
  if (target == container) return;

  target.classList.add("hover");
});
