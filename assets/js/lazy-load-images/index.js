const pagePhotoBanner = document.getElementById("page-photo-banner");

async function getImageBanner() {
  const response = await fetch("https://5f616bc707c1770016c52044.mockapi.io/banner").then((response) => response.json());
  // waits until the request completes...
  pagePhotoBanner.style.backgroundImage = `url(${response.url})`;
}

const loadData = () => {
  getImageBanner();
};

window.addEventListener("load", loadData);
