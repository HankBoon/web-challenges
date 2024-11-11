console.clear();
import { getRandomColor } from "./utils/randomColor.js";

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", getRandomColor);

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", getRandomColor);

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", getRandomColor);

root.append(circle, square, pentagon);
