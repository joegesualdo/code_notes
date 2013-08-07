// Lesson 1

//"Dont lose your data in the DOM, You should extract it into a model"

// Why use backbone.js
// Provide a client side app structure for all our fucntions, 
// Models to represent the data structure inside our view, 
// Views to hookup models into the DOm, 
//takes care of synching our data to and from the server

// How to create a Model class
var TodoItem = Backbone.Model.extend({}); //going to be extended from the BAckbone model base class
// IMPORTANT: Capitalize the first letter of each word when declaring a class

//Create a model intance of our class
var todoItem = new TodoItem( // first letter isn't capialized because it's not declaring a class
	{description: 'pick up milk', status:'incomplete', id: 1} //sends in a json object for our objects
)

// How to get an attribute
toddoItem.get('description');

//How to set an attribute
todoItem.set({status:'complete'});

//How to synch our client side data with the server
todoItem.save();

// NEED CONFIGURATION TO MAKE THIS HAPPEN SINCE WE DONT KNOW WHAT THE ENDPONT ON THE SERVER IS. THIS IS EXPLAINED 
// IN THE NEXT LESSON

// On the client side we have models which encapsulate the data
// Models provide data for the views
// Viess responsibility to build html which we may put back in dom

//How to create a view class:
var TodoView = Backbone.View.extend({}); //extends from the backbone view base classs

//How to create a view instance:
var todoView = new TodoView({model: todoItem}) // this sends in the model we created in the previous slide

//HOw to get view to render out HTML for our todo item.
// need to define render function
//Rendering the view:
var TodoView = Backbone.View.extend({
	render: function(){
		var html = '<h3>' + this.model.get('description') +'</h3>'; //gets description out of model and create some html
		$(this.el).html(html); // set html of the view element
	}
});
// EVERY VIEW HAS A TOP LEVEL ELement (.el). A sincle instance is associate with a single element which means it's an html 
// tag of some sort (ie. div, p, li,header, section, etc). div is the default
//

//Create a new instance:
var todoView = new TodoView({model: todoItem}); //Creates an instance called todoView and sends in the model
todoView.render(); // call render function
console.log(todoView.el); // this will send element to console: 
// will send this to console:
<div>
	<h3>Pick up milk</h3>
</div>


// Lesson 2: Models

//How to generate a model class:
var TodoItem = Backbone.Model.extend({});

//How to generate a model instance:
var todoItem = new TodoItem(
	{description: 'Pick up milk', status: 'Incomplete'}
);

// How to get an attribute:
todoItem.get('description');

// How to set an attriibute:
todoItem.set({status: 'complete'});


// How to fetch json from the server? How would you do that in backbone and loadi it into our model?
var todoItem = new TodoItem();
todoItem.url = '/todo'; // URL to get json data for model
todoItem.fetch(); // To populate model from server
todoItem.get('description');  // gets data out of our model

// THERES A BETTER WAY TO DO THIS:
var TodoItem = Backbone.Model.extend({urlRoot: '/todos'}); // specifies a url root, which by default is going to use that url to get data from our server and interats with it in a restful way
var todoItem = new TodoItem({id:1}) //fetch to do with id = 1. Send in the idea when we define our todo instance
todoItem.fetch(); // sends a GET request to url /todos/1 and return the json and populate the instance with that data
todoItem.set({description: 'Pick up cookies.'}) // updates the todo with set comand
todoItem.save(); // syncs with the server with a PUT request to /todos/1 url with json parameters

//How to create a new todo item
var todoItem = new TodoItem();
todoItem.set({description: 'fill prescription.'});
todoItem.save(); // does a post request /todos with json parameters

//How to verify items was properly saved to server?
todoItem.get('id'); //this returns 2

// How to destro todo item?
todoItem.destroy(); //sends delete request to /todos/2

// how to get json model out of our model, like if we ever want to render it into a view late, we can call:
todoItem.toJSON();


// How to save defaults of a model?
var TodoItem = Backbone.Model.extend({
	defaults:{
		description: "Empty todo...",
		status: "Incomplete"
	}
});

// Models can have events
//How to listen for an event on our todoItem instance:
// call the .on(<event>,<method>) and send in event and method.
todoItem.on('event-name', function(){
	alert('event-name happened!'); // 
})
// How to trigger this event?
todoItem.trigger('event-name');

