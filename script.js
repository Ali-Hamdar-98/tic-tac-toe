document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.querySelector('.start');

  startBtn.addEventListener('click', function() {
    const player1NameInput = document.getElementById('player1name');
    const player2NameInput = document.getElementById('player2name');
    const player1Name = player1NameInput.value.trim() || 'X';
    const player2Name = player2NameInput.value.trim() || 'O';
    const player1Color = document.getElementById('player1color').value;
    const player2Color = document.getElementById('player2color').value;

    localStorage.setItem('player1Name', player1Name);
    localStorage.setItem('player2Name', player2Name);
    localStorage.setItem('player1Color', player1Color);
    localStorage.setItem('player2Color', player2Color);

    window.location.href = 'game.html';
  });
});

let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let player1WinsRef = document.getElementById("player1-wins");
let player2WinsRef = document.getElementById("player2-wins");

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

let xTurn = true;
let count = 0;

const player1Color = localStorage.getItem('player1Color');
const player2Color = localStorage.getItem('player2Color');
document.documentElement.style.setProperty('--player1-color', player1Color);
document.documentElement.style.setProperty('--player2-color', player2Color);

const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  popupRef.classList.remove("hide");
};

const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });

  popupRef.classList.add("hide");
};

const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    updatePlayerWins("player1");
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    updatePlayerWins("player2");
  }
};

const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

const updatePlayerWins = (player) => {
  if (player === "player1") {
    let wins = parseInt(player1WinsRef.textContent);
    wins++;
    player1WinsRef.textContent = wins;
    if (wins === 3) {
      player1WinsRef.classList.add("animate-win");
    }
  } else if (player === "player2") {
    let wins = parseInt(player2WinsRef.textContent);
    wins++;
    player2WinsRef.textContent = wins;
    if (wins === 3) {
      player2WinsRef.classList.add("animate-win");
    }
  }
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerText === "") {
      if (xTurn) {
        xTurn = false;
        element.innerText = "X";
        element.classList.remove("o");
        element.classList.add("x");
      } else {
        xTurn = true;
        element.innerText = "O";
        element.classList.remove("x");
        element.classList.add("o");
      }
      count += 1;
      if (count == 9) {
        drawFunction();
      }
      winChecker();
    }
  });
});

window.onload = enableButtons;

document.addEventListener('DOMContentLoaded', function() {
  const player1Name = localStorage.getItem('player1Name');
  const player2Name = localStorage.getItem('player2Name');
  const player1Color = localStorage.getItem('player1Color');
  const player2Color = localStorage.getItem('player2Color');

  document.getElementById('player1-name').textContent = player1Name;
  document.getElementById('player2-name').textContent = player2Name;
  document.getElementById('player1-info').style.color = player1Color;
  document.getElementById('player2-info').style.color = player2Color;
});





