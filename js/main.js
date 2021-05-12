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
