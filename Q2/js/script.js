let steps = 0;
function increase() {
  // steps++;
  // document.getElementById("steps").innerText = steps;
  document.getElementById("steps").stepUp(1);
}
function decrease() {
  // steps--;
  // document.getElementById("steps").innerText = steps;
  document.getElementById("steps").stepDown(1);
}
function reset() {
  steps = 0;
  document.getElementById("steps").value = steps;
}
document.getElementById("increase").addEventListener("click", increase);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("decrease").addEventListener("click", decrease);
