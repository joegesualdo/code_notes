# Notes for: http://www.youtube.com/watch?v=BG_DDUD4M9E

# SIDE NOTE: can use require_relative istead of require at top of file. Check it out
# Value to customer is the code.

# BDD is where you start from outside in. You start with feature testing and not unit testing. RSpec is a BDD framework

# You test the outside of the equations first: View and model

# 1) Write a failing acceptance test (between application and user) . Mimic something the user does. User may be putting info in field, pressing submit, expecting to see something with a flash message
# some tof the the test in there are the things you would like to use as a checkmark for client.
# 2) Between views and controllers you should do TDD, because dont really know what to do. 
# 3) One controller may be using many models

# BDD:
# is what is important to the user, what they can percieve
# Takes TDD and focuses it to get mazximum value to its stake holder. You really want to test the users kicking the tires of your app
# BDD implies your going from the outside in, and also implies you are defining the language so users can understand
# BDD focuses on specifications that describe the behaviour of the app
# What to test:
# Only the things that matter to the user. typically reflections of the user stories
# Where to start:
# From the outermost layer, in the webpage, most likely a form
# that to ignore:
# everything else

# How to user stories work?
 As a [role] I want
 [goal] so that
 [benefit]
# Which translates in RSpec to:
 Given [role and its state]
 When [an event/action occurs]
 Then [the benefit]

 # TDD with RSpec Mini Tutorial

# TDD is not really about testing. It about clarify what somethings doesn, it's about design
# TDD leads to cleaners code and seperation of concerns
# When you write something without TDD, you end up writing more code then you need. You tend to over engineer
# USe irb or rails c to test things during testing, not in .rb file
# TDD makes you goal oriented
# TDD loop: Red, Green, Refactor
# Red: Write a faileing test for new functionality
# Green: Write the minimal amout of code to pass
# Refactor: Clean up and improve without adding functionality

# In BDD, it's important to GET THE WORDS RIGHT from the get go. Because thos words reflect you intents. If you dont someone will refactroe your code to do the wrong thing
# WHAT IS A .rvmrc file? Where you specify what rvm you want to use

# Lets start our App

# Specify a class we dont have yet
# by passing in a Cart, RSpec is expecting that Card class to exist
describe Cart do
end
# When you run this you shoul get a failure saying you don't have a Cart class

# Create a Cart class in cart.rb
class Cart
end
# Run the test, it should say you have 0 example and 0 failures, becuase you don't have any examples, which start with it

# write and example
describe Cart do
	context 'a new cart' do
		it 'contains no items' do
			expect(@cart).to be_empty # saying the instance variable @cart should be empty
		end
	end
end
# When you run this test, you will have one example and one failure.
# Failure is saying you dont have an empty method
# But this test doesn't read well because it's saying "Cart a new cart contains no items"
# refactor so test reads well using a string prefixed to the describe block
describe "An instance of", Cart do
	context 'when new' do
		it 'contains no items' do
			expect(@cart).to be_empty # saying the instance variable @cart should be empty
		end
	end
end
# Now this test reads better: "An instance of Cart when new contains no items". This makes our test fluid when reading
#The two failures we get are: 
# explicit Failure: WE are assuming cart has an #empty? method
# implicit Failure: The instance variable @cart has not been initialized

# We don't hav an instance of Cart because our test fixtrue hasn't been set up
# IT WOULDNT BE good to put @cart =Cart.new above the expect line (in the example), because the dscribe block is to gather specific tests agains one state of a class, so we want to put that same instance before every example
# We put the fixture in the describe block

# we want to test we have a initializaiton of the Cart class:
describe "An instance of", Cart do
	it "should be properly initialized" do
		expect(@cart).to be_a(Cart) # This expectation test for the proper initilization of a card instance
	end
	context 'when new' do
		it 'contains no items' do
			expect(@cart).to be_empty # saying the instance variable @cart should be empty
		end
	end
end
# We now need to add a fixture of for @cart before each example
describe "An instance of", Cart do
	before :each do # this before block is run before every test in this describe block. We are reseting @card every time
		@cart = Cart.new
	end
	it "should be properly initialized" do
		expect(@cart).to be_a(Cart) # This expectation test for the proper initilization of a card instance
	end
	context 'when new' do
		it 'contains no items' do
			expect(@cart).to be_empty # saying the instance variable @cart should be empty
		end
	end
end

# In each of our describe blocks we describe scenarios, and the scenarious are driven by some initial state of what we are testing
# In our example above we are testing a NEW CARD, so in our before block we want to create a new Cart
# If we had a scenariou with a card with two items, then in before block we would have created a card and added two items to the card

# To get the above code to pass, we add a empty? method, but we don't put anthhing in it
class Cart
	def empty?
	end
end

# Now it's failing because the empty method isn't returning true
# So lets make that pass
class Cart
	def initialize # add a constructer to our card class
		@items = {} # create instance variable called items,w hcih will be an empy class
	end
	def empty?
		@items.empty? # pipes the empty? to the items hash
	end
end

# Now all our tests are passing

# Now we got to the green state, it's time to refactor
# This is how we can refactor
class Cart
	extend Forwardable # TODO: What does this do?
	def_delegator :@items, :empty?
	def initialize 
		@items = {}
	end
end

