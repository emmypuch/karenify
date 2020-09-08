const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});

var mybutton = document.querySelector("#myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});

document.addEventListener("DOMContentLoaded", function () {
  let menuButton = document.querySelector(".open-menu");

  function showMenu() {
    this.classList.toggle("open-menu--open");
  }

  menuButton.addEventListener("click", showMenu);

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      menuButton.classList.remove("open-menu--open");
    }
  });
});
