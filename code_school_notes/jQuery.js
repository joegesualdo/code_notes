// Notes from Code School jQuery Class

// How to prevent page from jumping up when a link (i.e expand) is called
// When an event occurs within a DOM, we get an event bubble that starts on the link and works it's way up the DOM telling every element an event occured
// Since there is an href="#", it will do the default behavior which is to pop it up to the top of the page
// How to prevent this default browser beehavior from happeneing?
// Add an event parameter within an event handler, then we use preventDefault on the event. This prevents the browsers default behavior, which is popping up to the top of page since href was a #
$('.vacation').on('click', '.expand', function(event){
	event.preventDefault(); //This stops the default browser action of popping up to top when href="#"
	$(this).closest('.vacation').find('.commets').fadeToggle();
})


// What IS stopPropogation?
// Prevents event from bubbling up the DOM. 
// GREAT example:http://stackoverflow.com/questions/6784950/can-someone-explain-how-this-stoppropagation-works
$('div').click(function() { 
	alert('div clicked'); 
});
$('span').click(function(e) { 
	alert('span clicked'); 
	e.stopPropagation(); 
});


// Need to start js documents with:
$(document).ready(function(){
	// Code goes here
});


//Changes the text in all the li items
$("li").text("Orlando");

//How to navigate to a decendant selector. List parent then decendant
$("#destinations li");

// How to find the children elements only, not children's children
$("#destinations > li")
// > specifies we are looking for the direct decendant.

// How to select multiple elements?
$(".promo, #france");
// , allows us to select multiple items

// How to select first item in a ul?
$("#destinations li:first");
// How to select last item in a ul?
$("#destinations li:last");
// How to select all odd item in a ul? Hint: remember that list starts at index 0
$("#destinations li:odd");
// How to select all even item in a ul? Hint: remember that list starts at index 0
$("#destinations li:even");

// Find elements by traversing the DOM. Takes more code, but it's faster to find
// elements
$("#destinations").find("li");
// Find last item in ul using traversing
$("li").last();
// Find first item in ul using traversing
$("li").first();
// How do you find the middle element in a ul?
// You do this by "walking the DOM"
$("li").first().next(); // This method is called "method chaining"
//Another example of "walking the DOM"
$("li").first().next().prev();


// How to traverse up the DOM
$("li").first().parent(); // This will return the parent of the li element
//
$(this).parents('.vacation').append(price); // finds the vacation class above 'this'
// How to walk up the dom to look for a certain ancestor that is closes to the element?
$(this).closest('.vacation').append(price); // finds the closestvacation class above 'this'. Which is great in case you have multiple vacation classses
// .closest is always going to be find 0 or 1, opposed to .parent that will find ALL of the ancestors with the proper class
// This will only return the children that are list items, not the grandchildren
$("destinations").children("li");
// This will find elements with a certain class, when the element has more than one clas or id
// Example: class="vacation onsale"
$('.vacation').filter('onsale')

// How to append to the DOM
var price = $('<p>From 399.99</p>'); // This creates the <p> and stores it in a variable
// Here are the different ways to append to the DOM
// Methods for appending, where the reference point comes at the beginning
// .append(<element>)
// .after(<element>)
// .prepend(<element>)
// .before(<element>)
// OR
// Methods for appending, where the reference point comes at the beginning. People think these are more readable
// .appendTo(<element>)
// .prependTo(<element>)
// .insertAfter(<element>)
// .insertBefore(<element>)
// ### Here are examples ###
$('.vacation').before(price); // This adds the price node before the vacation class
// OR
price.insertBefore($('.vacation'));

$('.vacation').after(price); // This adds the price node after the vacation class
// OR
price.insertAfter($('.vacation'));

$('.vacation').prepend(price); // This adds the price node as the first child of the vacation class
// OR
price.prependTo($('.vacation'));

$('.vacation').append(price); // This adds the price node as the last child of the vacation class
// OR
price.appendTo($('.vacation'));

// HOw to remove node from DOM
$('button').remove();



// ## How do we handle interaction
// What is an event handler? It's a function that runs when something is done
$(document).ready (/*<event handler function>*/);
// What is the .on method?
//.on(<event>,<event handler>)
$('button').on('click', function(){
	// runs when any button is clicked
	var price = $('<p>From 399.99</p>');
	$('.vacation').append(price);
	$('button').remove();
})

// Use the keywork this in event handlers to refer to items that trigger the fucntion
$('button').on('click', function(){
	var price = $('<p>From 399.99</p>');
	$(this).closest('.vaction').append(price);
	// this will only remove the button that was clicked
	$(this).remove();
})

