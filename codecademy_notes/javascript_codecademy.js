// Length counts every character in the string—including spaces!
"Joe".length

"I'm coding like a champ".length > 10

confirm("This is a pop-up confirmation!");

prompt("Where are you from")

console.log(2*5)
console.log("Hello")

// List of comparison operators:
// > Greater than
// < Less than
// <= Less than or equal to
// >= Greater than or equal to
// === Equal to
// !== Not equal to

console.log(15 > 4);
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 === 16);

console.log(22 > 66);
console.log(22 === 44);

// -----------------------------------------------------------------------
if ( 100 > 2 )
{
    console.log("You are good at math!");
}

console.log("Just letting you know: your program got to line 6");

// -----------------------------------------------------------------------
if ( 10 > 20) 
{
    alert("Let's go down the first road!");
}
else
{
    console.log("This is false")
    
}

// -----------------------------------------------------------------------
if(10 > 20){
	console.log("I am right")
}
else
{
	console.log("I am wrong")
}

// -----------------------------------------------------------------------
if(10 === 10){
    console.log("You got a true!");
}
else {
    console.log("You got a false!");
}

// -----------------------------------------------------------------------
if(12 / 4 === "Ari".length){
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}

//  -----------------------------------------------------------------------
if ("Jon".length * 2 / (2+1) === 2)
{
    console.log("The answer makes sense!");
} 
else {
	console.log("Error Error Error");
}

// Modulo: When % is placed between two numbers, the computer will divide the first number 
// by the second, and then return the remainder of that division.
console.log(14 % 3);
console.log(99 % 8);
console.log(11 % 3);

//  -----------------------------------------------------------------------
if( 10 % 2 === 0  ) {
    console.log("The first number is even!");
} else {
    console.log("The first number is odd!");
}

//  -----------------------------------------------------------------------
// What are Substrings
//  This preview is a substring of the original string (the entire message).
// "some word".substring(x, y) where x is where you start chopping and y is 
// where you finish chopping the original string.
"hello". substring(0, 2); // returns "he"

// Find the 4th to 7th letter of the string "wonderful day".
"wonderful day".substring(3,7);

console.log("January".substring(0,3))
console.log("Melbourne is great".substring(0,9))
console.log("Hamburgers".substring(3,8))

//  -----------------------------------------------------------------------
// To create a variable, we use only one equals sign
// But to check if two values are equal, we use 3 equal signs.
var myAge = 25;
console.log(myAge);

//  -----------------------------------------------------------------------
// Check if the user is ready to play!
confirm('I am ready to paly!');

var age = prompt("How old are you?");

if (age < 18 ){
    console.log("You're allowed to play, but I take no responsibility");
} else {
    console.log("Play on!");
}

console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. 
	There was a sale on and both needed some new threads. You've never really liked Batman. 
	You walk up to him.");

console.log("Batman glares at you");

var userAnswer = prompt("Are you feeling lucky, punk?");

if (userAnswer === "yes"){
    console.log("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");
} else console.log("You did not say yes to feeling lucky. Good choice! You are a winner 
	in the game of not getting beaten up by Batman.")

var feedback = prompt("Rank this game from 1 - 10")

if (feedback > 8){
    console.log("This is just the beginning of my game empire. Stay tuned for more!")
} else {
    console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!")
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////*******FUNCTIONS*******////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var balance = 20.97;

// Complete the condition in the ()s on line 4
if (balance < 10 ) {
	// console.log() the balance minus 5 dollars
	console.log( balance - 5);
} else {
	// Just console.log() the balance
    console.log(balance);
}

//  -----------------------------------------------------------------------
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
divideByThree(20); //This is how we call the function

//  -----------------------------------------------------------------------
var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};
greeting("Joe");

//  -----------------------------------------------------------------------
var foodDemand = function(food){
    console.log("I want to eat" + " " + food);
};
foodDemand("Apples")

//  -----------------------------------------------------------------------
// Do I have to put a semi-colon at the end of each line of code in the reusable block? 
// And at the end of the entire function?

// Yes. At the end of each line of code (within the { }) and after the entire 
// function (after the { }), please put a semi-colon. The semi-colon acts like a period 
// in a sentence. It helps the computer know where there are stopping points in the code.

var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};
var greeting = function (name){
    console.log(name);
}; 
greeting("Joe")

