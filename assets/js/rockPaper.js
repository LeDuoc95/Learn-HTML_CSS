const handPaper = document.getElementById("hand-paper");
const handScissors = document.getElementById("hand-scissors");
const handRock = document.getElementById("hand-rock");
const gameMasseges = document.getElementById("game-masseges");
const gameScore = document.getElementById("game-score");

const addListenerRockHand = () => {
  handPaper.addEventListener("click", () => playGame("paper"));
  handScissors.addEventListener("click", () => playGame("scissor"));
  handRock.addEventListener("click", () => playGame("rock"));
};

const test = () => {
  console.log("asyn");
};

const playGame = async (handOfchoise) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  console.log("handOfchoise", handOfchoise);
};

window.addEventListener("load", addListenerRockHand);
