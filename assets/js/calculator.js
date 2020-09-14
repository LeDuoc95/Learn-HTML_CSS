const listNumber = document.getElementsByClassName("key-number");
const displayResult = document.getElementById("project-calculator__display-calculator");
const listOperator = document.getElementsByClassName("key-operator");
const clearResult = document.getElementsByClassName("key_ac");
const impletmentResult = document.getElementById("key_result");
const addDot = document.getElementById("key_dot");

let result = 0;

const addListener = () => {
  const lengOfListNumber = listNumber.length;
  const lengOfListOperator = listOperator.length;

  for (let i = 0; i < lengOfListNumber; i++) {
    listNumber[i].addEventListener("click", () => {
      if (displayResult.value === "0") {
        displayResult.value = listNumber[i].innerHTML;
      } else {
        displayResult.value += listNumber[i].innerHTML;
      }
    });
  }

  for (let j = 0; j < lengOfListOperator; j++) {
    listOperator[j].addEventListener("click", () => addListenerForOperator(listOperator[j].innerHTML));
  }

  clearResult[0].addEventListener("click", () => {
    displayResult.value = 0;
  });

  impletmentResult.addEventListener("click", () => calculate(displayResult.value));
  addDot.addEventListener("click", () => {
    if (displayResult.value.split(".").length <= 1) {
      displayResult.value += ".";
    }
  });
};

const addListenerForOperator = (operator) => {
  if (displayResult.value.split(" ").length >= 2) {
    calculate(displayResult.value);
  }
  displayResult.value += operator;
};

const calculate = (value) => {
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
