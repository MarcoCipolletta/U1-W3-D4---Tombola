// mi salvo tutte le variabili generali

const boardContainer = document.querySelector(".board-container");
const board = document.getElementById("board");
const extractedNumbers = [];

// 1) Creare le 90 celle della tombola ed il bottone per estrarre i numeri
const createBoard = () => {
  for (let i = 1; i <= 90; i++) {
    const div = document.createElement("div");
    div.className = "number";
    div.id = i;
    const h3 = document.createElement("h3");
    h3.innerText = i;
    div.appendChild(h3);
    board.appendChild(div);
  }
  const extractButton = document.createElement("button");
  extractButton.id = "extract-number";
  extractButton.innerText = "Extract";
  boardContainer.appendChild(extractButton);

  //3)
  const selectCell = (number) => {
    const id = number.toString();

    const cell = document.getElementById(id);
    cell.classList.add("extracted");
  };

  //2)
  const extractNumbers = () => {
    const totalNumbers = 90;

    //5-EXTRA)
    if (extractedNumbers.length >= totalNumbers) {
      alert("Tutti i numeri sono stati estratti.");
      return;
    }

    let drawnNumber;

    do {
      drawnNumber = Math.ceil(Math.random() * totalNumbers);
    } while (extractedNumbers.includes(drawnNumber));

    selectCell(drawnNumber);
    extractedNumbers.push(drawnNumber);

    console.log(drawnNumber);
  };
  extractButton.onclick = extractNumbers;
};

window.onload = () => {
  createBoard();
};

// 2) Creare la funzione per l' estrazione di un numero random da 1 a 90 per il bottone

// 3) Evidenziare la cella corrispondente al numero estratto

// 4) Mantenere evidenzate le celle precedentemente estratte.

// 5-EXTRA) Un numero estratto non può essere estratto di nuovo

// 6-EXTRA) Creare una tabella da 24 celle con numeri random, che si comporterà come il tabellone principale

// 7-EXTRA) Permettere all' utente di selezionare quante tabelline avere e generarle a schermo all' inizio della partita
