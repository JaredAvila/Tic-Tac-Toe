// DOM elements

const playBtn = document.getElementById("playBtn");
const play = document.getElementById("play");
const playerNames = document.getElementById("playerNames");
const gameStart = document.getElementById("gameStart");
const startOver = document.getElementById("startOver");
const winBtn = document.getElementById("winBtn");
const playersTurnDisp = document.getElementById("playerName");
const gameBoard = document.getElementById("gameContainer");
const winnerDisp = document.getElementById("winnerDisp");
const winnerCircle = document.getElementById("winnerCircle");
const backdrop = document.getElementById("backdrop");

// Players Class
class Player {
  constructor() {
    this.name = null;
    this.turn = false;
  }
}

// Game Board
let gameGrid = [null, null, null, null, null, null, null, null, null];

// Instantiate players
const playerOne = new Player();
const playerTwo = new Player();
let playerOneName;
let playerTwoName;

// When user pushes 'Play' run startgame function
playBtn.addEventListener("click", () => {
  // Hide play button screen
  play.classList.add("hidden");
});
gameStart.addEventListener("click", () => {
  playerNames.classList.add("hidden");
  startGame();
});

// Takes user back to 'main menu'
startOver.addEventListener("click", () => {
  // Show play button screen
  returnToMain();
});
winBtn.addEventListener("click", () => {
  winnerCircle.classList.add("hidden");
  backdrop.classList.add("hidden");
  returnToMain();
});

// listener for clicks on the gameboard
gameBoard.addEventListener("click", e => {
  const clickedBox = e.target;
  if (clickedBox.classList[0] === "box") {
    if (clickedBox.innerHTML === "") {
      updateBox(clickedBox);
    }
  }
});

// starts the game
const startGame = () => {
  createPlayers();
  toggleTurn();
};

// returns to main menu and resets the game
const returnToMain = () => {
  play.classList.remove("hidden");
  playerNames.classList.remove("hidden");
  resetGame();
};

// resets the game
const resetGame = () => {
  gameGrid = [null, null, null, null, null, null, null, null, null];
  document.querySelectorAll(".box").forEach(box => {
    box.innerHTML = "";
  });
  document.getElementById("player1").value = "";
  document.getElementById("player2").value = "";
};

// creates players
const createPlayers = () => {
  // Get players names
  playerOneName = document.getElementById("player1").value;
  playerTwoName = document.getElementById("player2").value;
  // prevent users from leaving blank or entering only spaces as a name
  playerOneName = playerOneName.trim();
  playerTwoName = playerTwoName.trim();
  // If no name provided then give default values
  if (!playerOneName) {
    playerOneName = "Player One";
  }
  if (!playerTwoName) {
    playerTwoName = "Player Two";
  }
  playerOne.name = playerOneName;
  playerTwo.name = playerTwoName;
  playerOne.turn = false;
  playerTwo.turn = true;
  playerTwo.id = 2;
};

// switches player turn and updates display name
const toggleTurn = () => {
  playerOne.turn = !playerOne.turn;
  playerTwo.turn = !playerTwo.turn;
  let player = playerOne.turn ? playerOne : playerTwo;
  playersTurnDisp.innerHTML = `${player.name}'s Turn`;
};

// checks who's turn is active and marks box accordingly
const updateBox = element => {
  if (playerOne.turn) {
    element.innerHTML = "X";
    gameGrid[element.id - 1] = "X";
  } else {
    element.innerHTML = "O";
    gameGrid[element.id - 1] = "O";
  }
  winCheck();
  toggleTurn();
};

//  checks to see if someone has won the game
const winCheck = () => {
  if (gameGrid[0] === gameGrid[1] && gameGrid[0] === gameGrid[2]) {
    winner(gameGrid[0]);
  }
  if (gameGrid[0] === gameGrid[3] && gameGrid[0] === gameGrid[6]) {
    winner(gameGrid[0]);
  }
  if (gameGrid[0] === gameGrid[4] && gameGrid[0] === gameGrid[8]) {
    winner(gameGrid[0]);
  }
  if (gameGrid[1] === gameGrid[4] && gameGrid[1] === gameGrid[7]) {
    winner(gameGrid[1]);
  }
  if (gameGrid[2] === gameGrid[4] && gameGrid[2] === gameGrid[6]) {
    winner(gameGrid[2]);
  }
  if (gameGrid[2] === gameGrid[5] && gameGrid[2] === gameGrid[8]) {
    winner(gameGrid[2]);
  }
  if (gameGrid[3] === gameGrid[5] && gameGrid[3] === gameGrid[4]) {
    winner(gameGrid[3]);
  }
  if (gameGrid[6] === gameGrid[7] && gameGrid[6] === gameGrid[8]) {
    winner(gameGrid[6]);
  }
  if (
    gameGrid[0] &&
    gameGrid[1] &&
    gameGrid[2] &&
    gameGrid[3] &&
    gameGrid[4] &&
    gameGrid[5] &&
    gameGrid[6] &&
    gameGrid[7] &&
    gameGrid[8]
  ) {
    winner("draw");
  }
};

// determines the winner
const winner = letter => {
  if (letter) {
    if (letter === "X") {
      winnerDisp.innerHTML = playerOne.name + " wins!";
    } else if (letter === "O") {
      winnerDisp.innerHTML = playerTwo.name + " wins!";
    } else {
      winnerDisp.innerHTML = "Draw!";
    }
    winnerCircle.classList.remove("hidden");
    backdrop.classList.remove("hidden");
  }
};
