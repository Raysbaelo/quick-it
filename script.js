// video play
document.querySelector("video").play();

// burger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

// management app - step 1,2,3,4
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

const stepA = document.getElementById("stepA");
const stepB = document.getElementById("stepB");
const stepC = document.getElementById("stepC");
const stepD = document.getElementById("stepD");

function getStepA() {
  stepA.classList.remove("hideme");
  stepA.classList.add("z-index");
  stepD.classList.add("hideme");
  stepB.classList.add("hideme");
  stepC.classList.add("hideme");
  step4.classList.remove("selected");
  step2.classList.remove("selected");
  step3.classList.remove("selected");
  step1.classList.add("selected");
}

function getStepB() {
  stepB.classList.remove("hideme");
  stepB.classList.add("z-index");
  stepA.classList.add("hideme");
  stepD.classList.add("hideme");
  stepC.classList.add("hideme");
  step1.classList.remove("selected");
  step4.classList.remove("selected");
  step3.classList.remove("selected");
  step2.classList.add("selected");
}

function getStepC() {
  stepC.classList.remove("hideme");
  stepC.classList.add("z-index");
  stepA.classList.add("hideme");
  stepB.classList.add("hideme");
  stepD.classList.add("hideme");
  step1.classList.remove("selected");
  step2.classList.remove("selected");
  step4.classList.remove("selected");
  step3.classList.add("selected");
}

function getStepD() {
  stepD.classList.remove("hideme");
  stepD.classList.add("z-index");
  stepA.classList.add("hideme");
  stepB.classList.add("hideme");
  stepC.classList.add("hideme");
  step1.classList.remove("selected");
  step2.classList.remove("selected");
  step3.classList.remove("selected");
  step4.classList.add("selected");
}

step1.addEventListener("click", getStepA);
step2.addEventListener("click", getStepB);
step3.addEventListener("click", getStepC);
step4.addEventListener("click", getStepD);
