console.clear();
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  const sliderPosition = inputColor.value;
  box.style.background = `hsl(${sliderPosition} 70% 60%)`;
});

inputRadius.addEventListener("input", () => {
  const sliderPosition = inputRadius.value;
  box.style.borderRadius = `${sliderPosition}%`;
});

inputRotation.addEventListener("input", () => {
  const sliderPosition = inputRotation.value;
  box.style.transform = `rotate(${sliderPosition}deg)`;
});
