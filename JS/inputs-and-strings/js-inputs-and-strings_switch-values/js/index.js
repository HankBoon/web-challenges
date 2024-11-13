console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const toggleButton = document.querySelector('[data-js="button-switch-case"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

toggleButton.addEventListener("click", () => {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  firstInput.value = secondValue;
  secondInput.value = firstValue;
});