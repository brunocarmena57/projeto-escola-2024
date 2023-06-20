const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw  Error 
    ( `Please check "${selector}" selector, no such element exist`);
}

const links = getElement('.nav-links');
const navBtn = getElement('.nav-btn');

navBtn.addEventListener('click',  () => {
  links.classList.toggle('show-links');
});

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear;

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".li-horta");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", (event) => {
  const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});