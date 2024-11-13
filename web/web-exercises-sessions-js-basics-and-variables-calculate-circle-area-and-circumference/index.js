console.clear();

/*
How can you calculate the area and circumference of a pizza, eh, I mean circle? Let`s find out!

1. Initialize a variable to represent the radius of a circle. For example, you can set radius to a specific value, like 5.
2. Calculate the area of the circle using the formula "Math.PI * radius**2" and store the result in a variable called circleArea.
3. Calculate the circumference of the circle using the formula "Math.PI * radius* 2" and store the result in a variable called circumference.
4. Display the results by logging them to the console. You can use console.log to print the area and circumference.
5. Run your JavaScript program to see the calculated area and circumference of the circle with the specified radius.
*/
const radius = 5;
const circleArea = Math.PI * radius ** 2;
const circumference = Math.PI * radius * 2;
console.log("The circle area with a radius of " + radius + " is " + circleArea);
console.log(
  "The circumference  with a radius of " + radius + " is " + circumference
);