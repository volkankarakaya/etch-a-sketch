let mainContainer = document.getElementById("main-container");
let squareNumber= 16;
let squareSize = mainContainer.clientWidth / squareNumber


for (let i = 0; i < squareNumber ** 2; i++) {
  let gridDiv = document.createElement("div");
  gridDiv.setAttribute("class", "square-grid");
  mainContainer.appendChild(gridDiv);
  gridDiv.style.width = squareSize+'px'
  gridDiv.style.height = squareSize+'px'
}

let squareDivs = document.querySelectorAll(".square-grid");

squareDivs.forEach(item => {
    item.addEventListener('mousedown', (e) =>{

        item.style.backgroundColor = 'gray'
        if (e.buttons==1){window.addEventListener('mouseover', ()=>{
            console.log('holding click')
        })}
    })
    
})