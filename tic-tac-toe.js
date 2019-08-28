// DOM elements

const playBtn = document.getElementById("playBtn");
const play = document.getElementById("play");
const startOver = document.getElementById("startOver");
const playersTurnDisp = document.getElementById("playerName");
const gameBoard = document.getElementById("gameContainer");

// Players Class
class Player {
  constructor() {
    this.name = null;
    this.turn = false;
    this.winner = false;
    this.id = 1;
    this.movesGrid = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
  }
}

// Instantiate players
const playerOne = new Player();
const playerTwo = new Player();

// When user pushes 'Play' run startgame function
playBtn.addEventListener("click", () => {
  // Hide play button screen
  play.classList.add("hidden");
  startGame();
});

// Takes user back to 'main menu'
startOver.addEventListener("click", () => {
  // Show play button screen
  play.classList.remove("hidden");
  playersTurnDisp.classList.add("transName");
});

gameBoard.addEventListener("click", e => {
  const clickedBox = e.target;
  if (clickedBox.classList[0] === "box") {
    if (clickedBox.innerHTML === "") {
      updateBox(clickedBox);
    }
  }
});

const startGame = () => {
  createPlayers();
  toggleTurn();
};

const createPlayers = () => {
  // Get players names
  let playerOneName = prompt(
    "Enter first player's name, please.",
    "Player One"
  );
  let playerTwoName = prompt(
    "Enter second player's name, please.",
    "Player Two"
  );
  // remove white space/prevent users from entering only spaces as a name
  if (playerOneName) {
    playerOneName = playerOneName.trim();
  }
  if (playerTwoName) {
    playerTwoName = playerTwoName.trim();
  }
  // If no name provided then give default values
  if (!playerOneName) {
    playerOneName = "Player One";
  }
  if (!playerTwoName) {
    playerTwoName = "Player Two";
  }
  playerOne.name = playerOneName;
  playerTwo.name = playerTwoName;
  playerTwo.turn = true;
  playerTwo.id = 2;
};

const toggleTurn = () => {
  // switches player turn and updates display name
  playerOne.turn = !playerOne.turn;
  playerTwo.turn = !playerTwo.turn;
  let player = playerOne.turn ? playerOne : playerTwo;
  playersTurnDisp.innerHTML = `${player.name}'s Turn`;
  if (playersTurnDisp.classList.length === 2) {
    playersTurnDisp.classList.remove("transName");
  }
};

const updateBox = element => {
  // checks who's turn is active and marks box accordingly
  if (playerOne.turn) {
    element.innerHTML = "X";
  } else {
    element.innerHTML = "O";
  }
  toggleTurn();
};