//  -----------------------------------------------------------------------
var orangeCost = function(cost){
    console.log(cost * 5);
};
orangeCost(5);

//  -----------------------------------------------------------------------
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};
// Call timesTwo here!
var newNumber = timesTwo(10)
console.log(newNumber);

//  -----------------------------------------------------------------------
// Define quarter here.
var quarter = function(number){
    return number/4
}
if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

//  -----------------------------------------------------------------------
var perimeterBox = function(length,width){
    return length * 2 + width * 2;
};
perimeterBox(1,1);

//  -----------------------------------------------------------------------
// We need to be introduced to a super important concept: scope. Scope can be global or local.

// Variables defined outside a function are accessible anywhere once they have been declared. 
// They are called global variables and their scope is global.

// Variables defined within a function are local variables. They cannot be accessed outside 
// of the function.


//  -----------------------------------------------------------------------
// Declare multiplied outside the function on line 3.
// This will mean it has global scope. 
var multiplied = 5;
var timesTwo = function(number) {
    
    var multiplied = number * 2;    
};
timesTwo(4);
// We cant access the variable multiplied! 
// Do something so line 15 will work!
console.log(multiplied);

//  -----------------------------------------------------------------------
var nameString = function (name) {
    return "Hi, I am" + " " + name;	
};

console.log(nameString("Joe"));

//  -----------------------------------------------------------------------
var creditCheck = function(income){
    if (income >= 100){
        return "You earn a lot of money! You qualify for a credit card.";
    }
    else
    {
        return "Alas you do not qualify for a credit card. Capitalism is cruel like that.";
    }
};
creditCheck(125);

//  -----------------------------------------------------------------------
var userChoice = prompt("Do you choose rock, paper or scissors?");

computerChoice = Math.random();

if (computerChoice < 0.33 ){
    computerChoice = "rock";
} else if (computerChoice > 0.33 && computerChoice < 0.66){
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log(computerChoice);

//  -----------------------------------------------------------------------
var compare = function(choice1, choice2){
    if (choice1 === choice2){
        return "The result is a tie";
    }
};
console.log(compare("hello", "hello"));

//  -----------------------------------------------------------------------
var compare = function(choice1, choice2){
    if (choice1 === choice2){
        return "The result is a tie";
    }
    if (choice1 === "rock"){
        if (choice2 === "paper"){
            return "paper wins!";
        } 
        else{
            return "rock wins!";
        }
    }
};
console.log(compare("paper", "rock"));

//  -----------------------------------------------------------------------
// Accepts a number x as input and returns its square
var square = function(x) {
    return x * x;
};
// Accepts a number x as input and returns its cube
var cube = function(x) {
    return x * x * x ;
};
cube(7);

//  -----------------------------------------------------------------------
var multiply = function (x, y) {
    return x * y;
};

multiply(2, 5);

var volume = function (w, l, h ) {
    return w * l * h;
};

volume(2, 3, 4);

//  -----------------------------------------------------------------------
var cube = function (n) {
    return n * n * n;
};
cube(5);

//  -----------------------------------------------------------------------
var cube = function(x) {
    return x * x * x;
};
// The cube function works fine with a number...
console.log(cube(5));

// ...but if it's called with a string, it returns NaN!
console.log(cube("test"));

//  -----------------------------------------------------------------------
var cube = function (x) {
    if ('boom' !== 'number') return 0;
    return x * x * x;
};
cube("test");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////*******LOOPS*******////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}

//  -----------------------------------------------------------------------
for (var i = 5; i < 11; i = i + 1){
	console.log(i);
}

//  -----------------------------------------------------------------------
for (var i = 4; i <= 23; i = i + 1) {
	console.log(i);
}

//  -----------------------------------------------------------------------
for (var i = 5; i <= 50; i += 5) {
	console.log(i);
}

//  -----------------------------------------------------------------------
for (var i = 8 ; i < 120; i+=12) {
	console.log(i);
}

//  -----------------------------------------------------------------------
for(var i = 100; i > 0; i-=5){
    console.log(i);
}

///////ARRAYS////////

//  -----------------------------------------------------------------------
var junk = ["hello", "you", 2, 3];
console.log(junk);

//  -----------------------------------------------------------------------
var junkData = ["Eddie Murphy", 49, "peanuts", 31];

console.log(junkData[3]);

//  -----------------------------------------------------------------------
// Let's print out every element of an array using a for loop

var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "test", "woop"];
for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

