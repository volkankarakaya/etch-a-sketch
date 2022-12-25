let mainContainer = document.getElementById("main-container");
let squareNumber = Number(prompt("Choose grid size between 1-100!", "16"));



function checkValidPrompt(squareNumber) {
  while (
    squareNumber > 100 ||
    squareNumber < 1 ||
    !Number.isInteger(squareNumber)
  ) {
    squareNumber = Number(prompt("Enter a valid value!", "16"));
  }
}

checkValidPrompt(squareNumber);


let squareSize = mainContainer.clientWidth / squareNumber;
for (let i = 0; i < squareNumber ** 2; i++) {
  let gridDiv = document.createElement("div");
  gridDiv.setAttribute("class", "square-grid");
  mainContainer.appendChild(gridDiv);
  gridDiv.style.width = squareSize + "px";
  gridDiv.style.height = squareSize + "px";
  gridDiv.style.flexBasis = squareSize + "px";
}

let squareDivs = document.querySelectorAll(".square-grid");

squareDivs.forEach((item) => {
  item.addEventListener("mousedown", (e) => {
    item.style.backgroundColor = "gray";
    if (e.buttons == 1) {
      squareDivs.forEach((div) =>
        div.addEventListener("mouseover", (e) => {
          if (e.buttons == 1) {
            e.target.style.backgroundColor = "black";
          }
        })
      );
    }
  });
});
