"use strict";

var pagePhotoBanner = document.getElementById("page-photo-banner");
var listImages = document.getElementById("list-images");
var loading = document.getElementsByClassName("loading");
var loaded = document.getElementsByClassName("loaded");
var loadMore = document.getElementById("load-more");
var presentPage = 1;

function getImageBanner() {
  var response;
  return regeneratorRuntime.async(function getImageBanner$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://5f616bc707c1770016c52044.mockapi.io/banner").then(function (response) {
            return response.json();
          }));

        case 2:
          response = _context.sent;
          pagePhotoBanner.style.backgroundImage = "url(".concat(response.url, ")");

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getlistImages() {
  var page,
      response,
      startItemLoad,
      endItemLoad,
      i,
      children,
      node,
      parent,
      _args2 = arguments;
  return regeneratorRuntime.async(function getlistImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
          loading[0].style.display = "block";
          loaded[0].style.display = "none";
          _context2.next = 5;
          return regeneratorRuntime.awrap(fetch("https://5f616bc707c1770016c52044.mockapi.io/list-url/".concat(page)).then(function (response) {
            return response.json();
          }));

        case 5:
          response = _context2.sent;
          console.log("response", page, response.items);
          startItemLoad = 0;
          endItemLoad = 5;
          console.log(startItemLoad, endItemLoad);

          if (page >= 1) {
            startItemLoad = endItemLoad;
            endItemLoad = endItemLoad + 5;
          }

          for (i = startItemLoad; i < endItemLoad; i++) {
            console.log(i);
            children = document.createElement("div");
            node = document.createTextNode("".concat(response.items[i].title));
            children.appendChild(node);
            children.classList.add("page-photo-list-images__background-item--item");
            parent = document.createElement("div");
            parent.classList.add("page-photo-list-images__background-item");
            parent.appendChild(children);
            listImages.appendChild(parent);
          }

          loading[0].style.display = "none";
          loaded[0].style.display = "block";

          if (presentPage >= 1) {
            presentPage = presentPage + 1;
          }

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var loadData = function loadData() {
  getImageBanner();
  getlistImages();
};

loadMore.addEventListener("click", function () {
  getlistImages(presentPage);
});
window.addEventListener("load", loadData);