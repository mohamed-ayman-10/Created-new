// Click Icon Menu

document.querySelector(".header .menu").onclick = function () {
  document.querySelector(".main-nav").classList.toggle("open");
  document
    .querySelector(".header .menu:hover span:nth-child(2)")
    .classList.toggle("clear");
  document
    .querySelector(".header .menu:hover span:first-child")
    .classList.toggle("rotate-1");
  document
    .querySelector(".header .menu:hover span:last-child")
    .classList.toggle("rotate-2");
};

// Nav Fixed
let myNav = document.querySelector(".header nav");

window.onscroll = function () {
  if (window.scrollY > myNav.offsetHeight + 600) {
    myNav.classList.add("nav-active");
  } else {
    myNav.classList.remove("nav-active");
  }
};
