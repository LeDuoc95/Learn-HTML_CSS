const resetColor = document.getElementById('reset-game');
const codeColor = document.getElementById('code-color');
const codeMessages = document.getElementById('code-messages');
const listColor = document.getElementById('list-color');


let codeRandom = "";

const codeRandomColor = () => `${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`;

const setRandomColor = () => {
  codeRandom = codeRandomColor();
  codeColor.innerHTML = codeRandom;
  let isRandom = false;
  let orderRightColor = Math.floor(Math.random()*6);
  for(let i = 0; i < 6; i++) {
    if(!isRandom && i === orderRightColor) {
      let nodeLi = document.createElement('LI');
      let colorOfNode = codeRandom;
      nodeLi.style.backgroundColor = `rgb(${colorOfNode})`;
      nodeLi.addEventListener('click',() => checkChoseColor(colorOfNode));
      listColor.appendChild(nodeLi);
      isRandom = true;
      continue;
    };

    let nodeLi = document.createElement('LI');
    let colorOfNode = codeRandomColor();
    nodeLi.style.backgroundColor = `rgb(${colorOfNode})`;
    nodeLi.addEventListener('click',() => checkChoseColor(colorOfNode));
    listColor.appendChild(nodeLi);
  }
};

const checkChoseColor = (colorOfNode) => {
  if(codeRandom === colorOfNode) {
    codeMessages.innerHTML = "Exactly!";
    // const getItem = document.querySelectorAll('.page-find-color__content li');
    // const lengthOfGetItem = getItem.length;
    // for(let i = 0;i < lengthOfGetItem;i++) {
    //   console.log('getItem[i]', getItem[i])
    //   getItem[i].removeEventListener('click',() => {
    //     console.log('object')
    //   });
    // }
  } else {
    codeMessages.innerHTML = "Wrong color!";
  }
}

resetColor.addEventListener("click", () => {
  codeColor.innerHTML = codeRandomColor();
  codeMessages.innerHTML = "";
})

window.addEventListener('load',setRandomColor);