//  -----------------------------------------------------------------------
var names = ["Joe", "Mike", "James", "Travis", "Maggie"];

for(var i = 0; i < 5; i++){
    console.log("I know someone called " + names[i])
}

//  -----------------------------------------------------------------------
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;

for(var i = 0; i < 8; i++){
    if (array[i] > largest){
        largest = array[i];
    }
}

console.log(largest);

//  -----------------------------------------------------------------------
text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] == "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}

//  -----------------------------------------------------------------------
var text = "Hello there. My name is Joe Gesualdo. While my family calls me Joey, my friends call me Joe. I prefer Joe.";

var myName = "Joe";

var hits = [];

//  -----------------------------------------------------------------------
var text = "Hello there. My name is Joe Gesualdo. While my family calls me Joey, my friends call me Joe. I prefer Joe.";

var myName = "Joe";

var hits = [];

for(var i = 0; i < text.length; i++){
    
}

//  -----------------------------------------------------------------------
/*jshint multistr:true */
var text = "Hello there. My name is Joe Gesualdo. While my family calls me Joey, my friends call me Joe. I prefer Joe.";

var myName = "Joe";

var hits = [];

for(var i = 0; i < text.length; i++){
    if(text[i] === myName[0]){
        
    }
}

//  -----------------------------------------------------------------------
/*jshint multistr:true */
var text = "Hello there. My name is Joe Gesualdo. While my family calls me Joey, my friends call me Joe. I prefer Joe.";

var myName = "Joe";

var hits = [];

for(var i = 0; i < text.length; i++){
    if(text[i] === myName[0]){
        for(var j = i; j < myName.length + i; j++){
            hits.push(text[j]);
        }
    }
}

console.log(hits);


///////WHILE LOOPS////////

//  -----------------------------------------------------------------------
var coin = Math.floor(Math.random() * 2);

while(coin){
	console.log("Heads! Flipping again...");
	var coin = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

//  -----------------------------------------------------------------------
var understand = true;

while( understand ){
	console.log("I'm learning while loops!");
	understand = false;
}

//  -----------------------------------------------------------------------
understand = true;

while(understand){
	console.log("I'm learning while loops!");
	//Change the value of 'understand' here!
	understand = false;
}

//  -----------------------------------------------------------------------
var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}

//  -----------------------------------------------------------------------
var num = 0;
var loop = function(){
	while( num < 3 ){
		//Your code goes here!
        console.log("I'm looping!");
        num++;
	}
};

loop();

//  -----------------------------------------------------------------------
var condition = true;
var soloLoop = function(){
  //Your code goes here!
  while(condition){
      console.log("Looped once!");
      condition = false;
  }
};

soloLoop();

//  -----------------------------------------------------------------------
var num = 0;

while( num < 6 ){
    for(i = num ; i <= 3; i++){
        console.log("I am " + i );
    }
    for( i = num; i >= 4; i++){
        console.log("I am ....." + i);
    }
    num = 7;
}

//  -----------------------------------------------------------------------
loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + String(loopCondition) + "!");	
} while (loopCondition);

//  -----------------------------------------------------------------------
var getToDaChoppa = function(){
  // Write your do/while loop here!
  do {
      console.log("this is a do")
  } while(false);
};

getToDaChoppa();

//  -----------------------------------------------------------------------
for(var x = 1; x < 10; x++){
    console.log(x);
}

var condition = true;

while (condition){
    console.log("Hello");
    condition = false;
}

var condition = true;

do {
    "Hello";
    condition = false;
} while (condition);

//  -----------------------------------------------------------------------
var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}

//  -----------------------------------------------------------------------
var slaying = true;