// Backbone comes with special events:
change //when an event is modified
change: <attr> // when <attr> is modified
destroy // when model is destroyed
sync // whenever successfully synched
error // when model save or validation fails
all // any triggered event

// Example event: change
todoItem.on('change',doThing); // Listens for changes to our model, calls dothing when that happens
// for example, you could trigger this by:
todoItem.set({description: 'Fill prescription.'}); //This would trigger our event above
//How to set an item without triggering event?
// Send in the silent parameter
todoItem.set({description: 'Fill prescription'}, {silent: true});
// How to remove event listner:
// call .off() instead of off
todoItem.off('change', doThing);



//Lesson 3: Views

// Define a simple view class:
var SimpleView = Backbone.View.extend({});

// Define an instance of the class
var SimpleView  = new SimpleView();

// If we were to print out the element of this view, we would get a blank div
//example:
console.log(simpleView.el); // would return <div></div>
//By default, el is div

//Every view has a top level element. The default top level element is <div>

// How to change the top level element?
// Specify tagName when we difine the class
var SimpleView= Backbone.View.extend({tagName: 'li'})
var simpleView = new SimpleView();
console.log(simpleView.el) // this would return a blank <li>
//tagName can be any html element that you want

// How to set element, id and class:
var TodoView = Backbone.View.extend({
	tagName: 'article',
	id: 'todo-view', //sets id attribute
	className: 'todo' //sets class attribute
});
var todoView = new TodoView();
console.log(todoView.el); // would print out <article id="todo-view" class="todo"></article>


// How to get HTML from todoView using jquery
$('#todo-view').html():
// BUT a better way to do this using backbone:
$(todoView.el).html();
// BUT A BETTER WAY using backbone:
todoView.$el.html(); // this is good because we dont know the id is gon to be


// Backbone example
var TodoView = Backbone.View.extend({
	tagName: 'article',
	id: 'todo-view',
	className: 'todo',
	render: function(){
		var html = '<h3>' + this.model.get('description') + '</h3>';
		this.$el.html(html) // same as $(this.el).html(html); 
	}
})
var todoView = new TodoView({
	model: todoItem;
})
todoView.render();
console.log(todoView.el) // prints out <article id="todo-view" class="todo"><h3>Pick up milk</h3></article>

// Above we are generating our view html by creating variable with all our html and appending it all together
// if we had a lot of html, it would get very hairy and ugly
// Organize this by using a client side templating
//Backbone comes with the underscore library for doing this
// Underscore library isn't only for templating, its a big utility library that gives us great stuff

//HOw to use the underscore library:
var TodoView = Backbone.View.extend({
	tagName: 'article',
	id: 'todo-view',
	className: 'todo',
	template: _.template('<h3><%= description %></h3>'), // to use the underscor library we just use _ and call a method on it. Here we are calling the template function on underscore library and sending int he string which is our underscore template
	render: function(){
		var attributes = this.model.toJSON(); // makeing attributes variable equal to the json of our model
		this.$el.html(this.template(attributes))  //This is how you render the template. Call the template function and send in the attributes
	}
})
var todoView = new TodoView({
	model: todoItem;
})
todoView.render();
console.log(todoView.el)

//Althought underscore.js comes with backbone, it doesn't have to be what you use for client side templating
// Can also use:
// mustache.js
<h3>{{description}}</h3>
// Haml-js
%h3= description
// Eco
<h3><%= @description %></h3>


//How to add an alert on click using jquery
// Events need to be defined inside our views
var TodoView = Backbone.View.extend({
	events:{
		"click h3": "alertStatus" // when the h3 is clicked, call the alerStatus method
	},
	alertStatus: function(e){
		alert("Hey, you clicked the h3!"); // definte the alertStatus function
	}
})
// The above will only call an elert inside of this particular element
// The above code is doing this:
this.$el.delegate('h3', 'click', alertStatus);


