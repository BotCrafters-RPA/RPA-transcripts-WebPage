const APP = {
  init() {
    document
      .getElementById("mobile-menu-controller")
      .addEventListener("click", APP.toogleHeaderMenu);
      document
        .getElementById("background-color-controller")
        .addEventListener("click", APP.toogleHeaderMenu);
  },
  toogleHeaderMenu() {
    const nav = document.querySelector(".nav-mobile");
    nav.classList.toggle("active");
    APP.toogleImageSrcMenu();
  },
  toogleImageSrcMenu() {
    const imageElement = document.getElementById("mobile-menu-icon");
    const barSolidAsset = "./assets/bars-solid.svg";
    const xMarkSolidAssets = "./assets/xmark-solid.svg";
    if (imageElement.src.includes("bars-solid")) {
      imageElement.src = xMarkSolidAssets;
    } else if (imageElement.src.includes("xmark-solid")) {
      imageElement.src = barSolidAsset;
    }
  },
};
document.addEventListener("DOMContentLoaded", APP.init);
