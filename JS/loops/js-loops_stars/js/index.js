console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  //Erster Ansatz

  // for (let i = 1; i <= 5; i++) {
  //   function createEmptyStar() {
  //     const img = document.createElement("img");
  //     img.src = "./assets/star-empty.svg";
  //     starContainer.append(img);
  //     img.addEventListener("click", () => {
  //       renderStars(i);
  //     });
  //   }
  //   function createFullStar() {
  //     const img = document.createElement("img");
  //     img.src = "./assets/star-filled.svg";
  //     starContainer.append(img);
  //     img.addEventListener("click", () => {
  //       renderStars(i);
  //     });
  //   }
  //   filledStars < i ? createEmptyStar() : createFullStar();
  // }

  // zweiter Ansatz für dritte Aufgabe:

  // for (let i = 1; i <= 5; i++) {
  //   const img = document.createElement("img");

  //   const emptyStar = "./assets/star-empty.svg";
  //   const filledStar = "./assets/star-filled.svg";

  //   function createStar(star) {
  //     img.src = star;
  //     starContainer.append(img);
  //     img.addEventListener("click", () => {
  //       renderStars(i);
  //     });
  //   }
  //   filledStars < i ? createStar(emptyStar) : createStar(filledStar);
  // }

  // dritter Ansatz:

  for (let i = 1; i <= 5; i++) {
    let img = document.createElement("img");
    filledStars < i
      ? (img.src = "./assets/star-empty.svg")
      : (img.src = "./assets/star-filled.svg");
    img.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(img);
  }

  // --^-- write or modify code above this line --^--
}

renderStars(0);
