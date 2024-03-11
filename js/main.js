const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");

hamburger.addEventListener("click", toggleNav);

function toggleNav() {
    nav.classList.toggle("active");
}