import Chance from "chance";
const chance = new Chance();

export default function handler(request, response) {
  const character = { firstName: chance.first(), lastName: chance.last() };
  response.status(200).json(character);
}