// What is the data tag?
// ex: <li class="vacation onsale" data-price="399.99"
// Data tags is an HTML5 attribute you can add to any of your elements to provide addition info about the objects on your page
// To interact with these attributes you can
// call these data attributes:
// .data(<name>)
$('.vacation').first().data('price'); // This will call the data-price='399.99'
// To set the data by providing a name and value
// .data(<name>, <value>)
$('button').on('click', function(){
	var amount = $(this).closest('.vacation').data('price');
	var price = $('<p>From 399.99</p>');
	$(this).closest('.vaction').append(price);
	// this will only remove the button that was clicked
	$(this).remove();
})
// Refactor the above code to keep it DRY:
$('button').on('click', function(){
	var vacation = $(this).closest('.vacation')
	var amount = vacation.data('price');
	var price = $('<p>From 399.99</p>');
	vacation.append(price);
	// this will only remove the button that was clicked
	$(this).remove();
})

// How to prevent this function from being called on EVERY button on the page?
// Use event deligation. Only target buttons within a class. Add the specific element you want to listen for with the .on method. In this case it's ".on('click','button', function(){"
$('.vacation').on('click','button', function(){
	var vacation = $(this).closest('.vacation')
	var amount = vacation.data('price');
	var price = $('<p>From 399.99</p>');
	vacation.append(price);
	// this will only remove the button that was clicked
	$(this).remove();
})

// How to add class and remove class from element
// .addClass(<class>)
// .removeClass(<class>)
// .toggleClass(<class>)
$('#filters').on('click', '.onsale-filter', function(){
	$('.highlighted').removeClass('.highlighted') // This will reset all the highlighed classes
	$('.vacation').filter('.onsale').addClass('highlighted');
})

// How to slidDown to show elements
$('.confirmation').on('click','button', function(){
	$(this).closest('.confirmation').find('.ticket').slidDown(); // .closest search up though ancestors; .find searchs down through children
})
$('.confirmation').on('mouseenter', 'h3', function(){
	$(this).closest('.confirmation').find('.ticket').slidDown();
})
//Refactor the above code:
function showTicket(){
	$(this).closest('.confirmation').find('.ticket').slidDown();
}
$('.confirmation').on('click','button', showTicket);
$('.confirmation').on('mouseenter', 'h3', showTicket); 
// IMPORTANT: Dont put () after the showTicket event handler because that would call it immediately, but we want to call it only when the function is triggered


//Types of animation
// .slideDown()
// .slideUp()
// .fadIn()
// .fadeOut()
// .fadeToggle()
//Can optionally pass speed parameters to the end of these methods

//Types of mouse events you can call using the .on method
// click
// dbclick
// focusin
// focusout
// mousedown
// mouseup
// mousemove
// mouseout
// mouseover
// mouseleave
// mouseenter

//Keyboard events
// keypress
// keydown
// keyup

// Form events
// blur
// select
// change
// focus
// submit

// How to get and set input form values?
// To get the input value from a form:
// .val(<new value>)
// To set the input value for a form
// val();
$('.vacation').on('keyup', '.quantity', function(){
	var price = +$(this).closest('.vacation').data('price') // The plus in from of the jQuery namespace converts the result from string into number
	var quantity = +$(this).val(); // This gets us the value from the input and makes it a number
	$('#total').text(price * quantity);
})

// If you want to hide something when the page is loaded, put display: none; in the css


// How to change the syle of things using jQuery?
// How to get and set CSS
// We set by:
// .css(<attr>, <value>)
// We get by:
// .css(<attr>)
//We can also send in an object. This is the BEST and cleanest way!
// .css(<object>) 
$(this).css({'background-color', '#234565',
			 'border-color','1px solid #967'})
// WE DONT LIKE MIXING STYLE WITH JS

// Instead of passing css into an element to do disply: block, we can use the .show method
$(this).find('.price').show();
// can also do this with .hide()

// We can check to see if a node has a specific class: .hasClass(<class>)
$(this).hasClass('highlighted') // returns true or false

// How to add movement
// jQuery has the method .animate(<object>) which is used to send in styles and will slowly animate from current state to style we give it
$('#vacations').on('click','.vacation', function(){
	$(this).toggleClass('highlighted');
	// This is how you add a conditional
	if($(this).hasClass('highlighted')){
		$(this).animate({'top': '-10px'});
	} else {
		$(this).animate({'top':'0px'})
	}
});
// BUT TO keep css out of JS and in sylesheets, use the transition attributes
.vacation{
	-moz-transition: top 0.2s;
	-o-transition: top 0.2s;
	-webkit-transition: top 0.2s;
	transition: 0.2s;
}
.highlighted{
	top: -10px
}

//How To change speed of animation
// To change speed you can optionally pass in the speed as a second argument to animate()
$(this).animate({'top': '-10px'}, 400); // animates in 400 millisecond. 400 is the default
$(this).animate({'top': '-10px'}, fast); // fast is equivalent to 200 ms
$(this).animate({'top': '-10px'}, slow); // slow is equivalent to 600 ms
$(this).animate({'top': '-10px'}, 400);














