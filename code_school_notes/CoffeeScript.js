// Codeschool class: A sip of Coffeescript

// Lesson 1

//Coffescript compiles into javascript



// Don't have to declare variable (ex var message =)
// Don't need semicolans at the end of lines
// uses indenting instead of curly braces. uses two spaces or 1 tab, but need to be consistent
message = "Ready for some Coffee?"
alert(message)

// How to declare functions in Coffescript
//instead of:
function coffee(){ // This is a Named Function
	return confirm("Ready for some coffee?");
}
//OR
var coffee = function(){ // This is a function expression
	return confirm("Ready for some coffee?");
}
// then to run:
coffee();
// Way to write the above in coffeescript
// Coffee script only generates function expressions (see above)
// -> convert to function(){}
coffee = ->
  confirm "Ready for some Coffee" // all functions that get generate have a return value. You can assume the last item in a function will get returned

 // Example of not needing "return" in coffescript:
 coffee = ->
 	answer = confirm "Ready for some Coffee"?
 	"Your anser is " + answer // Dont need return before this lines.

 // YOu can use interpolation in javascript
 coffee = ->
 	answer = confirm "Ready for some Coffee"?
 	"Your anser is #{answer}" // place variable in a string using #{<variable>} instead of using the +

// How to add function parameters?
// Place parameters in () before the ->
coffee = (message) ->
 	answer = confirm message // places message parameter in confirm box
 	"Your anser is #{answer}"

//How to call a function in coffeescirpt
// Call a function with no parameter:
coffee()
// Call a function with 1 parameter:
coffee("Yo") //parenthesis are optional
// OR 
coffee "Yo" //parenthesis are optional
// Call a function with 2 parameters:
coffee("Yo",2) //parenthesis are optional
// OR 
coffee "Yo", 2 //parenthesis are optional

// when to use parenthesis
// It's best practice to use parenthisis on everything but the outer most function call

// How to do an optional parameter
// This is how we present a default alert message
coffee = (message = "Ready for some coffee?") -> // this is how you make a default alert message
 	answer = confirm message 
 	"Your anser is #{answer}"
 // If you send in a paramter, it will override the default




// Lesson 2

$ -> // This is find if jQuert is the only thing in your application that is using the dollor sign
// Or use
jQuery ($) ->

// Instead of using $(this) you can use $(@) in coffee script

$ ->
  changeTab = (e) ->
    e.preventDefault()
    $("#tabs li a.active").removeClass "active"
    $(@).addClass "active"

  $("#tabs ul li a").click changeTab

// Use coffee script to write an event handler
$("#tabs #error a").click (e) ->
	e.preventDefault()
//OR
$("#confirm").queue ->
$(@).dequeue()


// Lesson 3: Conditions and Operators
// How to do if statement in CS
if age < 18 //Parenthesis are optional. Curly braces go away
	alert 'Under age'
// Or
alert 'Under age' if age < 18 // This is how you get the above conditional on 1 line
// Or
if age < 18 then alert 'Under age' // You could also use 'then' for the conditional

// How to write if, else statements in CS
if age < 18 // don't need parenthesis or curly brackets
	alert 'User age'
else
	alert 'of age'
// Or
if age < 18 then alert 'Under age' else alert 'of age' // This is how to get if, else on one line

// Coffee script doesn't have any ternary operator. SO cant use ? or :
// Example of ternary in JS: http://msdn.microsoft.com/en-us/library/ie/be21c7hw(v=vs.94).aspx
// The ?: operator can be used as a shortcut for an if...else statement. It is typically used as part of a larger 
// expression where an if...else statement would be awkward. For example:
var now = new Date();
var greeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.");

// Operators in CS
// JS: === // CS: == OR is
// JS: !== // CS: != OR isn't
// JS: ! // CS: not
// JS: && // CS: or
// JS: true // CS: true OR yes OR on
// JS: false // CS: false OR no OR off

// Example of coffeescript operators:
if paid() and coffee() is on then pour() // 'is on' is checking truthiness

addCaffeine() if not Decaf()
// OR
addCaffeine() unless Decaf()

// How to do chained compaisons in Coffeescript
// JS example:
if (2< newLevel && newLevel < 5){
	alert("In Range!")
}
// Above written in coffescript
if 2 < newLevel < 5
	alert "In Range!"


