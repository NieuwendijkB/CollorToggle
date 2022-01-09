var toggleNav = document.getElementById("toggleNav");
let toggleNavStatus = false;

toggleNav.addEventListener("click", function () {
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");

  if (toggleNavStatus === false) {
    getToggleMenuUl.style.visibility = "visible";
    getToggleMenu.style.width = "272px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

var blauwClick = document.getElementById("blauw");
var roodClick = document.getElementById("rood");
var groenClick = document.getElementById("groen");
var geelClick = document.getElementById("geel");
var paarsClick = document.getElementById("paars");

blauwClick.addEventListener("click", function () {
  document.body.classList.toggle("blauwClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

roodClick.addEventListener("click", function () {
  document.body.classList.toggle("roodClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

groenClick.addEventListener("click", function () {
  document.body.classList.toggle("groenClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

geelClick.addEventListener("click", function () {
  document.body.classList.toggle("geelClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }
    getToggleMenuUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
});

paarsClick.addEventListener("click", function () {
  document.body.classList.toggle("paarsClick");
  let getToggleMenu = document.querySelector(".toggle-menu");
  let getToggleMenuUl = document.querySelector(".toggle-menu ul");
  let getToggleMenuButton = document.querySelectorAll(".toggle-menu button");
  toggleNavStatus = true;
  if (toggleNavStatus === true) {
    getToggleMenu.style.width = "50px";

    let arrayLength = getToggleMenuButton.length;
    for (let i = 0; i < arrayLength; i++) {
      getToggleMenuButton[i].style.opacity = "0";
    }

    toggleNavStatus = false;
  }
});
/*
var blauw = document.getElementById("ul li #blauw");

blauw.addEventListener("click", function () {
  document.body.classList.add("blauwClick");
});
*/
/*
blauwButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
document.getElementById("ul li #blauw").onclick = changeColor;
function changeColor() {
  document.body.style.backgroundColor = "blue";
  return false;
}
*/
