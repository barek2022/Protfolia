//navbar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//navbar

// portfolio filter JS

let sortBtn = document.querySelector(".filter-menu").children;
let sortItem = document.querySelector(".filter-item").children;

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener("click", function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove("current");
    }

    this.classList.add("current");

    let targetData = this.getAttribute("data-target");

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove("active");
      sortItem[k].classList.add("delete");

      if (
        sortItem[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        sortItem[k].classList.remove("delete");
        sortItem[k].classList.add("active");
      }
    }
  });
}
