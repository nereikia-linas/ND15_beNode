"use strict"

// Navigation icon mobile function
function myFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
  nav.className = "topnav";
  }
}

// Set active menu link
var menuLink = document.getElementsByClassName('link');

for(var i = 0; i < menuLink.length; i++){
  menuLink[i].addEventListener("click", setActive);
}

function setActive(){
  for(var i = 0; i < menuLink.length; i++){
    menuLink[i].classList.remove("active");
    this.classList.add("active");
  }
}

// Set background when scrolled down
var navbar = document.getElementById("myTopnav");
var otherPosition = 0;

document.addEventListener("scroll", navScroll);
function navScroll(){
  otherPosition = window.scrollY;
  if (otherPosition > 0){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

document.getElementById("clickMe").onclick = function() {myCat()};

function myCat() {
  document.getElementById("hiddenCat").style.display = "block";
}
