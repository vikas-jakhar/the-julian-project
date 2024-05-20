AOS.init({ once: true });

let menulist = document.querySelector(".menu-list");
let menuicon = document.querySelector(".menu-icon");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line-center");
let line3 = document.querySelector(".line3");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("right-0");
    menulist.classList.toggle("-right-full");
    line2.classList.toggle("hidden");
    line1.classList.toggle("rotate-45");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("top-0");
    line3.classList.toggle("bottom-0");
    menuicon.classList.toggle("top-3");
});

let title = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back 🤞";
});

window.addEventListener("focus", () => {
    document.title = title;
});

var playbtn = document.querySelector(".play-btn");
var img1 = document.querySelector(".img-1");

playbtn.addEventListener("click", function () {
    img1.classList.toggle("z-[2]");
})