// how to write switch statements in Cofffeescirpt
// JS example:
var message = (functioin(){
	switch (supOfCoffee){
		case 0:
			return 'Asleep';
		case 1:
			return 'Eyes Open';
		case 2:
			return 'Buzzed';
		default:
			return 'Dangerous';
	}
})();
// Above written in Cofeescript
message = switch cupsOfCoffee
	when 0 then 'Asleep'
	when 1 then 'Eyes Open'
	when 2 then 'Buzzed'
	else 'Dangerous'


// Existential Operators: checking if something exists
//How do we check to see that cupsOfCoffee isn't defined and isn't null?
// In JS:
if (typeof cupsOfCoffee !== "undefined" && cupsOfCoffee !== null){
	alert('it exists!');
}
// Above in Coffeescipt
if cupsOfCoffee? // The ? checks if it exists
	alert 'it exists!'
// Or
alert "it exists" if cupsOfCoffee? // This is how you write on one line

// How to set cupsOfCoffee to Zero unless previously set
if not cupsOfCoffee?
	cupsOfCoffee = 0
//Or
cupsOfCoffee = 0 unless cupsOfCoffee?
// Or
cupsOfCoffee ?= 0 // If isn't defined or equal to null, it will set it to zero


// What if you want to call a function on an object only if it exists?
if coffeePot?
	coffeePot.brew()
//Or
coffeePot?.brew()

// If you want to call a function only if it exists on an object:
vehicle.start_engine?().shift_gear?() // the ? before () ensures it will only call function if the function exists. Only going to cal start)engine if it exists on vehicle


// Lesson 4: Arrays, Objects, Iteration

// In coffeescript there are ranges
// Range example:
range = [1..4] // translates into JS of var range =[1,2,3,4];
// Or you can use three dots which will leave off the last number
range = [1...4] // translates into JS of var range = [1,2,3]
// Can also use Range for Variable and subsets
start = 5
end = 10

range = [start..end] // creates and array with [5,6,7,8,9,10]
// can get a subset of this array:
range[1..4] // which returs [6,7,8,9]
//can also do something like this:
range[1...range.length] // returns [6,7,8,9,10]
//Or
range[1..-1] // -1 will wrap around from front to last item


// To create an array in coffeeScript
storeLocations = [ //you can leave out the commas if you do proper spacing
	'Orlando'
	'Winter Park'
	'Sanford'
]

//How to loop through an array
for location in storeLocations
	alert "Location: #{location}"
// Or
alert " Location: #{location}" for location in storeLocations // This is how you get the above on one line. Called List Comprehension

// How to add ",FL" to each storeLocation:
"#{loc}, FL" for loc in storeLocations

//How to overwrite our original array?
storelocations = ("#{loc}, FL" for loc in storeLocations) // parenthesis are very important!

// How to call geoLocate function of each of our store location, exept stanford:
geoLocate(loc) for loc in storelocations when loc isnt 'Sanford' //this is called a filter. Can put any expression after filter

// How to create a new array without 'Sanford'
// use list comprehension:
newLocs = (loc for loc in storeLocations when loc isnt 'Sanford') // returns an array that doesn't include Sanford


// How to do a splats in coffeescript:
// spats are the ... after variable
// Use splats when we want to have a variable number of parameters into a function
searchLocations = (brand, cities...) -> // the ... takes the paramets and puts them in a aray
	"looking for #{brand} in #{cities.join(',')}"
// Call the function
searchLocations 'starducks', 'Orlando'
// Can also call this function with more parameters
searchLocations 'starducks', 'Orlando', 'Winter Park'

// Splats can also be passed into a function
params = ['Starducks', 'Orlando', 'Winter Park']
searchLocations(params...)


// Objects in Coffeescipt
// Objects are lists of key and values. These key and values are sometimes called hash

coffee = { name: 'French', strength: 1}
// Or
coffee = name: 'French', strength: 1 // can remove the curly braces
// Or
coffee = // can remove commas if you do correct spaces
	name: 'French'
	strenth: 1

// How to encapulate a function in an object
coffee = 
	name: 'French'
	strength: 1
	brew: -> alert("brewing #{@name}") // The @name is going to reference the name french. Which is represented in the current object we are in
// how to call this brew function
coffee.brew()
//Add another function to this object:
coffee = 
	name: 'French'
	strength: 1
	brew: -> alert("brewing #{@name}")
	pour: (amount=1) -> //default amount is set to 1
		if amount is 1
			"Poured a single cup"
		else
			"Poured #{amount} cups"

// NEED TO GET INDENTING CORRECT!

//COmplex objects
coffees =
	french:
		strenth: 1
		in_stock: 20
	italian:
		strenth: 2
		in_stock: 12
	decaf:
		strenth: 0
		in_stock: 8
