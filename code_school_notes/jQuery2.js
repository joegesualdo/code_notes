// Notes from Code School jQuery Air Class

//Can use data tags to store variable and data

//How do you get html from an element?
// Use the .html() method
$('#tabs ul li:first').html(); //returns <a href="#2012-09-27 data-flights="6">Sept 27</a>

// How to return the text from an element?
// Use the .text() method
$('#tabs ul li:first').text(); // returns Sept 27

// How to return the href from an element?
// Use the .attr() method
$('#tabs ul li:first').attr('href'); // returns #2012-09-27

// How to return the data from a data  tag?
// Use the .data() method
$('#tabs ul li:first').data('flights'); // returns 6

// How to call a certain li element from a ul?
// Use the eq()
$("#tabs li:eq(2) a").click(); // Selects the 3rd element, since first is eq(0)


// How to create a tooltip
function showNumberOfFlights(e){
	var num_flights = $(this).data('flights');
	$(this).append("<span class='tooltip'>" + num_flights + " flights</span>");
}
function hideNumberOfFlights(e){
	$("#tabs span.tooltip").remove();
}
$("tabs li a").click(changeTab);
$("tabs li a").mouseenter(showNumberOfFlights);
$("tabs li a").mouseleave(hideNumberOfFlights);
// How to refactor the code above:
// by using the bind command. 
// Since all of these events are happening on the same element, you can write it as
function showNumberOfFlights(e){
	var num_flights = $(this).data('flights');
	$(this).append("<span class='tooltip'>" + num_flights + " flights</span>");
}
function hideNumberOfFlights(e){
	$("#tabs span.tooltip").remove();
}
$("tabs li a").bind({ // this binds all these events to an element
	click: changeTab,
	mouseenter: showNumberOfFlights,
	mouseleave: hideNumberOfFlights
})

// Switching between divs
function changeTab(e){
	e.preventDefault();
	$("#tabs li a.active").removeClass("active");
	$(this).addClass("active");
	showFights($(this).attr("href"));
}
function showFlights(activeDiv){
	$("#tabs div").hide();
	$(activeDiv).show();
	fetchFlights(activeDiv); // Loads the proper flight data (We'll learn about AJAX later)
}


// How to stop from requesting the active link from the server
// If you click on the active link, it requests again
// To do this, we unbind the click event on the active tab
function changeTab(e){
	e.preventDefault();
	$("#tabs li a.active").removeClass("active").click(changeTab); // This will rebind the click event on the tab once you chose a different tab. ".click(changeTab)" is the same as ".bind("click", changeTab);
	$(this).addClass("active").unbind("click", changeTab); // This will unbind the click event, so you cant click on an active link
}

// When binding events you can namespace each of these events
.bind("click.flightSchedule", changeTab);
.unbind("click.flightSchedule")
//OR
$("#tabs li a").bind({
	"click.flightSchedule": changeTab,
	"mouseenter.flightSchedule": showNumberOfFlights,
	"mouseout.flightSchedule": hideNumberOfFlights
})
// Now you can unbind everything:
$("#tabs li a").unbind("flightSchedule");


// Bind only looks for an element once when the page is loaded.
// When using ajax and page is dynamically change, we need to use .live() instead of bind
$("#flights a").live("click, selectFlights");
// BUT .live() isn;t the best way to do this, because everytime a click occurs, it's checking the entire document starting at (document)
//example:
$("#flights a").live("click, selectFlights");
// Same as:
$(document).delegate("#flights a", "click", selectFlights);
// So those are no goo!
//The best way to do this is to use delegate() method
$("#tabs div").delegate("#flights a", "click", selectFlights); // "#tabs div" checks inside this element, rather than entire page like (document)
//looks for click event on flights links and runs the selectFlights function
//Delegate has Benefits:
// can be method chained
// more performant since it doesn't look through entire page starting with (document)


