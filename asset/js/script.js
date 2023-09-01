/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata. */

//elementi del DOM
const startGame = document.querySelector("button");
const gridEl = document.getElementById("grid");
//L'utente clicca su un bottone che genererà una griglia di gioco
startGame.addEventListener("click", function () {
  gridEl.style.display = "block";

  //appeso gli elementi creati
  genereteElement(gridEl);
});

//funzione per creare elementi
function genereteElement(element) {
  for (let i = 0; i < 100; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    element.append(square);
  }
}

//cambiare il nome delle celle e il colore
square.addEventListener("click", function () {});

//funzione per cambiare gli elementi
