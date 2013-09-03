// NEW HTML5 Tags
<header>
<nav>
<section>
<article>
<aside>
<footer>

<time> //???

// What is DOCTYPE:
<!DOCTYPE html>

// What is the HTML root element in HTML5
<html land="en">

// In HEAD elements, our character encoding is easier:
<meta charset="UTF-8">

// No longer need type in link:
<link rel="stylesheet" href="style.css">

// <header> tag is group of introductory or navigational aids. Top portion
// We can use header tag multiple places
<div id="header">
	<h1>OMG, Look  at the Zombies!</h1>
</div>
// BUT IN HTML5 we would now do:
<header>
	<h1> OMG, Look at the Zombies!</h1>
</header>

// Nav tag is section of page that links to other pages or spots in current page
<nav>
	<ul>
		<li>Home</li>
		<li>Work</li>
	</ul>
</nav>

// SEction tag is grouping of content based around a theme
// can replace some div elements
// must be able to stand alone
<section>
	<header>
		<h1>ACC Basketball News</h1>
	</header>
		<h2> UNC BEATS Duke in Championship Game </h2>
		<p> This is the paragraph </p>
</section>

// The Article tag is an independent self contained composition
// NEws posts, magazine articles, user comments

// diff between section and article?
// SEction can contain multiple articles
<section>
	<header>
		<h1>ACC Basketball News</h1>
	</header>
	<article>
		<header>
			<h1> UNC BEATS Duke in Championship Game </h2>
		</header>
		<p> This is the paragraph </p>
	</article>
</section>
// Now we can group our header and paragraph within article
// We also have two header tags, which is okay

// Article content should make sense on it's own

// Aside tag is content related to an article but not critical to it's understanding
// 
<section>
	<header>
		<h1>ACC Basketball News</h1>
	</header>
	<article>
		<header>
			<h1> UNC BEATS Duke in Championship Game </h2>
		</header>
		<p> This is the paragraph </p>
		<aside>
			<p>fomer duke player cries</p>
		</aside>
	</article>
</section>

// Footer tag includes information that closes out a particular section of a page
// Doesn't have to only be on the bottom of the page
<section>
	<header>
		<h1>ACC Basketball News</h1>
	</header>
	<article>
		<header>
			<h1> UNC BEATS Duke in Championship Game </h2>
		</header>
		<p> This is the paragraph </p>
		<aside>
			<p>fomer duke player crys</p>
		</aside>
		<footer>
			<p> Get more from ACC website</p>
		</footer>
	</article>
</section>

// How to get other browsers to support HTML5?
// Use the REMY SHARPS HTM SHIV


// LEVEL 2: CSS3

-webkit-border-radius: 10px; //vender prefix for chrom
-moz-border-radius: 10px; //vender prefix for mozilla
border-radius: 10px; //need vender prefixes fefore this
// Can specify which coreners to round, fi you dont want to round all

text-shadow: 0px -1px 1px #000; // 0px is x-offset value, -1px is y-offset value, 1px is blur value, #000 is color value

box-shodow: 4px 4px 5px #282b1f //same as text shadow but for image
box-shodow: inset 4px 4px 5px #282b1f //adds shadow inside the image

// RGBa are better than hex colors because you can add opadicty
color: rgba(209, 226, 360, .5);

// HSLa is easier to change colors if you dont have rgba colors
color: hsla(75, 58, 80, 1) // 75 is hue, 58 is saturation, 80 is light, 1 is transparency
// How to find hsla colors?
// can use photoshop colorpicker or mac app called colors by matt patenaude color app or hsla explorer
// http://css-tricks.com/examples/HSLaExplorer/
// http://mattpatenaude.com/

opacity: 0.5; // defines how opaque an image is

// Transform: allows elements redered by css to be transformed in two-dimentianal space
// The four transform properties are:
// scale(1.5)
// rotate(-10deg)
// skew(-10deg, 15deg)
// translate(25px, 50px) 
a:hover{
	-webkit-transform: scale(1.5);
	-moz-transform: scale(1.5);
	-o-transform: scale(1.5); //vender prefix for opera
	transform: scale(1.5); // scales image 50%
}

// transition: allows property changes in css values to occur smoothly over a specified duration of time
// no need for js
// CSS transition create smooth transition with css oppoesed ot JS
// Three properties to consider:
// 1)transitions-property: tells us what piece of the object is going to be effected
// 2) transition duration: how long a transition with last
// 3) transition timeing function: how we want transition to work
// TYPE OF TRANSITION FUNCTIION:
// ease
// ease-in
// east-in-out
// linear
// bezier curve
logo{
	position: absolute;
	top: 8px;
	left: 390px;
	width: 141px;
	height: 144px;
	background: url(../images/logo.png) no-repeat;
	-webkit-transition: opacity .2s ease-in-out;
	-moz--transition: opacity .2s ease-in-out;
	-o-transition: opacity .2s ease-in-out;
	transition: opacity .2s ease-in-out;
}
#logo:hover{
	opacity: .70; // when hovered the opacity will change from 1 to .7 with a transition
}

// Gradient editor for css: http://westciv.com/tools/gradients/

// Multiple background property: allows us to add multiple background images to our page or within our page
// example of multiple backgrounds: http://lostworldsfairs.com/eldorado/
// another example: http://www.danhigbie.com/past/2011/02/05/being-better-in-3-easy-steps-design-edition/


body{
	min-width: 1116px;
	background-color: #d7d4c3;
	background: url(../img/bg.jpg) no-repeat center top;
	background: url(../img/bg.jpg) no-repeat center top, url(../img/tile.jpg) repeat center top; // the image closer to user need to be listed first
}

// Font-face is the best way to embed fonts into your website

// Types of fonts
// .OTF: Open type font
// .TTF: True type font
// .WOFF web open font format, like compressed file of otf and ttf

// Website with free fonts and that generate font-faces for you: http://www.fontsquirrel.com/

@font-face{
	font-family: "League Gothic";
	src: url("fonts/LeagueGothic.ttf")
	format("truetype")
}
// Then we need to inclue font in our font stack
h1{
	font-family: "League Gothic", Arial, sans-serif;
}

// Browser Compatibility
// Need to provide fallbacks in your style sheets for css3 properties that aren't supported by certain browsers


// LESSON 3: Headers & Nav

// Only have 3 to four elements in header

<header id="main">
	<a href
</header>
<nav id="primary">
	<ul>
		<li>Home</li>
	</ul>
</nav>

// LESSON 4: Content

// Have a content stategy
// Get an id. How you lay out the infor is very important

<section>
</section>

// LESSON 5: Footers and forms

// Form elements should be intuitive and usable
// Forms need designs since they are key elements

// FORMS

// Inpute Types are great for devices like iPhone or Ipad to render specific keyboard
// email
// url
// color
// date
// number
// search : adds x in the input box and automatically add rounded corners

<form>
	<fieldset>
		<label>Email</label>
		<input type="email" placeholder="e.g. joe@gmail.com" required />
	</fieldset>
	<fieldset>
		<input type="submit" value="Subscribe" />
	</fieldset>
</form>

// How to style input boxes
#sign-up fieldset input[type="text"]{
	width: 250px;
}







