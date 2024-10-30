console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Happy New Year!";
const text = "We wish you a happy new year. Welcome in 2024!";
let likes = 5000;
const postCreator = "Peter";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/
// --v-- write your code here --v--
console.log("title:" + title);
console.log("text:" + text);
console.log("Number of likes:" + likes);
console.log("created by:" + postCreator);
console.log("is reproted:" + isReported);
likes++;
console.log("Number of likes:" + likes);
// --^-- write your code here --^--
