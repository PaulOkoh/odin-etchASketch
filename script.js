

function createGrids(x) {
  for(let rows = 0; rows < x; rows++){
    for(let columns = 0; columns < x; columns++){
      const box = document.querySelector("#box");
      const div = document.createElement("div");
      box.appendChild(div);
      div.classList.add("grid");
      div.setAttribute("style", `height: ${480/x}px; width: ${480/x}px`);
    }
  }
}

function clearGrid() {
  document.querySelectorAll(".grid").forEach((div) => box.removeChild(div));
}

function changeGridCount() {
  clearGrid();
  let columnCount = prompt("enter grid count");
  createGrids(columnCount);
  changeColorOnHover();
}

function changeColorOnHover() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach(function(div) {
    div.addEventListener("mouseover", function(e) {
      const color = "#000";
      e.target.style.background = color;
    })
  })
}


document.querySelector("#restart").addEventListener("click", changeGridCount);






   