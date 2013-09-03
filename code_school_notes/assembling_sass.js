// LESSON 1

// Sass: syntactically awesome stylesheets
// preprocessor, like cofeescript and HAML

// DONT USE CAPITAL LETTERS FOR SASS: Sass

// .scss if the default file extension
// .sass exists, but we'll focus on SCSS

// In Scss you can comment with // for one line but wont show in css sheet after preprocessor

// How to import other scss files?
@import "buttons"; //imports the _button.scss file

// Adding an udnerscore creates a partial. Partials can be imported, but not compile to .css
// So we need to create a file called _buttons.scss
_buttons.scss

// nesting
.content{
	h2{

	}
	p{

	}
}

// nesting properties:
.btn{
	text:{
		decoration: underline; // this is the same as text-decoration:underline in css
		transform: lowercase;
	}
}

// Parent selector can be used
// Parent selector is gread when we have pseudo class and sudeu elements
// the & references the selector
a{
	&:hover{ //same as a:hover in css

	}
	&:active{

	}
}
// Another example of using & to reference selector
.sidebar{
	.users & { //this is the same as .users .sidebar in css
		width:400px;
	}
}


// Nesting is DANGEROUSE
// DO NOT WANT TO ADD TO MANY NESTS
// Too many nests make a specificity that's way too hard to override later

// Try limiting you nesting to 3 or 4 leverls and consider refacoting anything deeper


// LESSON 2: VARIABLE

// Variable names begin with $
$base: #777777;
.sidebar{
	border: 1px solid $base;
}

// Variable definitions can optionally take the !default flag
// If we use the default flag, it checks to see if the variable was already exists. If it does, it uses that previously set varraible
$rounded: 2px;
$rounded: 3px !default;
// $rounded will be 2px

// Types of variable we can store
// 1) boolean
$rounded: false;
//  2) number
$rounded: 4px;
$line-height: 1.5;
$font-size: 3rem;
// 3) colors
$base: purple;
$border: rgba(0, 255, 0, 0.5);
$shadow: #333;
// 4) Strings: can be set with or without quotes
$header: 'Helvetica Neue';
$callout: Arial;
$message: "Loading";
// 5) Lists: comma seperated or have spaces
$authors: nick, dan, aimee, drew;
$margin: 40px 0 20px 100px;
// 6) Null
$shadow: null;

// Scoping variable
// If we use variable withing a emelement declarations it isn't available outside a declaration
// Changing variable wihtin a declaration changes it globally
$color-base: #777;
.sidebar{
	$color-base: #222;
}
p{
	color: $color-base; //This would be #222 because changing varaible wihtin declariation changes it globally
}

// Interpolation
// Use #{}
$side: top;
sup{
	position: relative;
	#{$side}: -0.5em; // compiles to top: -0.5em;
}
.callout-#{$side}{ // this compiles to .callout-top{}
	background: yellow;
}

// be considerate naming you variables
// We get more miles out of something like $color-base than $color-blue


// LESSON 3: Mixins

// When should mixins be used?
// Similar sets of preperties used multiple times with small variations

// The power of mixings comes from our ability to pass arguments into the mixin
@mixin box-sizing($x){
	-webkit-box-sizing: $x;
	-moz-box-sizing: $x;
	box-sizing: $x;
}
.content{
	@include box-sizing(border-box); //broder-box is set as the $x
	border: 1px solid #ccc;
}

// We can set ddefault values for our mixins
@mixin box-sizing($x: border-box){ //if nothing is passed in for x, then border-box is added as default
	-webkit-box-sizing: $x;
	-moz-box-sizing: $x;
	box-sizing: $x;
}

