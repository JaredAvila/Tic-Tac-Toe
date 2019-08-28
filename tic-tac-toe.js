// DOM elements

const playBtn = document.querySelector(".playBtn");
const play = document.querySelector(".play");
const startOver = document.querySelector(".startOver");
const playersTurnDisp = document.querySelector(".playerName");

// Players
class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
    this.winner = false;
    this.movesGrid = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
  }
}

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

const startGame = () => {
  createPlayers();
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
  playerOneName = playerOneName.trim();
  playerTwoName = playerTwoName.trim();
  // If no name provided then give default values
  if (!playerOneName) {
    playerOneName = "Player One";
  }
  if (!playerTwoName) {
    playerTwoName = "Player Two";
  }
  // Instantiate players
  const playerOne = new Player(playerOneName);
  const playerTwo = new Player(playerTwoName);
  playerOne.turn = true;
  playerTurn(playerOne);
  console.log(playerOne, playerTwo);
};

const playerTurn = player => {
  playersTurnDisp.innerHTML = `${player.name}'s Turn`;
  playersTurnDisp.classList.remove("transName");
};