// Call this Object
coffees.italian.in_stock // This would return 12

//How to iterte throught he coffee object?
"#{coffee} has #{attrs.in_stock}" for coffee, attrs of coffees // of iterates over an object.
// the above would print: ["fench has 20", "italian has 12", "decaf has 0"]
// what is "of"
// "of" when you want ot iterate through an object and we specify two variable we want to stor the key and value
// stores key in coffee and rest of them in attrs

//Anoter way to write the above loop:
for coffee, attrs of coffees
	"#{cofee} has #{attrs.in_stock}"

// how to print this out nicely. We don't want to include the coffees that aren't in stock
to_print = for coffee, attrs of coffees when attrs.in_stock > 0
	"#{coffee} has #{attrs.in_stock}"
to_print.join ", "


// Lesson 5: applied jQuery part 2

// How to write a bind in coffeescript
$("#tabs ul li a").bind // remove curely brances and commas
	click: changeTab
	mouseenter: showNumberOfFlights
	mouseleave: hideNumberOfFlights

// Example of CS

showFlights = (activeDiv) ->
	$("#tabs div").hide()

	if fetchingFlights
		fetchingFlights.abort()

	fetchingFlights = $.ajax 'flights'
		data:
			date: activeDiv
		cache: false
		error: (result) ->
			if result.statusText isnt "abort"
				$("#tabs #erros").show()


// Use list comprehension
filteredFlights = [];

$.each currentFlights, (index, flights) ->
	if stops is '2+' or flight.routing is 0
		filteredFlights.push flight
// Or in list comprehension
filteredFlights =
	(fligh for flight in currentFlights when stops is '2+' or fight.routing is 0)



// Lesson 6: Object orientation

coffee = 
	name: 'French'
	strength: 1
	brew: -> alert("brewing #{@name}")
	pour: (amount=1) -> 
		if amount is 1
			"Poured a single cup"
		else
			"Poured #{amount} cups"
//How ot make the object above a class?
class Coffee
	
	constructor: (name, strength=1) -> //constructor is called when it is instantiated. Cant call it explicitly
		@name = name //paremeters we set in which we are going to set as properties on the class. Instance variable
		@strength = strenth
// OR can write as one line
class Coffee
	
	constructor: (@name, @strength=1) -> //shortcut to th above
//How to have functions inside a class?
class Coffee
	
	constructor: (@name, @strength=1) ->

	brew: -> alert "brewing #{@name}"
	pour: (amount=1) -> 
		if amount is 1
			"Poured a single cup"
		else
			"Poured #{amount} cups"
// How to instantial this class object?
french = new Coffee("French", 2)
//Then we can call a class method an instance of the class
french.brew()

//How to do inheretence in coffeescript?
class MaxgoodHouse extends Coffee // If you instantiated MaxgoodHouse class it would work jsut as coffee class

// Can also override the constructor if we want:
class MaxgoodHouse extends Coffee
	constructor: (@name, @strength=0) -> //this chanes default strength to zero
		@brand = "Maxgood House"

//How to instantiate the above class?
boring = new MaxgoodHouse("Boring")
// How to call a method
boring.brew()

//If we want to call the function from the parent class, we can use the keyword "super"
class MaxgoodHouse extends Coffee
	constructor: (@name, @strength=0) -> //this chanes default strength to zero
		@brand = "Maxgood House"
	brew: -> alert "Brewing #{@brand} #{name}"
	pour: (amount=1) ->
		"#{super(amount)}, but it sucks" // if we want to call function we use keyword "super".
//How to call the pour function:
boring = new MaxgoodHouse("Boring")

boring.pour() // will return an alert with "poured a single cup, but it sucks"


//How to put some jQuery in the class
class Coffee
	constructor: (@name, @strength=1, @inventory=0) ->

	pourClick: ->
		$("#pour-#{@name}").click(event) => // THIS IS A FAT ARROW! Fat arrow binds to current value of this
			if @inventory isnt 0
				@inventory -= 1
				alert "Poured a cup of #{@name}"

// TODO: WHAT IS FAT ARROW. Min 3:30


//Using a Class for encapsulation:
Class SelectFlights
	constructor: (@fetchingFlights=null) ->

		$("#tabs ul li a").bind
			click: @changeTab

		$("#tabs #error a").click (event) => //uses fat arrow
			event.preventDefault()
			@showFlights $("#tabs li a.active").attr("href")
	showFlights : (activeDiv) ->
	changeTab : (event) => //uses fat arrow
// How to instantiate?
SelectFlights = new SelectFlights()



