console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const timeNow = new Date().getHours();
  if (timeNow >= 6 && timeNow <= 12) {
    return "Good Morning";
  }
  if (timeNow >= 13 && timeNow <= 18) {
    return "Good Afternoon";
  }
  if (timeNow >= 19 && timeNow <= 22) {
    return "Good Evening";
  }
  if (
    (timeNow >= 23 && timeNow <= 24) ||
    timeNow === 0 ||
    (timeNow >= 1 && timeNow <= 5)
  ) {
    return "Good Night";
  }
}

function getDayColor() {
  const today = new Date().getDay();

  // switch (today) {
  //   case "monday":
  //     return "darkgray";
  //     break;
  //   case "tuesday":
  //   case "wednesday":
  //   case "thursday":
  //   case "friday":
  //     return "lightblue";
  //     break;
  //   case "saturday":
  //   case "sunday":
  //     return "hotpink";
  //     break;
  //   default:
  //     return "red";
  // }

  if (today === 1) {
    return "darkgray";
  } else if (today === 6 || today === 7) {
    return "hotpink";
  } else {
    return "lightblue";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