// More complex Event declaration
// Format: event: {"<event> <selector>": "<method>"}
var DocumentView = Backbone.View.extend({
	events:{
		"dbclick"					: "open", //since a selector was specified after dbclick, then anywhere within on el, it will trigger open fuction
		"click .icon.doc"			: "select",
		"click .show_notes"			: "toggleNotes",
		"click .title .lock"		: "editAccessLevel",
		"mouseover .title .date"	: "showToolTip",
	},
	...
})

// List of all the jquery events you can listen for
// change
// focusout
// mousedown
// mouseover
// select
// click
// hover
// mouseenter
// mouseup
// unload
// dbclick
// keydown
// mouseleave
// ready
// focus
// keypress
// mousemove
// resize
// focusin
// loadin
// mouseout
// scroll

// you can alway create custom event at the model layer



// Lesson 4: Models and Views

var TodoView = Backbone.View.extend({
	tagName: 'article',
	id: 'todo-view',
	className: 'todo',
	template: _.template('<h3><%= description %></h3>'), 
	render: function(){
		var attributes = this.model.toJSON(); 
		this.$el.html(this.template(attributes))  
	}
})
var todoView = new TodoView({
	model: todoItem;
})
todoView.render();
console.log(todoView.el)

// How to add a checkbox to the above view
var TodoView = Backbone.View.extend({
	template: _.template('<h3>' + '<input type=checkbox ' + //This puts a checkbox in the html
		'<% if(status === "complete") print("checked") %>/>' +
		'<%= description %></h3>'), 
	render: function(){
		var attributes = this.model.toJSON(); 
		this.$el.html(this.template(attributes))  
	}
})

//How to update the model when checkbox changes
// Views can update model
var TodoView = Backbone.View.extend({

	events: {
		'change input': 'toggleStatus' //whenver an input inside this view changes we want to call toggleStatus
	},
	toggleStatus: function(){
		if(this.model.get('status') === 'incomplete'){
			this.model.set({'status': 'complete'});
		} else {
			this.model.set({'status': 'incomplete'});
		}
	}
})
// BAD: The above code has too much model logic in the view!
// refactor the above code, so our model logic stays in the model and out of the view:
var TodoView = Backbone.View.extend({

	events: {
		'change input': 'toggleStatus' 
	},
	toggleStatus: function(){ //This function was put in the model (below)
		this.model.toggleStatus();
	}
})
var TodoItem = Backbone.Model.extend({
	togglestatus: function(){ //creates a function inside the model
		if(this.model.get('status') === 'incomplete'){
			this.model.set({'status': 'complete'});
		} else {
			this.model.set({'status': 'incomplete'});
		}
		this.save(); //This will save our model to the server. Does a put request to /todos/1
	}
})

// How to add styling to the todo element once it is complete

// update TodoView template to inlude a class
template: _.template('<h3 classs="<% status %>">' + 
	'<% if(status === "complete") print("checked") %> />' + //Clas will now be set to whatever hta stus is in the model
	' <%= description %></h3>')

//How to we update the view when our model is changed?
//We can call .render() in our view after the change event occurs
var TodoView = Backbone.View.extend({

	events: {
		'change input': 'toggleStatus' 
		this.render(); // renders after the event happens
	},
	toggleStatus: function(){ 
		this.model.toggleStatus();
	},
	render: function(){
		this.$el.htm(this.template(this.model.toJSON()));
	}
})
//BUT if our model changed somewhere else in our app, like a sidebar, this wouldn't work
// We need someway to change our view everytime the model changes and rerender
// we can use model events to notify the veiw when our model changes
var TodoView = Backbone.View.extend({

	events: {
		'change input': 'toggleStatus' 
	},
	initialize: function(){ //called whenever a new instance of the todo view is created
			this.model.on('change', this.render, this)// listens for any changes in the model, when this happens we call the render function on the view. What is the third argument? 
			// if we didn't call the third argument of "this", when the render function would assume "this" is window
			// telling backbone when it triggers the change event and call the render function it should set the context of the render function to the todo view of the instance. 
			this.model.on('destroy', this.remove, this); // listens to a models destroy event and remove the elents view from the document
	}
	toggleStatus: function(){ 
		this.model.toggleStatus();
	},
	render: function(){
		this.$el.htm(this.template(this.model.toJSON()));
	},
	remove: function(){
		this.$el.remove(); //remove the element from the view
	}
})


// Lesson 5: collections

