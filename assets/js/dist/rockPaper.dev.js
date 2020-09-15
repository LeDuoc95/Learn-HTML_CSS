"use strict";

var handPaper = document.getElementById("hand-paper");
var handScissors = document.getElementById("hand-scissors");
var handRock = document.getElementById("hand-rock");
var gameMasseges = document.getElementById("game-masseges");
var gameScore = document.getElementById("game-score");
var loader = document.getElementById("loader");

var addListenerRockHand = function addListenerRockHand() {
  handPaper.addEventListener("click", function () {
    return playGame(1);
  });
  handScissors.addEventListener("click", function () {
    return playGame(2);
  });
  handRock.addEventListener("click", function () {
    return playGame(3);
  });
};

var playGame = function playGame(userOfChoise) {
  var winner, handOfComputer;
  return regeneratorRuntime.async(function playGame$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          winner = "balance"; // loader.style.display = "flex";

          _context.next = 3;
          return regeneratorRuntime.awrap(new Promise(function (resolve, reject) {
            return setTimeout(function () {
              resolve(Math.floor(Math.random() * 3) + 1);
            }, 3000);
          }));

        case 3:
          handOfComputer = _context.sent;
          // loader.style.display = "none";
          console.log("userOfChoise", handOfComputer); // if (handOfComputer === 1) {
          //   handOfComputer = "paper";
          // }
          // if (handOfComputer === 2) {
          //   handOfComputer = "scissor";
          // }
          // if (handOfComputer === 3) {
          //   handOfComputer = "rock";
          // }

          if (userOfChoise - handOfComputer === 0) {}

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

window.addEventListener("load", addListenerRockHand);