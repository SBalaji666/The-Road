"use strict";

const navWrapper = document.querySelector(".navbar-wrapper");
const navLinks = document.querySelectorAll(".nav-list-link");
const navOpenBtn = document.querySelector(".open-navbar-icon");
const navCloseBtn = document.querySelector(".close-navbar-icon");
const cardNavBtn = document.querySelectorAll(".navigation-btn");

// Navbar
navOpenBtn.addEventListener("click", function (e) {
  navWrapper.classList.add("change");
  navLinks.forEach((link) => link.classList.add("change"));
});

navCloseBtn.addEventListener("click", function (e) {
  navWrapper.classList.remove("change");
  navLinks.forEach((link) => link.classList.remove("change"));
});

// Card
cardNavBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    card.classList.toggle("change");
  });
});
