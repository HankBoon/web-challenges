console.clear();

const inputField = document.querySelector('[data-js="first-input"]');
const buttonElement = document.querySelector('[data-js="button-uppercase"]');
buttonElement.addEventListener("click", () => {
  const oldValue = inputField.value;
  inputField.value = oldValue.toUpperCase();
});
