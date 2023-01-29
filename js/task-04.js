let counterValue = 0;

const counter = document.querySelector(`#counter`);
const value = document.querySelector(`#value`);

const decrementButton = counter.querySelector(`[data-action="decrement"]`);
const intrementButton = counter.querySelector(`[data-action="increment"]`);

decrementButton.addEventListener(`click`, decrement);
intrementButton.addEventListener(`click`, increment);

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}
