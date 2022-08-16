/*
Functions/rqmts
1.Create grid: rows and columns
2.Clear grid
3.modify grid counts
4. change color on hover
5. use random colors on hover
 */

function createGrids(x) {
  for(let rows = 0; rows < x; rows++){
    for(let columns = 0; columns < x; columns++){
      const box = document.getElementById("box");
      const div = document.createElement("div");
      box.appendChild(div);
      div.classList.add("grid");
      div.setAttribute("style", `height: ${480/x}px; width: {480/x}px`);
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
  

}







   