
    function genDivs(v){ 
      var container = document.getElementById("container"); // whatever you want to append the rows to: 
      for(var i = 0; i < v; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "gridsquare"; 
            cell.innerText = (i * v) + x;
            row.appendChild(cell); 
        } 
        container.appendChild(row); 
      } 
      // document.getElementById("code").innerText = e.innerHTML;

    }

    let btn = document.getElementById("btn");

    btn.addEventListener("click", genDivs(16));

/* <body> 
    <input type="button" onclick="genDivs(6)" value="click me"> 
    <code id="code"></code>
</body> 
</html>  */