var youHit  = Math.floor(Math.random()*2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

//  -----------------------------------------------------------------------
var slaying = true;

var youHit  = Math.floor(Math.random()*2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

while(slaying){
  slaying = false;  
}

//  -----------------------------------------------------------------------
var slaying = true;

var youHit  = Math.floor(Math.random()*2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

while(slaying){
    if (youHit === 1){
        console.log("Congratulations! You hit the dragon.")
    } else {
        console.log("The dragon has defeated you.")
    }
    slaying = false;  
}

//  -----------------------------------------------------------------------
var slaying = true;

var youHit  = Math.floor(Math.random()*2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

while(slaying){
    if (youHit === 1){
        console.log("Congratulations! You hit the dragon.");
        totalDamage += damageThisRound;
        if ( totalDamage >= 4 ){
            console.log("You slew the dragon!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random()*2);
        }
    } else {
        console.log("The dragon has defeated you.");
    }
    slaying = false;  
}

//  -----------------------------------------------------------------------
// if / else statement inside the isEven function. It should return true if 
// the number it receives is evenly divisible by 2; otherwise (else), it should return false.
var isEven = function(number) {
  // Your code goes here!
  if (number % 2 === 0){
      return true
  } else {
      return false
  }
};

//  -----------------------------------------------------------------------
var isEven = function(number) {
  // Your code goes here!
  if (number % 2 === 0){
      return true
  } else if ( isNaN(number) ){ //isNaN returns true if number is not a number
      return "The input isn't a number"
  } else {
      return false
  } 
};

//  -----------------------------------------------------------------------
for(var i = 0; i < 10; i++ ){
    console.log(i);
}

//  -----------------------------------------------------------------------
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

//  -----------------------------------------------------------------------
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  //Add your case here!
  case 'yellow':
      console.log("I LOVE the color yellow");
      break;
  default:
    console.log("I don't think that's a primary color!");
}

//  -----------------------------------------------------------------------
var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  // Add your code here!
  default:
    console.log("I dont know what that is");
}

//  -----------------------------------------------------------------------
var answer = prompt("How old are you");

switch(answer) {
  case 22:
    console.log(answer);
    break;
  // Add your code here!
  case 25:
    console.log(answer);
    break;
  default:
    console.log("Sorry don't know what number");  
}

//  -----------------------------------------------------------------------
// Write your code below!
var choice = prompt("What is your favorite animal?");

switch (choice){
    case 'dog':
        console.log("I love dogs too!");
        break;
    case 'cat':
        console.log("Cat's are cool, I guess");
        break;
    default:
        console.log(choice + " are okay");
        break;
}

//  -----------------------------------------------------------------------
// Write your code below!
var choice = prompt("What is your favorite animal?");

switch (choice){
    case 'dog':
        console.log("I love dogs too!");
        break;
    case 'cat':
        console.log("Cat's are cool, I guess");
        break;
    case 'bird':
        console.log(choice + "s are okay");
        break;
    default:
        console.log(choice + " are okay");
        break;
}

//  -----------------------------------------------------------------------
// So far we've seen how to control our programs given a single condition: 
// whether one variable is equal to a certain value, for instance. But what if we 
// want to check more than one variable?

// For this, we'll need logical operators. JavaScript has 
// three: and (&&), or (||), and not (!).

// true || true // => true
// true || false // => true
// false || true // => true
// false || false // => false

// !true // => false
// !false // => true

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

//  -----------------------------------------------------------------------
// Declare your variables here!
var hungry = true;

var foodHere = true;

var eat = function() {
  // Add your if/else statement here!
  if ( hungry && foodhere){
      return true;
  } else {
      return false;
  }
};

//  -----------------------------------------------------------------------
// Declare your variables here!
var bored = true;
var tired = false

var nap = function() {
  if(bored || tired){
      return true;
  } else{
      return false;
  }
};

//  -----------------------------------------------------------------------

// Declare your variables here!
var programming = false

var happy = function() {
  if (!programming){
      return true;
  } else {
      return false;
  }
  
};

//  -----------------------------------------------------------------------
var user = prompt("Provide your name").toUpperCase(); //.toUpperCase and .toLowerCase are both methods

//  -----------------------------------------------------------------------
var user = prompt("Provide your name").toUpperCase();

switch(user){
    case 'JOE':
        console.log(user)
        break;
    case 'KYLE':
        console.log(user)
        break;
    case 'ANTHONY':
        console.log(user)
        break;
    default:
        console.log("We dont recognize your name: " + user);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////*******DATA STRUCTURES*******////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////////ARRAYS//////

var list = ["fist", "second", "third"];

//  -----------------------------------------------------------------------
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]);
console.log(languages.length);

//  -----------------------------------------------------------------------
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (i = 0; i < languages.length; i++ ){
    console.log(languages[i]);
}

//  -----------------------------------------------------------------------
// You can have a heterogeneous array, which means a mixture of data types
var myArray = [11, true, "hello"];

//  -----------------------------------------------------------------------
 // you can even put other arrays inside arrays. You can make a two-dimensional 
 // array by nesting arrays one layer deep, like so:
var newArray = [[1,2,4],[5,6,7],[8,9,10]];

console.log(newArray)

//  -----------------------------------------------------------------------
// you may have three elements in the first row, one element in the second row, and two 
// elements in the third row. JavaScript allows those, and they're called jagged arrays.
var jagged = [[2,3],[1]]

//  -----------------------------------------------------------------------
// ////////OBJECTS//////

// Using objects, we can put our information and the functions that use that information 
// in the same place.

// You can also think of objects as combinations of key-value pairs (like arrays), 
// only their keys don't have to be numbers like 0, 1, or 2: they can be strings and variables.
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

//  -----------------------------------------------------------------------
var me = {};

me.name = "Joe";

me.age = 25;

//  -----------------------------------------------------------------------
var me = {};

me.name = "Joe";

me.age = 25;

// OR

var me = {
    name: "Joe",
    age: 25
};

//  -----------------------------------------------------------------------
// There are two ways to create an object: using object literal notation 
// (which is what you just did) and using the object constructor.

// Literal notation is just creating an object with curly braces, like this:
var myObj = { 
    type: 'fancy',
    disposition: 'sunny'
};

var emptyObj = {};

// When you use the constructor, the syntax looks like this:
var myObj = new Object();
// This tells JavaScript: "I want you to make me a new thing, and I want that 
// thing to be an Object.

// You can add keys to your object after you've created it in two ways:
myObj["name"] = "Charlie";
myObj.name = "Charlie";

//  -----------------------------------------------------------------------
// Create three objects called object1, object2, and object3 in the editor. Use 
// either literal notation or the object constructor, and give your objects any properties you like!
var object1 = {
    first_name: "Joe",
    last_name: "Gesualdo"
};

var object2 = new Object();

object2['first_name'] = "Joe"; // can do ['first_name'] or .first_name
object2.last_name = "Gesualdo";

var object3 = {}

object3.first_name = "Joe";
object3.last_name = "Gesualdo";

//  -----------------------------------------------------------------------
var myObj = new Object()
var myArray = [1, true, "Joe", myObj];

//  -----------------------------------------------------------------------
var object1 = {};

var newArray = [[2,3],[object1]];

//  -----------------------------------------------------------------------
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests: ["hello", true, 23]
  
};

//  -----------------------------------------------------------------------

var myOwnObject = {
    first: "Joe",
    last: "Gesualdo",
    age: 25,
}
console.log(myOwnObject.first + " " + myOwnObject.last)

//  -----------------------------------------------------------------------
var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "768-869-9687",
    address: ["boom way", 'New Jersey']
};

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "867-234-6534",
    address: ['One Blah Way', 'California']
};

