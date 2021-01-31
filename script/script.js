//======================================== * SHADOW ON NAVIGATION * =============================================//

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navigation").style.boxShadow =
      "0 0.5px 20px rgba(0,0,0,.5)";
  } else {
    document.getElementById("navigation").style.boxShadow =
      "0 0 0 rgba(0,0,0,0)";
  }
}

//============================================* CUSTOM SCROLL *===============================================//
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
  scrollFunction();
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
  progressBar.style.opacity = `${newProgressHeight * 2}%`;
};
