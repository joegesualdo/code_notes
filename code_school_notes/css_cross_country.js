// LESSON 1: 

// CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference?redirectlocale=en-US&redirectslug=CSS%2FCSS_Reference

// Advanced SElectors: http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/

// Order of Cascade
// 1) External
// 2) In the <head>
// 3) Inline style attributes
// 4) Using important: This is a bad idea

// What is float?
// Float removes elements from the document flow and moves them to a specified edge. Other content
// withing parent element will wrap around floats
// Floated elements stack up to the parent edge, then move down to the next available edge
// Take care with elements that have differing heights - the first avalable edge isnt always below
float: left;
float: right;
float: none;


// LESSON 2: CLEAR CARVING

// Clearing floats
// Clearing is necessary if  
// 1) floated items can be taller than non-floated content
// 2) All children are floating

// Common float-clearing mehtod:
// 1) The clearfix. developed back in 2007
// Allows up to add group class to parent container to add clear
// example clearfix or gorup css: http://css-tricks.com/snippets/css/clear-fix/

.group:before,
.group:after {
    content: "";
    display: table;
} 
.group:after {
    clear: both;
}
.group {
    zoom: 1; /* For IE 6/7 (trigger hasLayout) */
}

// REad more about specificity and inheritence

// LESSON 3: BOX Bindings

// What is the box model
// Every element is surrounded by a box
// Withing the box there are a couple things
// 1) content area
// 2) padding area
// 3) border area
// 4) margin area

// The width of an item is the summ of the following
box width = content width + padding + border width

// Determine the width of the following
.downhill{
	border: 5px solid #fff;
	padding-left: 10px;
	padding-right: 5px;
	width: 100px;
}
// The width is
width = 100 + 15 + 10px
// Total box width is 125px

// Overflow porperties:
// visible: the defualt value, which allows content to extend beyond container boundaries
// auto: adds a scrollbar as needed when content overflows
// hidden: hide any content that extends the box
// scroll: adds scroll bar at all times
overflow: visisble | auto | hidden | scroll

// Position properties:
// realative: renders in the normal flow, then shifted via positioning properties
// absolute: takes an element out of the normal flow for manual positioning
// fixed: affixes an element to a specific place in the window, where it will stay regardless of scrolling


// Example of relative positioning:
<article>
	<h2>Svens SnowshoeX<sup>2</sup></h2>
</article>
sup{
	font-size: 75%;
	line-height: 0;
	verical-align: baseline;
	position: relative;
	top: -0.5em;
}

// Example of absolute positioning:
article{
	position: relative;
}
h3{
	position: absolute;
	right: 10px;
	top: 10px;
}

// When positioning something absolute, it will be scoped to the window and not the parent container, unless
// the parent is positioned - realative, fixed, absolute

// STATIC POSITION IS THE DEFAULT
// Using a value other than static causes an object ot become a positioned element
// positionioned elements may use the top, left, bottom, and right properties for placement
// cant use top, left, bottom, right properties if you have a position of static


// If you have two positioned elements, then the element that comes later in the dom appears above the other
// SEt z index to control which element shows
// Higher z index makes boxes closer
// z-index only works for elements that are positioned

// LESSON 4: GROOMING YOUR CODE
// Different ways of cleaning your code

// Tips for staying dry
.p, .ski_lift{

}

// Property shorthands
// 0 doesn't need units, like pz
// Margins:
margin: 15px 10px 0 10px; //top right botton left
// font:
font: 16px/18px bold italic sans-serif; // size/line-height width style family
// background
background: #000 url(image.jpg) no-repeat center top // color image repeat x-pos y-pos
// List style:
list-style: disc inside none; // style position image
// margin or padding:
margin: 0 10px 0 10px / 0 10px 0 / 0 10px; // top right bottom left / top right&left botoon / top&bottom right&left
// border:
border: 3px solid #ccc; //width style color

