"use strict";

var handPaper = document.getElementById("hand-paper");
var handScissors = document.getElementById("hand-scissors");
var handRock = document.getElementById("hand-rock");
var gameMasseges = document.getElementById("game-masseges");
var gameScore = document.getElementById("game-score");

var addListenerRockHand = function addListenerRockHand() {
  handPaper.addEventListener("click", function () {
    return playGame("paper");
  });
  handScissors.addEventListener("click", function () {
    return playGame("scissor");
  });
  handRock.addEventListener("click", function () {
    return playGame("rock");
  });
};

var test = function test() {
  console.log("asyn");
};

var playGame = function playGame(handOfchoise) {
  return regeneratorRuntime.async(function playGame$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(new Promise(function (resolve, reject) {
            return setTimeout(resolve, 3000);
          }));

        case 2:
          console.log("handOfchoise", handOfchoise);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

window.addEventListener("load", addListenerRockHand);