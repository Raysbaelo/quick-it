// reviews //

const review1 = document.querySelector("#review1");
const review2 = document.querySelector("#review2");
const button = document.querySelector(".carusel-button");

function start() {
  button.addEventListener("mousedown", getReview2);
}

function getReview2() {
  console.log(getReview2);
  this.removeEventListener("mousedown", getReview2);
  review2.classList.remove("hide");

  review1.classList.add(".hideme");
}
