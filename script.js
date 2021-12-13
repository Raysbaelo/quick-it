const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;

slides.forEach((slide, index) => {
  constslideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());
  // touch events
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);

  // mouse events
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});

function touchStart(index) {
  return function (event) {
    console.log("start");
  };
}

function touchEnd() {
  return function (event) {
    console.log("start");
  };
}
