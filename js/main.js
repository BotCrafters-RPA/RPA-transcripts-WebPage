

const APP = {
  init() {
    document.getElementById("mobile-menu-controller").addEventListener("click", APP.toogleHeaderMenu);
  },
  toogleHeaderMenu() {
    const nav = document.querySelector(".nav-list");
    nav.classList.toggle("active")
  },
};
document.addEventListener("DOMContentLoaded", APP.init);
