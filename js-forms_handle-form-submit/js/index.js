console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log(
    `The age-badness-sum of ${event.target.elements.firstName.value} is ${
      Number(event.target.elements.age.value) +
      Number(event.target.elements.badness.value)
    }`
  );
  event.target.reset();
  event.target.elements.firstName.focus();
});
