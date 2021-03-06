const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchInputEl.setAttribute("placeholder", "");
});

const fadeInEls = document.querySelectorAll(".fade-in");
fadeInEls.forEach((fadeInEl, index) => {
  gsap.to(fadeInEl, {
    opacity: 1,
    delay: (index + 1) * 0.7,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

const promoButton = document.querySelector(".promo-expand");
const promotionEl = document.querySelector(".promotion");
let hidePromotion = true;
promoButton.addEventListener("click", () => {
  hidePromotion = !hidePromotion;
  if (hidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

const seasonalPhoto = document.querySelector(".seasonal .photo");
const seasonalText = document.querySelector(".seasonal .text-box");
gsap.from(seasonalPhoto, {
  x: -800,
  opacity: 0,
  duration: 1.5,
  ease: "power1.out",
});
gsap.from(seasonalText, {
  x: 800,
  opacity: 0,
  duration: 1.8,
  ease: "power1.out",
});

const exploreEl = document.querySelector(".explore");
const exploreImageEl = document.querySelector(".explore .image");
exploreEl.addEventListener("mouseenter", () => {
  exploreImageEl.classList.add("hover");
});
exploreEl.addEventListener("mouseleave", () => {
  exploreImageEl.classList.remove("hover");
});

const magazineText = document.querySelector(".magazine .text");
const magazineExplore = document.querySelector(".magazine .explore");
gsap.from(magazineText, {
  x: 800,
  duration: 1.5,
  ease: "power1.out",
});
gsap.from(magazineExplore, {
  x: 800,
  opacity: 0,
  duration: 1.5,
  ease: "power1.out",
  delay: 0.3,
});

const date = document.querySelector(".copyright .date");
date.textContent = new Date().getFullYear();
