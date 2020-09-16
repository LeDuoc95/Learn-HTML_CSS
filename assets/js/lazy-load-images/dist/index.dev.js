"use strict";

var pagePhotoBanner = document.getElementById("page-photo-banner");

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
          // waits until the request completes...
          pagePhotoBanner.style.backgroundImage = "url(".concat(response.url, ")");

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

var loadData = function loadData() {
  getImageBanner();
};

window.addEventListener("load", loadData);