// How do we do list instead of just one element
// We can do a collection

var TodoList = Backbone.Collection.extend({ //definiing a TodoList collection class
	model: TodoItem //need to specify which model the collection is managing
});
//How to create a new instance of the TodoList collection
var todoList = new TodoLsit();

// How to get the number of models inside a collection?
todoList.length; //return 2

// How to add a model instance
todoList.add(todoItem1); //return 2

//How to get a model instanceat index 0?
todoList.at(0); // todoitem1

//How to get by id
todoList.get(1); //todoItem1

// How to remove a model instance
todoList.remove(todoItem1)

// How do we popluate a collection with models in bulk?
// Collection has a reset function where we pass in an array of objects and each become a toditem
var todos = [
{description: 'Pick up milk.', status: 'incomplete'},
{description: 'Get a car wash.', status: 'incomplete'},
{description: 'Learn backbone', status: 'incomplete'}
];

// How do we populate our todolist colection with data from server?
// Specify where to get JSON data from:
var TodoList = Backbone.Collection.extend({
	url: '/todos'
});
//Populate colelction from server
todoList.fetch(); //this will make a GET to /todos and popluate our colelction wtih data from the server

//Can listen to an event on our collection
// on.(<event>, <function>)
todoList.on('change', function(){
	alert('event-name happened');
})
// Then run the event
todoList.trigger('event-name');


// Special events on Collections
add //When a model is added. The model is passed into the function when add is called
remove //When a model is removed. The model is passed into the function when remove is called
reset // When reset or fetched

// Example of reset event
//Listen to reset event
todoList.on('reset', doThing);
// This is triggered everytime .fetch or .reset is called
todoList.fetch();
todoList.reset();
// if you don't want event to be triggered, pass in silent true
todoList.fetch({silent: true});
todoList.reset({silent: true});
// you can also remove event listner with .off
todoList.off('reset',doThing)


// On coleection we can also listen to events that are triggered on models
// We can listen to change, destory, syn, error, all events on any model that is in our collection
// Events triggere on model in a collection will also be triggered on the collection


//How to do iteration on collelctions
//Setup our colelction:
todoList.reset([
	{description: 'pick up milk', status: 'incomplete', id: 1},
	{description: 'Get a car wash', status: 'complete', id: 2}
])
// Can call for each
todoList.forEach(function(todoItem){
	alert(todoItem.get('description')); //will be called with each model in the collection
})

//can also use map to iterate thorugh collecitons
//But map will build a new array based on the return of that function. We will get an array or two descriptions
todoList.map(function(todoitem){
	return todoitem.get('description');
})

// can also use filter function to create a new array with only the items that return true
todoList.filter(function(todoItem){
	return todoItem.get('status') === 'incomplete';
})

// Underscore.js provide many other iteration function: http://backbonejs.org/#Collection-Underscore-Methods



// Lesson 6: Collections and Views
// Collection View show the colleciton to the user
var TodoView = Backbone.View.extend({
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
	...
});
var todoItem = new TodoItem();
var todoView = new TodoView({model: todoItem});
console.log(todoView.render().el); // Will render <div><h3>Pick up milk</h3></div>

// our collection has many models and has many views
// The collection views delegate to the model views to actually render the html
// The collection view doesn't render any of it's own HTML. It delegates that responsolbilyt to the model views

// How to define a collection view?
var TodoListView = Backbone.View.extend({});
var todoListView = new TodoListView({collection: todoList}); // instead of padding in a model, we pass in a collection

// Write a collection view render function
render:function(){
	this.collection.forEach(this.addOne, this){ //goes through each model in the collection. The second "this" makes sure the context of add one is called on the view
	}
	addOne: function(todoItem){ //
		var todoView = new TodoView({model: todoItem}); // creates a todoView for each model
		this.$el.append(todoView.render().el); //then take each todo element and append it to our collection views element
	})
}
//Let's see this in action
var todoListView = new TodoListView({ collection: todoLsit});
todoListView.render();
console.log(todoListView.el); //should print out both model views inside of the collection views top level element

