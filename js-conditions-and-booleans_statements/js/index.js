console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
// if (passwordIsTrue) {
//   console.log("Welcome! You are logged in as Brunhilde1984.");
// } else {
//   console.log("Access denied!");
// }
const passwordIsTrue =
  SUPER_SECRET_PASSWORD === receivedPassword
    ? console.log("Welcome! You are logged in as Brunhilde1984.")
    : console.log("Access denied!");
// Part 2: Even / Odd
const number = 15;
if (number % 2) {
  console.log("odd number");
} else {
  console.log("even number");
}
// Part 3: Hotdogs
const numberOfHotdogs = 549943;
// const price1 = numberOfHotdogs < 5;
// const price2 = 5 <= numberOfHotdogs && numberOfHotdogs < 100;
// const price3 = 100 <= numberOfHotdogs && numberOfHotdogs < 1000000;
// const price4 = 1000000 <= numberOfHotdogs;
// switch (numberOfHotdogs) {
//   case price1:
//     console.log("The price is: 2 euro");
//     break;
//   case price2:
//     console.log("The price is: 1.50euro");
//     break;
//   case price3:
//     console.log("The price is: 1 euro");
//     break;
//   case price3:
//     console.log("The price is: 0.10 euro");
//     break;
//   default:
//     console.log("You have to buy at least one Hot Dog!");
// }
if (numberOfHotdogs < 5) {
  console.log(
    "When you buy " + numberOfHotdogs + " Hotdogs, one Hotdog costs 2 euro"
  );
} else if (5 <= numberOfHotdogs && numberOfHotdogs < 100) {
  console.log(
    "When you buy " + numberOfHotdogs + " Hotdogs, one Hotdog costs 1.5 euro"
  );
} else if (100 <= numberOfHotdogs && numberOfHotdogs < 1000000) {
  console.log(
    "When you buy " + numberOfHotdogs + " Hotdogs, one Hotdog costs 1 euro"
  );
} else if (1000000 <= numberOfHotdogs) {
  console.log(
    "When you buy " + numberOfHotdogs + " Hotdogs, one Hotdog costs 0.1 euro"
  );
}

// Part 4: Daytime
const currentHour = 12;

let statement = "";
currentHour < 17
  ? (statement = "Still need to learn...")
  : (statement = "Party Time!");
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const coachName = "Esra";
const greeting = "Hello " + (userName === coachName ? "coach" : userName) + "!";

console.log(greeting);
