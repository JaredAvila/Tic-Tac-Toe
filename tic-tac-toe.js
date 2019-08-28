const playBtn = document.querySelector(".playBtn");
const play = document.querySelector(".play");
const startOver = document.querySelector(".startOver");

playBtn.addEventListener("click", () => {
  play.classList.add("hidden");
  startGame();
});

startOver.addEventListener("click", () => {
  play.classList.remove("hidden");
});

class Player {
  constructor(name) {
    this.name = name;
  }
}

const startGame = () => {
  // Get players names
  let playerOneName = prompt(
    "Enter first player's name, please.",
    "Player One"
  );
  let playerTwoName = prompt(
    "Enter second player's name, please.",
    "Player Two"
  );
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
  console.log(playerOne, playerTwo);
};
