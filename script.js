const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  carouselImages.style.transform = `translateX(${-counter * width}px)`;
}

nextBtn.addEventListener("click", () => {
  counter = (counter + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  counter = (counter - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);