//But when we add another collection item, it doesn't update our view
//How to do that?
var TodoListView = Backbone.View.extend({
	initialize: function(){
		this.collection.on('add', this.addOne, this);
	},
	addOne: function(todoItem){ //
		var todoView = new TodoView({model: todoItem}); 
		this.$el.append(todoView.render().el); 
	},
	render: function(){
		this.collection.forEach(this.addOne, this)
	}
});
// Now wehn we add this, the view will update:
var newTodoItem = new TodoItem({
	description: 'take out the trash',
	status: 'incomplete'
});
todoList.add(newTodoItem); // Whenever thsi add function is called, it will trigger the addOne function

//BUt when we add a model, the DOM isn't getting updated:
//need to add a new event 'reset' and a new function add All
var TodoListView = Backbone.View.extend({
	initialize: function(){
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addAll, this) // this will call the addAll function whe fetch method is called
	},
	addOne: function(todoItem){ //
		var todoView = new TodoView({model: todoItem}); 
		this.$el.append(todoView.render().el); 
	},
	addAll: function(){
		this.collection.forEach(this.addOne, this); //need this function to update dom
	}
	render: function(){
		this.addAll() // now the render will call the addAll function
	}
});

// Gets the new data from the server
todoList.fetch()


//BUt when we remove an item from the collection, it doesn't get removed from the view
// to fix the problem we don't touch the collection view
// when we remove an event from a colelctio, we use .remove()
//In our todoList collection:
initialize: function(){
	this.on('remove', this.hideModel);
},
hideModel: function(model){
	model.trigger('hide'); // hide is a custom event which we definte in our todoItem View
}
// Define hide event in the todoItem View
initialize: function(){
	this.model.on('hide', this.remove, this);
}




// Lesson 7: Routers and Links

// What is the ruoter
// Maps urls to action:
var raouter = new Backbone.Router({
	routes: {"todos": 'index'}, //maps a url to an action(ex. /todos routes to the index action)
	index: function(){
	..
}
// SO when /todos or #todos is called, it will run the index action

// Another example of routing
var router = new Backbone.Router({
	routes: {"todos/:id": 'show'} //calls the show action. The :id is actually are parameter
	show: function(id){
		...
	}
})

// Params example
//   /todos/1 has id=1
//   todos/1 has id=2
//   todos/hello has id="hello"
//   /todos/foo-bar has id="foo-bar"

//Examples of route matcher
// Matcher == URL == Params
search/:query == search/ruby == query='ruby'
search/:query/p:page == search/ruby/p2 == query='ruby'
folder/:name-:mode == folder/foo-r == name='foo',mode='r'
file/*patch == file/hello/world.txt == path='hello/world.txt'

*///How to trigger teh routes
router.navigate("todos/1", {
	trigger:true //if we didn't pass this, the broser would update, but our action would not be called
})

//The # helps with browser history, when you want to press back in broweser
// Instead of using a hash, you can use the HTML5 pushState, which update teh browser url it uses the /

//How to make links work
Backbone.history.start({pushState:true}); //this is part of the backbone api

//Now links will work with pushStart
router.navigate("todos/1") // --> /todos/1


//Define a router class
var TodoRouter = Backbone.Router.extend({
	routes: { "": "index",
		"todos/:id": "show"},
	index: function(){
		this.todoList.fetch();
	},
	show: function(id){
		this.todo.focusOntodoItem(id); //will reset collection to show only the todo item that matches the id that's passed in
	},
	initialize: function(options){
		this.todoList = options.todoList;
	}
});
//Now instantiate router instance
var todoList = new TodoList();
var TodoApp = new TodoRouter({todoList: todoList}) // passed in the todoList collection


//App orginization
// Create a router instance
var TodoApp = new (Backbone.Router.extend({
	routes: {"":"index", "todos/:id": "show"},
	initialize: function(){
		this.todoList = new TodoList();
		this.todosView = new TodoListView({collection: this.todoList});
		$('#app').append(this.todosView.el);
	}, 
	start: function(){
		Backbone.history.start({pushState: true});
	},
	index: function(){
		this.todoList.fetch();
	},
	show: function(id){
		this.todoList.focusOnTodoItem(id);
	}
}))


//When our page first loads, we can call the start() fucntion, and our entire app will start and everything will be inititalized and will be good to go
$(function(){TodoApp.start()});











