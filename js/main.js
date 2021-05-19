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
