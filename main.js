// Variables from DOM

//menu variables
const menuBtn = document.querySelector(".hamburger_menu");
const closeBtn = document.querySelector(".close_menu");
const mobileNavbar = document.querySelector(".mobile_navbar");
const navbar = document.querySelector(".navbar_two");
const logo = document.querySelector(".logo");
const logoTwo = document.querySelector(".logo_two");

//title variables
const titleOne = document.querySelector(".one");
const titleTwo = document.querySelector(".two");
const titleThree = document.querySelector(".three");
const featureOne = document.querySelector(".mf_one");
const featureTwo = document.querySelector(".mf_two");
const featureThree = document.querySelector(".mf_three");

// toggle hamburger menu
menuBtn.addEventListener("click", function () {
  closeBtn.style.display = "block";
  menuBtn.classList.add("close_menu");
  mobileNavbar.style.display = "block";
  navbar.style.display = "block";
  logo.style.display = "none";
  logoTwo.style.display = "block";
  document.body.classList.toggle("de_active_overflow");
});

// close hamburger menu
closeBtn.addEventListener("click", function () {
  closeBtn.style.display = "none";
  menuBtn.classList.remove("close_menu");
  closeBtn.classList.add("hamburger_menu");
  mobileNavbar.style.display = "none";
  logo.style.display = "block";
  navbar.style.display = "none";
  logoTwo.style.display = "none";
  document.body.classList.toggle("de_active_overflow");
});

// Switching Features
titleOne.addEventListener("click", () => {
  document.querySelector(".one").classList.add("active_border");
  document.querySelector(".two").classList.remove("active_border");
  document.querySelector(".three").classList.remove("active_border");

  featureOne.classList.add("active_features");
  featureOne.style.display = "flex";
  featureTwo.style.display = "none";
  featureThree.style.display = "none";
});

titleTwo.addEventListener("click", () => {
  document.querySelector(".one").classList.remove("active_border");
  document.querySelector(".two").classList.add("active_border");
  document.querySelector(".three").classList.remove("active_border");

  featureTwo.classList.add("active_features");
  featureTwo.style.display = "flex";
  featureOne.style.display = "none";
  featureThree.style.display = "none";
});

titleThree.addEventListener("click", () => {
  document.querySelector(".one").classList.remove("active_border");
  document.querySelector(".two").classList.remove("active_border");
  document.querySelector(".three").classList.add("active_border");

  featureThree.classList.add("active_features");
  featureThree.style.display = "flex";
  featureOne.style.display = "none";
  featureTwo.style.display = "none";
});

// Email Validation
function emailValidate() {
  var inputText = document.getElementsByTagName("input")[0].value;
  var fetch = /\S+@\S+\.\S+/.test(inputText);

  if (fetch) {
    document.getElementById("validationText").style.visibility = "hidden";
    document.getElementById("email").style.border = "none";
  } else {
    document.getElementById("validationText").style.visibility = "visible";
    document.getElementById("email").style.border =
      "2px solid hsl(0, 94%, 66%)";
  }
}
