// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"

"Hello World".toLowerCase();

// the return value is true 
"Hello World".includes("Hello");

//the return value is false. it does not ends with "Hello"
"Hello World".endsWith("Hello");

// return value is true. it does ends with "rld"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.


//the following code will return true because it starts with "J"
var firstName = "Jeff";
console.log(firstName.startsWith("J"));
//the following code will return the upper case of his last name. 
var lastName = "Johnson";
console.log(lastName.toUpperCase())


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var colorsArray1 = ["purple", "blue" , "pink"]
var colorsArray2 = ["green", "yellow", "orange"]
//colorsArray1[0] returns "purple" and the built-In method startsWith checks whether starts with the "p"
console.log(colorsArray1[0].startsWith("p"))
//colorsArray2[1].startsWith "y" will check if the color in position 1 starts with "y" and should return true.
console.log(colorsArray2[1].endsWith("w"))

