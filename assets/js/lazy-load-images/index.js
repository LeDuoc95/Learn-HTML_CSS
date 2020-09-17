const pagePhotoBanner = document.getElementById("page-photo-banner");
const listImages = document.getElementById("list-images");
const loading = document.getElementsByClassName("loading");
const loaded = document.getElementsByClassName("loaded");
const loadMore = document.getElementById("load-more");

let presentPage = 1;

async function getImageBanner() {
  const response = await fetch("https://5f616bc707c1770016c52044.mockapi.io/banner").then((response) => response.json());
  pagePhotoBanner.style.backgroundImage = `url(${response.url})`;
}

async function getlistImages(page = 1) {
  loading[0].style.display = "block";
  loaded[0].style.display = "none";

  const response = await fetch(`https://5f616bc707c1770016c52044.mockapi.io/list-url/${page}`).then((response) => response.json());
  // console.log("response", page, response.items);

  let startItemLoad = 0;
  let endItemLoad = 6;

  console.log(startItemLoad, endItemLoad);

  if (presentPage > 1) {
    startItemLoad = endItemLoad;
    endItemLoad = endItemLoad + 5;
  }
  for (let i = startItemLoad; i < endItemLoad; i++) {
    let children = document.createElement("div");
    let node = document.createTextNode(`${response.items[i].title}`);
    children.style.backgroundImage = `url(${response.items[i].url})`;
    children.appendChild(node);
    children.classList.add("page-photo-list-images__background-item--item");

    let parent = document.createElement("div");
    parent.classList.add("page-photo-list-images__background-item");
    parent.appendChild(children);

    listImages.appendChild(parent);
  }

  loading[0].style.display = "none";
  loaded[0].style.display = "block";

  if (presentPage === 1) {
    presentPage = presentPage + 1;
  }
}

const loadData = () => {
  getImageBanner();
  getlistImages();
};

loadMore.addEventListener("click", () => {
  console.log('presentPage', presentPage)
  getlistImages(presentPage);
});
window.addEventListener("load", loadData);