var list = function(obj){
    for(var placeholder in obj){
        console.log(placeholder);
    }
};
//  -----------------------------------------------------------------------
// Here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8,16,24,32,40,58];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[5] % 8 !== 0;

//  -----------------------------------------------------------------------
// We're going to play a game of FizzBuzz. The rules are simple. We want to count 
// from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". 
// And if the number is divisible by 5 we're going to print "Buzz".

// What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!

// There are many ways to do this, but we'd like you to use a nested conditional in this exercise.

for(i = 1; i <= 20; i++ ){
    if ( i % 3 === 0 && i % 5 === 0 ){
        console.log("FizzBuzz");
    } else if (i % 3 === 0 ) {
        console.log("Fizz");
    } else if (i % 5 === 0 ){
        console.log("Buzz");
    } else{
        console.log(i);
    }
}

//  -----------------------------------------------------------------------
var getReview = function (movie) {
    switch (movie){
        case "Matrix":
            return "good trip out";
        case "Princess Bride":
            return "awesome date night movie";
        case "Welcome to America":
            return "Amjad's favorite";
        case "Remember the Titans":
            return "love the sports";
        case "Why do I look like I'm 12?":
            return "The Ryan and Zach story";
        case "Fighting Kangaroos in the wild":
            return "Token Australian movie for Leng";
        default:
            return "I don't know!"
    }
};

