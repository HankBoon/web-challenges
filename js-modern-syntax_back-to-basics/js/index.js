/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

export const getNameAndCountry = ({ name, country }) => [name, country];

// original:
// export const getRelocatedCity = (city1, city2 = { name: "Berlin", country: "Germany" }) => {  //default value
//   const [, country] = getNameAndCountry(city2); // destructuring
//   return {...city1, country,};  //spread
// };
// console.log(getRelocatedCity());
// console.log(typeof city1);

// refactored:

export const getRelocatedCity = (city1, city2) => {
  // checks if city2 is undefined bzw falsey
  if (!city2) {
    city2 = { name: "Berlin", country: "Germany" };
  }
  const country = getNameAndCountry(city2)[getNameAndCountry(city2).length - 1]; // get letztes item in getNameAndCountry(city2)  // const country = city2.country;

  // erstellt ein leeres Object, nimmt alle keys von city1 und steckt sie in tempObject. country wird tempObject hinzugefügt.
  const tempObject = {};
  Object.assign(tempObject, city1);
  tempObject.country = country;
  return tempObject;
};
// console.log(getRelocatedCity);

// Notizen:

// const getNameAndCountry = (city2 = { name: "Berlin", country: "Germany" }) => [city2.name, city2.country]; // brauch nicht mehr deklariert werden . siehe erste zeile

// const getRelocatedCity returned ein Object {...city1, country,}
// const country = city2.country;

// const tempObject = {};
// city1.forEach((city) => {
//   Object.assign(tempObject, city);
//   tempObject.country = city2.country;
// } )
// return tempObject
