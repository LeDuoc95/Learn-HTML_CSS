const handPaper = document.getElementById("hand-paper");
const handScissors = document.getElementById("hand-scissors");
const handRock = document.getElementById("hand-rock");
const gameMasseges = document.getElementById("game-masseges");
const gameScore = document.getElementById("game-score");
const loader = document.getElementById("loader");
const loseOrWin = document.getElementById('lose-or-win');
const nodeChoiceOfUser = document.getElementById('choice-of-user');
const nodeChoiceOfComp = document.getElementById('choice-of-comp');
const resultOfPlay = document.getElementById('result');

const addListenerRockHand = () => {
  handPaper.addEventListener("click", () => playGame(1));
  handScissors.addEventListener("click", () => playGame(2));
  handRock.addEventListener("click", () => playGame(3));
};

const playGame = async (choiceOfUser) => {
  let winner = "Duplicate!!!";
  loader.style.display = "flex";
  let choiceOfComputer = await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 3) + 1);
    }, 3000)
  );
  const core = choiceOfUser - choiceOfComputer;
  loader.style.display = "none";

  if (choiceOfComputer === 1) {
    choiceOfComputer = "paper";
  }

  if (choiceOfComputer === 2) {
    choiceOfComputer = "scissor";
  }

  if (choiceOfComputer === 3) {
    choiceOfComputer = "rock";
  }

  if (choiceOfUser === 1) {
    choiceOfUser = "paper";
  }

  if (choiceOfUser === 2) {
    choiceOfUser = "scissor";
  }

  if (choiceOfUser === 3) {
    choiceOfUser = "rock";
  }
  
  if (core === -1 || core === 2) {
    winner = "You Lose!!!"
  }

  if (core === 1 || core === -2) {
    winner = "You Win!!!"
  }

  loseOrWin.innerHTML = winner;
  nodeChoiceOfUser.innerHTML = choiceOfUser;
  nodeChoiceOfComp.innerHTML = choiceOfComputer;
  resultOfPlay.innerHTML = `${core === -1 || core === 2 ? 'lose': core === 1 || core === -2 ? "win":"duplicate"}`;
  gameMasseges.style.visibility = "visible";
  let totalGameScore = gameScore.innerHTML.split(' : ');

  if(winner === "You Win!!!") {
    totalGameScore[0] = parseInt(totalGameScore[0]) + 1;
    gameScore.innerHTML = totalGameScore.join(' : ');
  }

  if(winner === "You Lose!!!") {
    totalGameScore[1] = parseInt(totalGameScore[1]) + 1;
    gameScore.innerHTML = totalGameScore.join(' : ');
  }
};

window.addEventListener("load", addListenerRockHand);
