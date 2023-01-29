const input = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

input.addEventListener(`input`, controller);

function controller() {
    text.style.fontSize = input.value + "px";
}