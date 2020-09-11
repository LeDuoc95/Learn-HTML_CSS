const listTodo = document.getElementById("list-todo");
const addTodo = document.getElementById("add-list");
const inputToAdd = document.getElementsByTagName("input");
const body = document.getElementsByTagName("body");
// const getItem = document.querySelectorAll(".page-todo__content--list li");

// Create data for list todo if its had not existed!
const createDataInLocalStorages = () => {
  if (!localStorage.getItem("dataForTodo")) {
    localStorage.setItem("dataForTodo", JSON.stringify({ data: [] }));
  }
};

const addOnClick = (getItem) => {
  console.log("getItem[getItem.length", getItem[getItem.length - 1]);
  if (getItem[getItem.length - 1]) {
    getItem[getItem.length - 1].addEventListener("click", () => {
      const allItemLi = document.querySelectorAll(".page-todo__content--list li");
      getItem[getItem.length - 1].classList.remove("item-done");
      getItem[getItem.length - 1].classList.add("item-done");
      //   console.log("getItem.length - 1", getItem.length - 1);
      console.log(getItem[getItem.length - 1].getElementByClass("item-done"));
      //   console.log(allItemLi[getItem.length - 1].getAttribute());
      console.log(allItemLi);
      //   getItem[getItem.length - 1].style.textDecoration = "line-through";
      //   const nodeImg = getItem[getItem.length - 1].getElementsByTagName("img");
      //   nodeImg[0].style.opacity = 1;
    });
  }
};

// data = [{content: "content",status: boolean}]
const addTaskToList = () => {
  let math = false;
  let dataTodo = JSON.parse(localStorage.getItem("dataForTodo"));
  dataTodo.data.map((val) => {
    if (val.content === inputToAdd[0].value) {
      math = true;
    }
    return val;
  });

  if (math) {
    alert("Task can not empty or duplicate!");
  }

  if (!math) {
    dataTodo.data.push({ content: inputToAdd[0].value, status: false });
    localStorage.setItem("dataForTodo", JSON.stringify({ data: dataTodo.data }));

    let nodeLi = document.createElement("LI");
    let nodeImg = document.createElement("IMG");
    nodeImg.src = "./assets/icon/icons8-checked.svg";
    let textnode = document.createTextNode(inputToAdd[0].value);
    nodeLi.appendChild(textnode);
    nodeLi.appendChild(nodeImg);
    listTodo.appendChild(nodeLi);
    inputToAdd[0].value = "";
    const getItem = document.querySelectorAll(".page-todo__content--list li");
    addOnClick(getItem);
  }
};

window.addEventListener("load", createDataInLocalStorages);
addTodo.addEventListener("click", addTaskToList);