// We can add more than one thing to a mixing by passing in two arguments seperated by a comma
@mixin button ($radius, $color){
	border-radius: $radius;
	color: $color;
}
.btn-a{
	@include button(4px, #000); //mixing takes two parameters
}

// Can set a default value for an argument
@mixin button ($radius, $color: #000){ //optional arguments with defaults, MUST come at the end of the arguments
	border-radius: $radius;
	color: $color;
}
.btn-a{
	@include button(4px); // Only including one argument is fine, because we set a default for the second
}

// Keyword arguments
// WE can pass the key value pairs into our @include call, so we don't have to remember the order or the arguments
@mixin button ($radius, $color: #000){ 
	border-radius: $radius;
	color: $color;
}
.btn-a{
	@include button($color: #000, $radius: 5px); // passing in the key and value here is fine. It actually prevents us from having to memorize argument order
}

// When you are passing in an argument that includes a comma, we need to create a variable argument
// To add an varaible argument, add ... to an argument
@mixin transition($val...) { // the ... allows us to pass in an argument with a comma
	-webkit-transition: $val;
	-moz-transition: $val;
	transition: $val;
}
.btn-a{
	@include transition(color 0.3s ease-in, background 0.5s ease-out); //We need to add a varable argument(...) since our argument has a comma in it
}

// Also need a ... to pass variable into mixin. It will split the varaible arguments
@mixin button ($radius, $color){ 
	border-radius: $radius;
	color: $color;
}
$properties: 4px, #000;
.btn-a{
	@include button($properties...); //adding the ... splits the $properies varibles to both radius and color 
}

// ALWAY CHECK THE CSS OUTPUT OF YOUR SASS BEFORE USING IT ON A LIVE SITE

// LESSON 4: Extend

// When should Extend be used?
// SEts of prperties that match exactly

// Extend extends properties from one element to anohter
.btn-a{
	background: #777;
	border: 1px solid #ccc;
	font-size: 1em;
	text-transform: uppercase;
}
.btn-b{
	@extend .btn-a; //This estends the btn-a class
	background: #ff0;
}

// When you extend a class with a nested class, then the nested class gets added also
// The way to get around this is to use a placeholder
// Placeholder selectors
// Denoted with %
// They ar like partial because htey can be extended but never become selectors of their own
%btn{ // This is a placeholder
	background: #777;
	border: 1px solid #ccc;
	font-size: 1em;
	text-transform: uppercase;
}
.btn-a{
	@extend %btn;
}
.btn-b{
	@extend %btn //This estends the %btn placeholder
	background: #ff0;
}

// Extend common blocks to avoid extra HTML classes
%ir{
	border: 0;
	font: 0/0 a;
	background-color: transparent;
}
.logo{
	@extend %ir;
}
.social{
	@extend %ir;
}

// Lesson 5: Directive

// When should functions be used?
// commonly used operations to determine values

// function arguments have same rules as mixin arguments

// Responsive Refresher:
target/context
// If the traget size of our sidebar is 350px and the context of its parent is 1000px:
350px/100px = .35 //so fluid width should be 35%

// We can use Sass to do this calculation:
@function fluidize($taget, $context){ //need parentesis for variable
	@return ($target /$context) * 100%
}
.sidebar{
	width:fluidize(350px, 1000px);
}

// Types of comparisons in Sass:
==
!=
>
>=
<
<=


// if
$theme: dark;
header{
	@if $theme == dark {
		background: yellow;
	} @else if $theme == pink {
		background: pink;
	} @else{
		background: white;
	}
}

// Each
$authors: nick aimee dan drew;
@each $author in $authors {
	.author-#{$author}{
		background: url(author-#{$author}.jpg);
	}
}

// For
.item{
	position: absolute;
	right: 0;
	@for $i from 1 through 3 {
		&.item-#{$i} {
			op: $i * 30px;
		}
	}
}

// While
$i: 1;
.item {
	position: absolute;
	right: 0;
	@while $i < 4{
		&.item-#{$i} {
			top: $i * 30px;
		}
		$i: $i + 1;
	}
}

// When should mixins be used?
// Similar sets of preperties used multiple times with small variations

// When should Extend be used?
// SEts of prperties that match exactly

// When should functions be used?
// commonly used operations to determine values

// LESSON 6: Math and color

// Number oprations
+
-
*
/
&

/// By default, Sass returns up to 5 digits after a decimal point

// Can add strings together
$family: "Hello" + "There";

// Predefined Math Utilities:
round($number) //round to closest whole number
ceil($number) // round up
floor($number) // round down
abs($number) //absolute value
min($list) // minimum list value
max($list) // maximum list value
percentage($number) // convert to percentage

// How to call these functon?
h2{
	line-height: ceil(1.2)
}

// percentage() replaces our custom fluidize():
.sidebar{
	width: percentage(350px/100px);
}


// Color

// Can perform math on color
// Can use an operations(+,-, *, etc)
$color-base: #33333;
.addition{
	background: $color-base + #112233; // compiles to background: #445566
}

// How to use hex color in rgba?
// In sass you can pass hex color as first argument in rgba!
$color: #333333;
.alpha{
	background: rgba($color, 0.8); //we wouldnt be able to do this with css
}

// Color functions:
$color: #333;

lighten($color, 20%); //will lighten color by 20%
darken($color, 20%);
saturate($color, 20%); //give us more intense color
desaturate($color, 20%);
mix(#ffff00, #107fc9); //mixes the two colors
mix(#ffff00, #107fc9, 30%); //the optional third parameter changes how much of the first color is used
grayscale($color); //gives us the gray scale
invert($color);
complement($color); //find the opposint color wheel value that complements the color


// LESSON 7: Responsive

// Sass can help with responsiveness

// Responsive design centers around fluid width and media queries

// TODO: Take lesson 7









