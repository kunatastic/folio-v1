window.onscroll = function () {
  scrollFunction();
};
console.log(123456);
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.boxShadow =
      "0 0.5px 20px var(--text-color-opac)";
  } else {
    document.getElementById("navbar").style.boxShadow = "none";
  }
}