# It's fine if you have more testing code than production code. Tests make it possible to go back to code and know what is going on.

# NEXT EXAMPLE: BDD with Capybara

# The last example was a unit test

# Proper acceptance test treat your application as a black box
# They should know as little as possible about what happens under the hood
# They are there just to interact with the interfac and objserve the results
# It's all observation/state driven testing
# Want to test outer layers (the views and model layer) until the application mature

#What is capybara:
# capybara is a lightweight alternative to cucumber. People dont like it because it add another layer of abstraction for a mythical unicorn figure that doesn't exist. 
# The actual user that looks at your application doens't care about looking at your test. They care about the behaviour live, and acceptance test is for you to verify that once they
# say it works, that it continues to work.

# Capybara automated your browser. simulated how the real user would use your application. A remote controle application from your test sweet to controle application

# Large corporation create selenium scripts to put random things in your appplication. This is not the type of testing we are looking to test the design of the function.
# We are doing a different type of testing, we are looking for sunny day scenarious. Does the applciation do what we expect and does it respond the way we think it owuld

# You may also want to use selenium or webkit support with capybara. TODO: WHY???

# Capybara doesn't process JavaScript (or give you visual feedbask)
# to test JS in your acceptance tests, you can use:
# selenium-webdriver or capybara-webkit

# Checkout teh capybara cheatsheet on thoughtbot: https://learn.thoughtbot.com/test-driven-rails-resources/capybara.pdf

#Example:

git clone git://github.com/integrallis/learn-rspec-capybara.git

# Uses devise and high_voltage gems
# high_voltage gem is for generatic static pages

#bundle
bundle

# Run server
rails s

# migrate the db and prepare teh test db
bundle exec rake db:migrate db:test:prepare 

# run the tests
bundle exec rspec

# You will se two specs passing on the model
# The two that are passing are simple tests using shoulda-matchers (gem is installed)
# The shoulda matchers doesnt eh validations in one liners
# spec/models/user_spec.rb
describe User do
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email) }
end

# We start by tackling this Sessions spec
  context "success" do
    before do
      # sign in
    end

    it "displays a welcome message" do
      pending
    end

    it "shows the correct navigation links" do
      # should not see 'Sign in' and 'Sign up'
      # should see 'Profile' or 'Sign out'
      pending
    end
  end

# NOTE: Your user acceptance testing goes into the FEATURES folder when you are using RSpec and capybara in combination

# First thing is we want to log in assuming we have a correct username and password
# WE insert a before hook in our success example, using a factory we created in the top describe block then insert a before hook for the success
# The following w
describe "User Sessions" do
#These are fixtures being set
  let!(:user) { User.create(email: email, password: password, password_confirmation: password) } # creates a user
  let(:email) { 'jill@example.com' } # 
  let(:password) { 'password' }

  before do
    visit root_path
    within('.navbar') { click_link('Sign in') }
  end

  context "failure" do
    before do
      fill_in 'Email', with: email
      fill_in 'Password', with: '' # makes password a blank string
      click_button 'Sign in'
    end

    it "displays an error message" do
      expect(page).to have_conent('Invalid Email or password')
    end

    it "shows the correct navigation links" do
    	 within('.navbar') do
     		expect(page).to_no have_link('Profile')	
     		expect(page).to_not have_link('Sign out')
     		expect(page).to have_link('Sign in')
     		expect(page).to have_link('Sign up')
     	end
    end
  end

  context "success" do
    before do
      fill_in 'Email', with: email # email refers to the email above
      fill_in 'Password', with: password #password refers to the password above
      click_button 'Sign In'
    end

    it "displays a welcome message" do
      expect(page).to have_content('Signed in sucessfully.') # This uses RSpec expect method with the capybara page object. Can scope the content to a certain div if you want
    end

    it "shows the correct navigation links" do
     	within('.navbar') do
     		expect(page).to have_link('Profile')	
     		expect(page).to have_link('Sign out')
     		expect(page).to_not have_link('Sign in')
     		expect(page).to_not have_link('Sign up')
     	end
    end
  end
end

 # When we refactor we usually make methods to deal with before blocks, which really help in the long run
 # for example we would have a method called sigh_in

 # ON to JS tests

 # The flash tests are javascript texts
 # To do these tests we need to add ",js: true" after our describe block name
 describe "Flash Notices", js: true do # the js: true says this is a js test
  before do
    # When an unauthenticated user visits
    # the edit_user_registration_path they
    # are redirected with a flash notice
    visit edit_user_registration_path
  end

  it "can be dismissed by the user" do
    # check that the flash message exists
    # click to close the flash message
    # check that the flash message is gone
    pending
  end
end
# Now we make the tests passs:
 describe "Flash Notices", js: true do # the js: true says this is a js test
  before do
    # When an unauthenticated user visits
    # the edit_user_registration_path they
    # are redirected with a flash notice
    visit edit_user_registration_path
  end

  it "can be dismissed by the user" do
    # check that the flash message exists
    # click to close the flash message
    # check that the flash message is gone
    expect(page).to have_content("You need to sign in or sign up before continuing.") # verify message is showing

    within('.alert') do
    	find('.close').click # This finds the button with the class close and clicks it
    end

    expect(page).to_not have_content('You need to sign in or sign up before continuing.') # verifys message has gone away
  end
end






























