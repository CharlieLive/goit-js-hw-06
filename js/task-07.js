const input = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

input.addEventListener(`input`, controller);
input.value = input.min;
function controller() {
  text.style.fontSize = input.value + "px";
}
