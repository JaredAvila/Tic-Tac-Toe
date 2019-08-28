const playBtn = document.querySelector(".playBtn");
const play = document.querySelector(".play");
const startOver = document.querySelector(".startOver");

playBtn.addEventListener("click", () => {
  play.classList.add("hidden");
});

startOver.addEventListener("click", () => {
  play.classList.remove("hidden");
});
