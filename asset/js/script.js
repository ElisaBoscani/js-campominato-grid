/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata. */

//elementi del DOM
const startGame = document.querySelector("button");

const gridEl = document.getElementById("grid");
gridEl.classList.add("dNone");
let clearGrid = false;
//L'utente clicca su un bottone che genererà una griglia di gioco
startGame.addEventListener("click", function () {
  /*  gridEl.style.display = "block"; */
  if (!clearGrid) {
    genereteElement(gridEl, squareNumber);
    clearGrid = true;
  }
  if (gridEl.classList.contains("dNone")) {
    gridEl.classList.remove("dNone");
    gridEl.classList.add("d-flex");
  } else {
    gridEl.classList.add("dNone");
    gridEl.classList.remove("d-flex");
  }
});

//funzione per creare elementi

const squareNumber = 100;
function genereteElement(element, number) {
  for (let i = 0; i < number; i++) {
    //creato il quadratini e il testo(che parte con un display non, perche si vedra solo al click del quadrato)
    const square = document.createElement("div");
    const squareText = document.createElement("p");
    squareText.append(i + 1);
    squareText.classList.add("dNone");
    square.append(squareText);
    square.classList.add("square");
    element.append(square);

    //cambiare il nome delle celle e il colore
    square.addEventListener("click", function () {
      changeColorText(square, squareText);
    });
  }
}

//funzione per cambiare gli elementi
function changeColorText(color, text) {
  color.classList.toggle("bgColor");
  text.classList.toggle("dNone");
}
