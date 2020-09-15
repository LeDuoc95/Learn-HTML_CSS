const handPaper = document.getElementById("hand-paper");
const handScissors = document.getElementById("hand-scissors");
const handRock = document.getElementById("hand-rock");
const gameMasseges = document.getElementById("game-masseges");
const gameScore = document.getElementById("game-score");
const loader = document.getElementById("loader");

const addListenerRockHand = () => {
  handPaper.addEventListener("click", () => playGame(1));
  handScissors.addEventListener("click", () => playGame(2));
  handRock.addEventListener("click", () => playGame(3));
};

const playGame = async (userOfChoise) => {
  let winner = "balance";
  // loader.style.display = "flex";
  let handOfComputer = await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 3) + 1);
    }, 3000)
  );
  // loader.style.display = "none";
  console.log("userOfChoise", handOfComputer);

  // if (handOfComputer === 1) {
  //   handOfComputer = "paper";
  // }

  // if (handOfComputer === 2) {
  //   handOfComputer = "scissor";
  // }

  // if (handOfComputer === 3) {
  //   handOfComputer = "rock";
  // }

  if (userOfChoise - handOfComputer === 0) {
  }
};

window.addEventListener("load", addListenerRockHand);
