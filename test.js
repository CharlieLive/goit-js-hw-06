const heading = document.querySelector(`h1`);

heading.classList.add("pink");

const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, (event) => {
  const list = document.querySelector(`ol`);
  list.classList.toggle("hidden");
  const text = list.classList.contains(`hidden`) ? "Show List" : "Hide List";

  // event.target = btn

  event.target.textContent = text;
  event.target.style.color = Math.random() > 0.5 ? "red" : "green";
});

const messageInput = document.querySelector(`#message`);

messageInput.addEventListener(`input`, (event) => {
  const input = event.target;
  const currentMessage = input.value;
  const maxLength = input.getAttribute(`maxLength`);

  if (currentMessage.length === parseInt(maxLength)) {
    console.log("max length reached");
  }
  console.log(currentMessage);
});

const textBTN = document.querySelector(`.text-btn`);

textBTN.addEventListener(`click`, () => {
  const input = document.querySelector(`#message`);
  const maxLength = parseInt(input.getAttribute(`maxLength`));
  const newLimit = maxLength + 3;
  console.log(`purchased 3 more letters. Fee 5$`);
  messageInput.setAttribute(`maxLength`, newLimit);
});

const premiumBTN = document.querySelector(`.premium-btn`);

premiumBTN.addEventListener(`click`, () => {
  console.log(`Purchased premium pack. Limits removed.`);
  messageInput.removeAttribute(`maxLength`);
});
