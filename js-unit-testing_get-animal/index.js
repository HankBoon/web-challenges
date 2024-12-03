export function getAnimal(animal) {
  if (!animal) {
    return `I do not like animals at all!`;
  } else if (animal[animal.length - 1] === "s" && animal !== "cats") {
    return `I like ${animal}!`;
  } else {
    return `I totally love ${animal}!`;
  }
}
