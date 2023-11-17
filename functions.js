// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return "Hello, welcome!"; 
       }
  var greeting = greeting();
  console.log(greeting);
  
  
  // 2: Write a function named customGreeting that returns a greeting WITH a specific name.
  
  function customGreeting(name) {
    return "Hello, dear Visitor ";
      }
  var JohnGreeting = customGreeting("John"); 
  console.log(JohnGreeting);

 function customGreeting(name) {
    return "Hello, dear Rachel ";
      }
 var  RachelGreeting = customGreeting("Rachel");
 console.log(RachelGreeting); 
  
  
  // 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
  
  
  function greetPerson(firstName, middleName, lastName) {
    return "Hello, dear " + "Johnn" +  " Gosling " + "Junior";
  
  }
  
  var fullGreeting = greetPerson();
  console.log(fullGreeting);



 function greetPerson(firstName, middleName, lastName) {
    return "Hello, dear " + "Rachel Soae" +  " Prather " + "!" ;
  
  }
  
  var fullGreeting = greetPerson();
  console.log(fullGreeting);



  
  // 4: Write a function named square that takes in one number, and returns the square of that number.
  // BONUS: Print a sentence that interpolates the return value of your square function.
  
  function square (number) {
    return number * number;
  }
  console.log(square(7));  
  
  
  
  function checkStock(quantity, item) {
    if (quantity === 0) {
      console.log(`${item} - OUT of stock!`);
    } else if (quantity <= 3) {
      console.log(`${item} - running LOW`);
    } else {
      console.log(`${item} is stocked`);
    }
  }
  checkStock(4, "Coffee");
  checkStock(3, "Tortillas");
  checkStock(0, "Cheese");
  checkStock(1, "Salsa");



function square(number) {
  return number * number;
}
console.log(square(5));

function checkPastryIngredients(bread, butter, milk, flour) {

  if (quantity === 0) {
    console.log(`${item} - OUT of stock!`);
  } else if (quantity <= 2) {
    console.log(`${item} - running LOW`);
  } else {
    console.log(`${item} is stocked`);
  }
}
 checkStock(0, "Bread");
  checkStock(0, "Butter");
  checkStock(0, "Milk");
  checkStock(0, "Flour");











  
