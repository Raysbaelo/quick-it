// burger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

//change color of "for business" button
const forBusiness = document.getElementById("forBusiness");
if (window.location.href.includes("#app")) {
  forBusiness.classList.add("selected");
}
forBusiness.addEventListener("click", function () {
  forBusiness.classList.add("selected");
});

