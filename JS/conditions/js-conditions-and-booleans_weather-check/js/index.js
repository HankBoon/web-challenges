// Change this value to test different "weather" conditions.
const weather = "snowy";

// switch (weather) {
//   case "sunny":
//     console.log("Its's sunny!");
//     break;
//   case "rainy":
//     console.log("Its's rainy!");
//     break;
//   case "snowy":
//     console.log("Its's snowy!");
//     break;
//   default:
//     console.log("I am not sure about the weather!");
// }

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = -2;

switch (weather) {
  case "sunny":
    console.log(
      temperature > 20
        ? "Its's sunny and warm!"
        : "It's sunny but a bit chilly!"
    );
    break;
  case "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;
  case "snowy":
    console.log(temperature < 0 ? "Its's freezing and snowing!" : "It's snowy");
    break;
  default:
    console.log("I am not sure about the weather!");
}
