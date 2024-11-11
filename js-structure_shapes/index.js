console.clear();
import CreateCircle from "./components/Circle/Circle.js";
import CreateSquare from "./components/Square/Square.js";
import CreatePentagon from "./components/Pentagon/Pentagon.js";

import { getRandomColor } from "./utils/randomColor.js";

const root = document.getElementById("root");

// function CreateCircle() {
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   circle.addEventListener("click", () => {
//     circle.style.backgroundColor = getRandomColor();
//   });
//   return circle;
// }

// function CreateSquare() {
//   const square = document.createElement("div");
//   square.classList.add("square");
//   square.addEventListener("click", () => {
//     square.style.backgroundColor = getRandomColor();
//   });
//   return square;
// }

// function CreatePentagon() {
//   const pentagon = document.createElement("div");
//   pentagon.classList.add("pentagon");
//   pentagon.addEventListener("click", () => {
//     pentagon.style.backgroundColor = getRandomColor();
//   });
//   return pentagon;
// }

// function CreateShape(shape) {
//   const createShape = document.createElement("div");
//   createShape.classList.add(shape);
//   createShape.addEventListener("click", () => {
//     createShape.style.backgroundColor = getRandomColor();
//   });
//   return createShape;
// }

// const circleElement = CreateShape("circle");
// const squareElement = CreateShape("square")";
// const pentagonElement = CreateShape("pentagon");

const circleElement = CreateCircle(getRandomColor);
const pentagonElement = CreatePentagon(getRandomColor);
const squareElement = CreateSquare(getRandomColor);
root.append(circleElement, pentagonElement, squareElement);
