// * SHADOW ON NAVIGATION * //

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

// * SIDEBAR TOGGLE * //

var $xBar = $(".close"),
  $sideNav = $(".side-nav"),
  $menuIcon = $(".hamburger");

$menuIcon.click(function () {
  $sideNav.css({
    left: 0,
  });
  $menuIcon.fadeOut(5);
  $xBar.css({
    top: 30,
  });
  if ($(window).width() < 767) {
    $sideNav.css({
      left: 0,
    });
  }
  if ($(window).width() < 992) {
    $sideNav.css({
      width: 270,
    });
  }
});

$xBar.click(function () {
  $sideNav.css({
    left: -307,
  });
  $menuIcon.fadeIn(500);
  $xBar.css({
    top: -30,
  });
  if ($(window).width() < 767) {
    $sideNav.css({
      left: -100 + "%",
    });
  }
  if ($(window).width() < 991 && $(window).width() > 1199) {
    $sideNav.css({
      left: -270,
    });
  }
});