// Display types:
display: none / block /inline / inline-block
// block elements: stretch the full width of their parent container, behave as if there is a line break before and after the content
// inline elemtns: typically found within block-level elements, do not take up full width of container, only span widht of content inside, and dont generate line break
// inline-block element: same flow as inline element but behave as a block element, only stretch widht of contents but can manipulate full box model on them

// Horizontal centering:

// How to horizontally center a block-level element?
// Decalare a width on the element then apply a left and right margin of auto
margin: 0 auto;
// How to horizontally center an inline and inline block elemetns?
text-aligh: center;


// LESSON 5: CSS SAFETY

// Protecting your layout
// What is margin collapsing?
// When there are two different margin touching, css only takes the highest margin. So the margin collapses
// BUT margin collapsing will not occure when one or more block elements has 
// 1) padding or border
// 2) relative or aabsolute positions
// 3) a float left or float right
// Read more on collapsing margins: http://www.w3.org/TR/CSS2/box.html#collapsing-margins

// Resets and Normalizations:
// its a good idea to have default syling inplace for most of your html elemetns and to count for inconsitencies across browsers
// Rest example: http://meyerweb.com/eric/tools/css/reset/
// Normalize example: http://necolas.github.io/normalize.css/

// LESSON 6: IMAGE ISSUES

// Important to determine whether image is part of the layout or content?
// Content should be marked up as inline images
// Layout elements should be difined as background images

// Image cropping:
// What to do when you have different size images?
// Adjusting the height and width will squish some of our images
// Use the overflow crop:
<h4>REntal Products</h4>
<ul class="rental">
	<li class="crop">
		<img src="snowboard.jpg" alt="snowboard" />
	</li>
</ul>
.crop{
	height: 300px;
	width: 400px;
	overflow: hidden;
}
// We apply a crop class to our parent item, which we set a height and width on and an overflow hidden mehtod
// BUT most of our picture is cutoff, so we need to resize image
// The best thing to do is to resize our images server side
// Provide image-uploading instructions in your CMS

// Responsive Images: http://clagnut.com/sandbox/imagetest

// LESSON 7: Sprightly Slaloms

// Image replacements:
// How to add descriptive text to image-replaced elements?
<a href="#" class="logo">Svens Snowshoe Emporium</a>
.logo{
	background: url(logo.png); //default state is 0 0
	display:block;
	height:100px;
	width: 200px;
	text-indent: -9999px; //this makes it so the text in the HTML "svens snowshoe emporium" is moved ourside the viewport
}

// How do we add different images on hover?
// Issues with swapping background images:
// 1) adds extra http request
// 2) image is not preloaded
// So there is a flash when you go and hover

// To fix we add both images in the same file, one above the other
// each image is 100px high, so entire file is 200px high
.logo:hover, logo:focus {
	background-position: 0 -100px; //0 is x-axis shift, -100px is y-axis shift. allows us to change orientation of our image inside the element.
}
// When logo is hovered, the background image will shift up 100px

// Great resource to find position on a sprite image: http://www.spritecow.com/

// Base64 encoding: directly embed images into your css
// REsource: http://davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to

// LESSON 8: Pseudo Sitzmark
// Psuedo classes allow you to conditionally select an element based on state or postition
// they start with colon:
:hover
:focus
:active
:visited
:first-child
:last-child
:only-child
:nth-child()
:nth-of-type() //allows to select sibling of certain type
:after //needs content property to be used
:before //needs content property to be used
:first-letter
:first-line

li:last-child{ //ability to target last element in list
}

li:nth-child(even){ //ability to target event elements
}

li:nth-child(even){ 
}

li:nth-child(2n){ //replecated even 
}
li:nth-child(4n+4){ //every 4th element starting at 4
}

// Pseudo classes: http://css-tricks.com/pseudo-class-selectors/
// Other things you can do with sudo elements: http://css-tricks.com/pseudo-element-roundup/


// Pseudo elements

article p:last-child:after{ //This will find the last p in article and add content after the last sentence
	content: '\2744'; //css content attribute
}





