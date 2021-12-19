// management app - step 1,2,3,4
//buttons
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

//first step content
const stepA = document.getElementById("stepA");

let previousNumber = step1;
let previousLetter = stepA;

function getStep(letter) {
  previousNumber.classList.remove("selected");
  previousLetter.classList.add("hideme");

  let selectedStep = document.getElementById("step" + letter);
  selectedStep.classList.remove("hideme");
  selectedStep.classList.add("z-index");

  //char code for A is 65, so to get 1 we have to have char code from A - 64
  //char code for B is 66, so to get 2 we have to have char code from B - 64, etc.
  selectedStepNumber = document.getElementById("step" + (letter.charCodeAt() - 64));
  selectedStepNumber.classList.add("selected");

  previousNumber = selectedStepNumber;
  previousLetter = selectedStep;
}

step1.addEventListener("click", function () {
  getStep("A");
});
step2.addEventListener("click", function () {
  getStep("B");
});
step3.addEventListener("click", function () {
  getStep("C");
});
step4.addEventListener("click", function () {
  getStep("D");
});