// LESSON 2
// AJAX 
function showFlights(activeDiv){
	$("#tabs div").hide();
	$.ajax('/flights', { // Using .ajax() is more configurable than .get()
		data:{ date: activeDiv}, //passes in "/flights?date=%232012-09-30" where %23 is escaped #
		cache: false, // this reloads all data. Ensures the browser isn't inproperly caching anything
		beforeSend: function(result){ 
			$('#error').hide();
			$('#loading').show(); // loading div which shows before AJAX is invoked
		},
		complete: function(){
			$('#loading').hide();
		},
		success: function(result){ // If returns successfully
			$(activeDiv).html(result);
			$(activeDiv).show();
		},
		error: function(result){ // If doesn't return successfully. This is a precaution, incase server hits an error
			$(#error).show();
		}
	}
}
// The problem with the above is that it will load to AJAX request if we click two tabs quicly, It doesn't abort previous request
// How to abort incomplete AJAX requests:
fetchingFlights = null;
function showFlights(activeDiv){
	$("#tabs div").hide();
	if (fetchingFlights){ //if we are currently fetching an AJAX request, this will abort it
		fetchingFlights.abort(); // This automatically calls the error div. See 17 lines down
	}
	fetchingFlights = $.ajax('/flights', { 
		data:{ date: activeDiv}, 
		cache: false,
		timout: 8000, // this calls a time out if the server takes too long. It will call the error if it times out
		beforeSend: function(result){ 
			$('#error').hide();
			$('#loading').show(); 
		complete: function(){
			$('#loading').hide();
			fetchingFlights = null; // will reset the fetchingFlights to null, 
		},
		success: function(result){ 
			$(activeDiv).html(result);
			$(activeDiv).show();
		},
		error: function(result){ 
			if (result.statusText != "abort"){ //this will prevent from showing the error div when we abort. See line 17 lines up
				$(#error).show();
			}
		}
	}
}

// How to fetch data using JSON
function selectFlight(e){
	e.preventDefault();
	$("#tabs a.selected").removeClass('selected');
	$(this).addClass('selected');

	var flights = $(this).data('flights');
	var flightClass = $(this).data('class');

	$('#confirm').hide();

	$.ajax('/flights/'+ flights, {
		data: {'class': flightClass},
		dataType: 'json', // if you don't put this, it still return json
		success: showTotal
	})
}
function showTotal(json){
	$('#price').text(json.price);
	$('#fees').text(json.fees);
	$('#total').text(json.total);
	$('#confirm').slideDown();
}


// How to fetch DATA using JSONP
// How to fetch JSON from a different domain
// When you are doing AJAX back and forth from server, it's safe beacuase you are using the same domain in the same server
$.ajax('http://api.wunderground.com/api/<YourAPIKey>/conditions/q/32789.json', {
	dataType: 'jsonp', // this is where you specify jsonp
	success: function(json){
		alert(json.current_observation.temperature_string);
	}
})


// Pulling email and password
$('#login form').submit(login); //submit() method call the login function
function login(e){
	e.preventDefault(); // prevents it from submitting
	$('#login h4').slideUp();

	var form = $(this).serialize(); // this pulls all of the data out of the form elements, instead of doing them individually. pulls all the fields out of out form,

	.ajax('/login',{
		data: form, // you can do this another way where you do each input individually with .val() method
		dataType: 'script', // instead of expecting JSON back, we are going to expect javasctipt which we are going to execute
		type: 'post' // this posts not get
	})
}
// Example of Server side generated JS in rails:
// /app/views/sessions/create.js.erb
<% if @logged_in %>
	$('#login').html("<%= escape_javascript(render 'welcome') %>"); // This inserts welcome message
	$('#confirm .confirm-purchase').slideDown(); //Show purchase button
	$("#confirm tr.total td").css('background-color', '#2C1F11'); // Highlight total price
<% else %>
	$('#login h4').text("Invalid Email/Password. Try Again").slideDown();
<% end %>




// LESSON 3
// Effects

// The effects docs can be found: api.jquery.com/category/effects

// You can chain effects
$('#login').fadeOut().html(...).fadeIn(); // it runs them in order, not at the same time
//But this changes the html before it's done fading out
// Use a callback as one of the fade out parameters
$('#login').fadeOut(function(){
	$(this).html(...).fadeIn(); // after fadeout is done, it will load html then fade in
})
// Add Speed to our fadeout and fade in
$('#login').fadeOut('fast', function(){
	$(this).html(...).fadeIn('slow');
})

// What is effect easing
// the rate at which the effect goes from starting point to ending point
// The two main types of effect easing
// 1) linear: same pace the entire way
// 2) swing: starts fast, then slows down. This is the default
//More can be found on the jQuery UI library

// How to change the effect easing?
$('#confirm .confirm-purchase').slideDown(500, 'linear'); //changes from the defaut 'swing' to 'linear' easing


// Refactor code so Login fades out AS AJAX is being called, not after.
$('#login').fadeOut(2000);
$.ajax('/login',{
	data: form,
	dataType:'script',
	type: 'post'
})
// Successful login returns:
$('#login').html(...).fadeIn('slow');


//TODO: NEED TO ADD A QUE HERE! WHAT IS A QUE

//TODO: Need to add a stop() method! What is a stop()




// TODO: LESSON 4: Code Organization

// Instead of receiving html from the server using AJAX, how do you get JSON?
// This gets HTML from server
fetchingFlights = $.ajax('/flight',{
	data: {date: activeDiv},
	...
	success: function(result){
		$(activeDiv).html(result);
		$('#error').hide();
		$(activeDiv).show();
	}
	})
// This get JSON back from server AJAX request:
fetchingFlights = $.ajax('/flight.json',{
	data: {date: activeDiv},
	...
	success: function(result){
		$(activeDiv + ' tbody td').remove(); //removes all the rows we currently have

		var rows = ""; // creates a variable called rows
		$.each(flights, function(index, flight){ // goes through each flight in the flights array
			rows += "<tr>" + //For each flight, we add a row onto the rows variable
						"<td>" + flight.depart + "</td>" +
						"<td>" + flight.arrive + "</td>" +
						...
					"</tr>";
		});
		$(activeDiv + ' tbody').html(rows); // at the end of the callback, we load the html into the body of the table
		...
// You can refactor the code above by using the .map() function.
// What is a map function
// .map() function takes an array and returns an array
fetchingFlights = $.ajax('/flight.json',{
	data: {date: activeDiv},
	...
	success: function(result){
		$(activeDiv + ' tbody td').remove(); //removes all the rows we currently have

		var rows = ""; // creates a variable called rows
		var flight_rows = $.map(flights, function(index, flight){ // goes through each flight in the flights, returns each of the rows and sets the array it returns equal to our flights_row variable, so we'll have an array
			rows += "<tr>" + 
						"<td>" + flight.depart + "</td>" +
						"<td>" + flight.arrive + "</td>" +
						...
					"</tr>";
		});
		$(activeDiv + ' tbody').html(alight_rows.join('')); // Loads the flight_rows into our table. Then joins the array together into a big string
		...

// What is join() method?
// Can join an array together to create one big string
$(activeDiv + ' tbody').html(flight_rows.join('')); // where flight_rows is an array


// Ways to keep code DRY
// Create your own utiltiy functions
// Create your own plugins

// What is a utility function
// Utility functions are not called on jquery objects
// example of utility functions: .each(), .map()
$.hello = function(){
	alert("Hello There!");
};

//What is a closure?
// Closure take the $, adds a function into jquery and then using
// CLosure makes it so that we can use the function elsewhere in our code. So we can use it many places in our code. Makes sure the method we attach to $, can be used in code we have elsewhere in other librarys in the same page
// example:
(function( $ ){
	$.hello = function(){
		alert("Hello There!");
	};
})( jQuery );
// Then to call it:
$.hello();

// Can use the utility for adding filter buttons
$('#flight-filter input[name=stop]').change(fliterByFlights);
function fliterByFlights(e){
	var stops = $(this).val(); // grab number of stops
	var flitered_flights = [];

	$.each(currentFlights, function(index,flight){ // goes through each of the current flights. currentFlights is an array that has all the current flights being displayed
		if (stops == '2+'){ 
			filtered_flights.push(flight);
		... other conditionals ...	
	})
	.. reprint the flights ...
}
// BUT the above code doesn't keep our filtering preference when we switch tabs
// Since there are multiple place we need to filter events, we create a utility method for it
$.filterFlights = function(cFlights, stops){
	var filtered_flights = [];
	$.each(cFlights, function(index, flights){
		if (stops == '2+'){
			filtered_flights.push(flight);
			... other conditionals ...
	})

	return filtered_flights;
}
// This is how you call the above code
var stops = ('#flight-filter input[name=stops]:checked').val();
var filtered_flights = $.filterFlights(currentFLights, stop);

// What is a plugin
// Plugins are called on jQuery objects. MUST be called on an object!
// Can specify defaults
// How to call a plugin
$("#tabs ul li a"). addToolTip();
// How to create a plugin:
(function( $ ){
	$.fn.callOut = function(){
		this.css({opacity:0.5}).animate({opacity:1}, 'fast');
	};
})( jQuery);
// How to call the created plugin
$(activeDiv).callOut();
// How to specify defaults for the plugin?
(function( $ ){
	$.fn.callOut = function(){
		var defaults = {
			duration: 'fast'
		}
		var options = $.extend(defaults, options) // USe defaults unless option exists
		this.css({opacity:0.5}).animate({opacity:1}, options.duration); 
	};
})( jQuery);
// How to call this with our customized duraction:
$(activeDiv).callOut({'duration': 1000});
// How to implement a tooltip plugin in our application
$.fin.addToolTip = function(){
	return this.bind({
		mouseenter: function(e){
			var tip = $(this).data('tooltip');
			$("<span class='tooptip'>") + tip + "</span>").appendTo(this).delay(100).fadeIn();
		}
		mouseleave: function(e){
			$(this).find('span.tooltip').stop().fadeOut(function(){
				$(this).remove();
			})
		}
	})
}
// How to call this tooltip plugin in our application
$("#tabs ul li a").addTooltip()

// TODO: What is code Encapsilation. Min 9

// TODO: How to write a fuction that gets run on a certain key stroke. Min. 10

// TODO: Use a jQuery template to prevent HTML in your js code. Min 12