//  -----------------------------------------------------------------------
// Objects allow us to represent in code real world things and entities (such as a person or 
// 	bank account). We do this by storing all relevant information in one place—an object.

// Each piece of information we include in an object is known as a property. Think of a property 
// like a category label that belongs to some object. When creating an object, each property has a 
// name, followed by : and then the value of that property. For example, if we want Bob's object to 
// show he is 34, we'd type in age: 34.

// age is the property, and 34 is the value of this property. When we have more than one property, 
// they are separated by commas. The last property does not end with a comma.

var Spencer = {
  age: 22,
  country: "United States"
};

var me = {
    age: 25,
    country: "United States"
}

//  -----------------------------------------------------------------------
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;

//  -----------------------------------------------------------------------
// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"];
var age = dog["age"];

//  -----------------------------------------------------------------------
// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
    
susan2.name = susan1.name
susan2.age = susan1.age

//  -----------------------------------------------------------------------
// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
    species: "beagle",
    age: 10
}

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();

buddy.species = "golden retriever"
buddy.age = 5

//  -----------------------------------------------------------------------
var BMW = {
    cost: "too much",
    speed: 220,
    country: "Germany"
}

//  -----------------------------------------------------------------------
// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product

var multiply = function(x,y){
    return x * y
}

multiply(2,3);

//  -----------------------------------------------------------------------
// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20
bob.setAge(20);

//  -----------------------------------------------------------------------
var bob = new Object();
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2013 - bob.age;
};
console.log(bob.getYearOfBirth());

//  -----------------------------------------------------------------------
// it turns out we can make a method work for many objects using a new keyword, this. 
// The keyword this acts as a placeholder, and will refer to whichever object called 
// that method when the method is actually used.

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50)

//  -----------------------------------------------------------------------
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge; // Need to declare the method in the object
  
// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;



// here, update Susan's age to 35 using the method
susan.setAge(35);

//  -----------------------------------------------------------------------
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth){
    this.width = newWidth;
}
// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);

//  -----------------------------------------------------------------------
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function(){
    return this.sideLength * this.sideLength
} 

var p = square.calcPerimeter();
var a = square.calcArea();

//  -----------------------------------------------------------------------
// When we write bob = new Object( ) we are using a built-in constructor called Object. 
// This constructor is already defined by the JavaScript language and just makes an object 
// with no properties or methods.

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington", 275);

//  -----------------------------------------------------------------------
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(age, color){
    this.age = age;
    this.color = color;
}
//  -----------------------------------------------------------------------
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  }
  this.calcPerimeter = function(){
      return this.height * 2 + this.width * 2
  }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

//  -----------------------------------------------------------------------
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

//  -----------------------------------------------------------------------
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);

//  -----------------------------------------------------------------------
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff =  ageDifference(alice, billy)

//  -----------------------------------------------------------------------
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people


// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

var olderAge = function(person1, person2){
    if(person1.age > person2.age){
        return person1.age
    } else{
        return person2.age
    }
}

console.log("The older person is " + olderAge(alice, billy));

//  -----------------------------------------------------------------------
var spencer = {
  age: 22,
  country: "United States"
};

// make spencer2 here with constructor notation

var spencer2 = new Object();

spencer2.age = 22
spencer2.country = "United States"

//  -----------------------------------------------------------------------
var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// save Snoopy's age and species into variables
// use dot notation for snoopy's species
var species = snoopy.species
    
// use bracket notation for snoopy's age
var age = snoopy['age']

//  -----------------------------------------------------------------------
// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line

var the_hobbit = new Book(320,"J.R.R. Tolkien")

//  -----------------------------------------------------------------------
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
    this.perimeter = function(){
        return 2 * Math.PI * this.radius
    }
    };

//  -----------------------------------------------------------------------
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

//  -----------------------------------------------------------------------
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [];

contacts.push(bob,mary)

console.log(mary.phoneNumber)

//  -----------------------------------------------------------------------
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here

var printPerson = function(person){
    console.log(person.firstName + " " + person.lastName)
};

printPerson(contacts[0])
printPerson(contacts[1])

//  -----------------------------------------------------------------------
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list(){
    var contactsLength = contacts.length;
    for (i = 0; i < contactsLength; i++){
        printPerson(contacts[i])
    }
}

list();

//  -----------------------------------------------------------------------























