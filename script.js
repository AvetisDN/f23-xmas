const themeSwitcher = document.querySelector(".theme_switcher");

if (window.matchMedia("prefers-color-scheme: dark")) {
  document.body.classList.add("dark");
}

if (localStorage.getItem("xmas-theme")) {
  if (localStorage.getItem("xmas-theme") === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "xmas-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

const burger = document.querySelector(".burger");
const close = document.querySelector(".nav_close");
const nav = document.querySelector(".nav");
burger.addEventListener("click", () => {
  nav.classList.add("show");
});
close.addEventListener("click", () => {
  nav.classList.remove("show");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
window.addEventListener("load", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin: 24,
        stagePadding: 64,
      },
      540: {
        items: 2,
        margin: 32,
        stagePadding: 16,
        center: false,
      },
      900: {
        items: 3,
        margin: 64,
        stagePadding: 16,
        center: false,
      },
    },
  });
});
