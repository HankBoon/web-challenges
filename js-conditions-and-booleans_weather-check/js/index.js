// Change this value to test different "weather" conditions.
const weather = "sunny";

switch (weather && temperature) {
  case "sunny":
    console.log("Its's sunny!");
    break;
  case "rainy":
    console.log("Its's rainy!");
    break;
  case "snowy":
    console.log("Its's snowy!");
    break;
  default:
    console.log("I am not sure about the weather!");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;
