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
