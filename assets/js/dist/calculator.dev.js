"use strict";

var listNumber = document.getElementsByClassName("key-number");
var displayResult = document.getElementById("project-calculator__display-calculator");
var listOperator = document.getElementsByClassName("key-operator");
var clearResult = document.getElementsByClassName("key_ac");
var impletmentResult = document.getElementById("key_result");
var addDot = document.getElementById("key_dot");
var result = 0;

var addListener = function addListener() {
  var lengOfListNumber = listNumber.length;
  var lengOfListOperator = listOperator.length;

  var _loop = function _loop(i) {
    listNumber[i].addEventListener("click", function () {
      if (displayResult.value === "0") {
        displayResult.value = listNumber[i].innerHTML;
      } else {
        displayResult.value += listNumber[i].innerHTML;
      }
    });
  };

  for (var i = 0; i < lengOfListNumber; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(j) {
    listOperator[j].addEventListener("click", function () {
      return addListenerForOperator(listOperator[j].innerHTML);
    });
  };

  for (var j = 0; j < lengOfListOperator; j++) {
    _loop2(j);
  }

  clearResult[0].addEventListener("click", function () {
    displayResult.value = 0;
  });
  impletmentResult.addEventListener("click", function () {
    return calculate(displayResult.value);
  });
  addDot.addEventListener("click", function () {
    if (displayResult.value.split(".").length <= 1) {
      displayResult.value += ".";
    }
  });
};

var addListenerForOperator = function addListenerForOperator(operator) {
  if (displayResult.value.split(" ").length >= 2) {
    calculate(displayResult.value);
  }

  displayResult.value += operator;
};

var calculate = function calculate(value) {
  if (value.split(" ")[1] === "+") {
    displayResult.value = parseFloat(value.split(" ")[0]) + parseFloat(value.split(" ")[2]);
  }

  if (value.split(" ")[1] === "-") {
    displayResult.value = value.split(" ")[0] - value.split(" ")[2];
  }

  if (value.split(" ")[1] === "x") {
    displayResult.value = parseFloat(value.split(" ")[0]) * parseFloat(value.split(" ")[2]);
  }

  if (value.split(" ")[1] === "/") {
    displayResult.value = parseFloat(value.split(" ")[0]) / parseFloat(value.split(" ")[2]);
  }
};

window.addEventListener("load", addListener);