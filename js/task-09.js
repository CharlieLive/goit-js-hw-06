function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector(`.change-color`);
const colorSpan = document.querySelector(`.color`);

colorButton.addEventListener(`click`, generateColor);

function generateColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

