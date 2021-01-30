//======================================== * SHADOW ON NAVIGATION * ==================================================//

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navigation").style.boxShadow =
      "0 0.5px 20px rgba(0,0,0,.5)";
  } else {
    document.getElementById("navigation").style.boxShadow =
      "0 0 0 rgba(0,0,0,0)";
  }
}

//======================================== * SIDEBAR TOGGLE * ==================================================//

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  console.log("CLCKKEDD");
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
