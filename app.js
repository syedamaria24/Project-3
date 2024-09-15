/// Q1:
var city = prompt("Enter the name of the city:");

if (city === "karachi") {
    alert("Welcome to the city of lights!");
} else {
    alert("Welcome to " + city + "!");
}

// Q2:
var gender = prompt("Enetr your gender");

if (gender === "male") {
    message = "Good Morning Sir.";
} else if (gender === "female") {
    message = "Good Morning Ma'am.";
} else {
     ("Invalid input. Please enter 'male' or 'female'.");
}
console.log(message);

// Q3:

var signalColor = prompt("Enter the traffic signal color (Red/Yellow/Green):");

if (signalColor === "red") {
    message = "Must Stop";
} 
else if (signalColor === "yellow") {
    message = "Ready to move";
} 
else if (signalColor === "green") {
    message = "Move now";
} 
else {
    alert("Invalid colourPlease enter Red, Yellow, or Green.");
}
console.log(message);

// Q4:
var remainingFuel = prompt("Enter the remaining fuel in your car");


if (remainingFuel < 0.25) {
    message = "Please refill the fuel in your car.";
} else {
    message = "You have enough fuel.";
}
console.log(message);

// Q5:
//  (a):
var a = 4;
if (++a === 5) {
    alert("given condition for variable `a` is true");
}

//  (b):
var b = 82;
if (b++ === 83){
    alert("given condition for variable `b` is true");
}

  //  (C):
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if(c=== 13){
    alert("condition 2 is true");
}
if(++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true")
}

   //  (d):
    var materialCost= 20000;
    var laborCost =2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
        alert("the cost equals");
    } 

    //  (e):
    if(true){
      alert("True");  
    }
    if(false){
       alert("False");
    }

    // (f):
    if("car" <"cat"){
       alert("car is smaller then cat"); 
    }

// Q7:

const secretNumber = 7;


var userGuess = prompt("Guess the secret number (between 1 and 10):");


if (userGuess === secretNumber) {
    message = "Bingo! Correct answer";
} 
else if (userGuess + 1 === secretNumber) {
    message = "Close enough to the correct answer";
} 
else {
    message = "Try again!";
}
console.log(message);

// Q8:
var number = prompt("Enter a number:");

if (number % 3 === 0) {
    message = number + " is divisible by 3.";
} 
else {
    message = number + " is not divisible by 3.";
}
console.log(message);

// Q9:

var number = prompt("Enter a number:");

if (number % 2 === 0) {
    message = number + " is an even number.";
} 
else {
    message = number + " is an odd number.";
}
console.log(message);

// Q10:

var temperature = prompt("Enter the temperature in degrees:");

if (temperature > 40) {
     message = "It is too hot outside.";
} 
else if (temperature > 30) {
          message = "The Weather today is Normal.";
} 
else if (temperature > 20) {
           message = "Today’s Weather is cool.";
} 
else if (temperature > 10) {
          message = "OMG! Today’s weather is so Cool.";
} 
else {
    message = "It's cold outside.";
}
console.log(message);

// Q11:

var firstNumber = prompt("Enter the first number:");

var secondNumber = prompt("Enter the second number:");

var operation = prompt("Enter the operation (+, -, *, /, %):");

// Perform the operation based on the user's input
if (operation === '+') {
    message = ("The result is: " + (firstNumber + secondNumber));
} 
else if (operation === '-') {
    messag = ("The result is: " + (firstNumber - secondNumber));
} 
else if (operation === '*') {
    message = ("The result is: " + (firstNumber * secondNumber));
} 
else if (operation === '/') {
    if (secondNumber !== 0) {
        message = ("The result is: " + (firstNumber / secondNumber));
    } 
    else {
        message = ("Error: Division by zero is not allowed.");
    }
}
 else if (operation === '%') {
    if (secondNumber !== 0) {
        message = ("The result is: " + (firstNumber % secondNumber));
    } 
    else {
        message = ("Error: Modulus by zero is not allowed.");
    }
} 
else {
    message = ("Invalid operation. Please enter one of +, -, *, /, %.");
}
console.log(message);



                   // XXXX ------ XXXXXXX ------ XXXX // 










