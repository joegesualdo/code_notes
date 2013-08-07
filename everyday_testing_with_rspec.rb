# Title: Everyday testing with rails

# List of full RESPEC matchers: https://github.com/rspec/rspec-expectations

# Faker methods: http://rubydoc.info/gems/faker/1.0.1/frames
	# - An alternative to faker is forgery: https://github.com/sevenwire/forgery

# match_array looks for an array’s contents, but not their order. If order matters, use the eq matcher instead.

# TIPS:
# • Use active, explicit expectations: Use verbs to explain what an example’s results should be.
# 	Only check for one result per example.
# • Test for what you expect to happen and for what you expect to not happen: Think about
# 	both paths when writing examples, and test accordingly.
# • Test for edge cases: If you have a validation that requires a password be between four and
# 	ten characters in length, don’t just test an eight-character password and call it good. A good
# 	set of tests would test at four and eight, as well as at three and eleven. (Of course, you might
# 	also take the opportunity to ask yourself why you’d allow such short passwords, or not allow
# 	longer ones. Testing is a good opportunity to reflect on an application’s requirements and
# 	code.)
# • Organize your specs for good readability: Use describe and context to sort similar
# 	examples into an outline format, and before and after blocks to remove duplication.
# 	However, in the case of tests readability trumps DRY–if you find yourself having to scroll
# 	up and down your spec too much, it’s okay to repeat yourself a bit.


# Gemfile for book
group :development, :test do
 # rspec-rails includes RSpec itself in a wrapper to add some extra Rails-specific features
 gem "rspec-rails", "~> 2.12.2"
 # factory_girl_rails replaces Rails’ default fixtures for feeding test data to the test suite with much more preferable factories.
 gem "factory_girl_rails", "~> 4.2.0"
 # guard-rspec watches your application and tests and runs specs for you automatically when it detects changes.
 gem "guard-rspec", "~> 2.4.0"
end

group :test do
 # faker generates names, email addresses, and other placeholders for factories 
 gem "faker", "~> 1.1.2"
 # capybara makes it easy to programatically simulate your users’ interactions with your application.
 gem "capybara", "~> 2.0.2"
 # database_cleaner helps make sure each spec run in RSpec begins with a clean slate, by–you guessed it–cleaning data from the test database.
 gem "database_cleaner", "~> 0.9.1"
 # launchy does one thing, but does it well: It opens your default web browser on demand to show you what your application is rendering
 gem "launchy", "~> 2.2.0"
end

# Creates the db file for test, poduction and development.
bundle exec rake db:create:all

# Now we can add a spec folder to our application and add some basic RSpec configuration. We’ll install 
# RSpec with the following command line directive
bundle exec rails generate rspec:install

# Optional: change RSpec’s output from the default format to the easy-to-read documentation format.
#In .rspec:
--format documentation

# Thanks to the beauty of Railties⁶, just by loading the rspec-rails and factory_girl_rails gems
# we’re all set. Rails’ stock generators will no longer generate the default Test::Unit files in test;
# they’ll generate RSpec files in spec (and factories in spec/factories–more on factories in the next
# chapter). However, if you’d like you can manually specify settings for these generators. If you use
# the scaffold generator to add code to your application, you may want to consider this–the default
# generator adds a lot of specs we won’t cover in this book; in particular, view specs.

# Open config/application.rb and include the following code inside the Application class:
config.generators do |g|
	g.test_framework :rspec,
	# fixtures: true specifies to generate a fixture for each model (using a Factory Girl factory, instead of an actual fixture)
	fixtures: true,
	# view_specs: false says to skip generating view specs. I won’t cover them in this book; instead we’ll use request specs to test interface elements.
	view_specs: false,
	# helper_specs: false skips generating specs for the helper files Rails generates with each controller. As your comfort level with RSpec improves, consider changing this option to true and testing these files.
	helper_specs: false,
	# routing_specs: false omits a spec file for your config/routes.rb file. If your application is simple, as the one in this book will be, you’re probably safe skipping these specs. As your application grows, however, and takes on more complex routing, it’s a good idea to incorporate routing specs. 
	routing_specs: false,
	controller_specs: true,
	request_specs: true
	# And finally, g.fixture_replacement :factory_girl tells Rails to generate factories instead of fixtures, and to save them in the spec/factories directory.
	g.fixture_replacement :factory_girl, dir: "spec/factories"
end

# One last step: Even though we’ve got a test database, it doesn’t have a schema. To make it match the development schema, run the following rake task:
# This “clones” the database structure as used in development to production. However, the task doesn’t copy any data–any data setup that a given test requires will be up to you, as we’ll see throughout this book.
rake db:test:clone

# ALWAYS BE CLONING
# Don’t forget, any time you use rake db:migrate to make a change to your
# development database, you’ll need to mirror that change in your test database
# with rake db:test:clone. If you run RSpec and get an error about an unknown
# database, it’s probably because you haven’t cloned yet.
# You can chain the two rake tasks together on your command line with rake
# db:migrate db:test:clone, or you can go one step further and create a shell
# alias with a shortcut. For example, I use the shortcut rmigc to run a migration
# and clone the database with a single command.

# GET STARTED TESTING

# To get started, a model spec should include tests for the following:
# • The model’s create method, when passed valid attributes, should be valid.
# • Data that fail validations should not be valid.
# • Class and instance methods perform as expected

# Its helpful to think of them as individual outlines.
# For example, let’s look at our main Contact model’s requirements:

describe Contact
	it "is valid with a firstname and lastname"
	it "is invalid without a firstname"
	it "is invalid without a lastname"
	it "is invalid with a duplicate email address"
	it "returns a contact's full name as a string"
# These are good because they follow our best practice:
# • It describes a set of expectations–in this case, what the Contact model should look like.
# • Each example (a line beginning with it) only expects one thing. Notice that I’m testing
#   the firstname and lastname validations separately. This way, if an example fails, I know it’s
#   because of that specific validation, and don’t have to dig through RSpec’s output for clues–at
#   least, not as deeply.
# • Each example is explicit. The descriptive string after it is technically optional in RSpec;
#   however, omitting it makes your specs more difficult to read.
# • Each example’s description begins with a verb, not should. Read the expectations aloud:
#   Contact is invalid without a firstname, Contact is invalid without a lastname, Contact returns
#   a contact’s full name as a string. Readability is important!

# First, we’ll open up the spec directory and, if necessary, create a subdirectory named models. Inside
# that subdirectory let’s create a file named contact_spec.rb and add the following:

# The name and location for your spec file is important! RSpec’s file structure
# mirrors that of the app directory, as do the files within it. In the case of model
# specs, contact_spec.rb should correspond to contact.rb. This becomes more
# important later when we start automating things.
# In spec/models/contact_spec.rb:
require 'spec_helper'

describe Contact do
 it "is valid with a firstname and lastname"
 it "is invalid without a firstname"
 it "is invalid without a lastname"
 it "is invalid with a duplicate email address"
 it "returns a contact's full name as a string"
end

# run the tests:
bundle exec rspec 
# everything should be pending

# RSpec recent release changed so instead of saying something should or should_not match expected output, you expect something to or to_not be something else.
# here's an example:
# Old:
it "is true when true" do
	true.should be_true
end
# New
it "is true when true" do
	expect(true).to be_true
end

# Implement first test
describe Contact do
 it "is valid with a firstname and lastname" do
	contact = Contact.new(
		firstname: "Joe",
		lastname: "Gesualdo",
		email: "joe@example.com")
	expect(contact).to be_valid # This simple example uses RSpec’s be_valid matcher to verify that our model knows what it has to look like to be valid.
 end
end
# first test should pass after you run
bundle exec rspec

# TESTING VALIDATIONS

it "is invalid without a firstname" do
	expect(Contact.new(firstname: nil)).to have(1).errors_on(:firstname)
end

it "is invalid without a lastname" do
	expect(Contact.new(lastname: nil)).to have(1).errors_on(:lastname)
end

it "is invalid with a duplicate email address" do
Contact.create(
    firstname: "Joe",
    lastname: "Gesualdo",
    email: "joe@example.com"
)
contact = Contact.new(
    firstname: "Joe",
    lastname: "Shmo",
    email: "joe@example.com"
)
expect(contact).to have(1).errors_on(:email)
end
# Notice a subtle difference here: In this case, we persisted a contact (using create instead of new) to
# test against, then created a second contact as the subject of the actual test. This, of course, requires
# that the persisted contact is valid (with both a first and last name) and has an email address assigned
# to it. In future chapters we’ll look at utilities to streamline this process.

#Create Phone model
rails g model Phone phone_type phone

#migrate and clone
bundle exec rake db:migrate db:test:clone


# Create specs for phone model
 describe Phone do
	it "does not allow duplicate phone numbers per contact" do
		contact = Contact.create(firstname: 'Joe', lastname: 'Tester',
		email: 'joetester@example.com')
		home_phone = contact.phones.create(phone_type: 'home',
		phone: '785-555-1234')
		mobile_phone = contact.phones.build(phone_type: 'mobile',
		phone: '785-555-1234')

		expect(mobile_phone).to_not be_valid
	end

	it "allows two contacts to share a phone number" do
			contact = Contact.create(firstname: 'Joe', lastname: 'Tester',
		email: 'joetester@example.com')
		contact.phones.create(phone_type: 'home',
		phone: '785-555-1234')
		other_contact = Contact.new
		other_phone = other_contact.phones.build(phone_type:
		'home', phone: '785-555-1234')

		expect(other_phone).to be_valid
	end
end
# need validates :phone, uniqueness: { scope: :contact_id } in your phone model to pass



# TESTING INSTANCE METHODS
it "returns a contact's full name as a string" do
	contact = Contact.new(firstname: 'John', lastname: 'Doe',
	email: 'johndoe@example.com')
	expect(contact.name).to eq 'John Doe'
end
# make this pass by:
def name
	"#{self.firstname} #{self.lastname}"
end


# TESTING CLASS METHODS AND SCOPES

it "returns a sorted array of results that match" do
  smith = Contact.create(firstname: 'John', lastname: 'Smith',
                         email: 'jsmith@example.com')
  jones = Contact.create(firstname: 'Tim', lastname: 'Jones',
                         email: 'tjones@example.com')
  johnson = Contact.create(firstname: 'John', lastname: 'Johnson',
                         email: 'jjohnson@example.com')

  expect(Contact.by_letter("J")).to eq [johnson, jones]
end
# Get it to pass:
def self.by_letter(letter)
	where("lastname LIKE ?", "#{letter}%").order(:lastname) # This is SQL
end
#Note we’re testing both the results of the query and the sort order; jones will be retrieved from the
# database first but since we’re sorting by last name then johnson should be stored first in the query
# results.

#test to make sure name that doesn't start with j isn't included
it "by_letter should not return a name without the first letter given" do
	smith = Contact.create(firstname: 'John', lastname: 'Smith',
	                       email: 'jsmith@example.com')
	jones = Contact.create(firstname: 'Tim', lastname: 'Jones',
	                       email: 'tjones@example.com')
	johnson = Contact.create(firstname: 'John', lastname: 'Johnson',
	                         email: 'jjohnson@example.com')
	expect(Contact.by_letter("J")).to_not include smith
end


#### DRYer specs with describe, context, before and after
# the previous code samples have some redundancy: We create the same three objects in
# each example. Just as in your application code, the DRY principle applies to your tests (with some
# exceptions; see below). Let’s use a few RSpec tricks to clean things up.

# Change the code for by_letter function to:
describe "filter last name by letter" do # create a describe block within my describe Contact block to focus on the filter feature.
    before :each do # RSpec will rollback any rows created in the before(:each) block after each example is run.
    				# the code contained within the before block is run before each example within the describe block–but not outside of that block.
      @smith = Contact.create(firstname: 'John', lastname: 'Smith', # note that since they are no longer being created within each example, we have to assign them to instance variables, so they’re accessible outside of the before block, within our actual examples
                              email: 'jsmith@example.com')
      @jones = Contact.create(firstname: 'Tim', lastname: 'Jones',
                              email: 'tjones@example.com')
      @johnson = Contact.create(firstname: 'John', lastname: 'Johnson',
                                email: 'jjohnson@example.com')
    end

    context "matching letters" do # , describe outlines a function of my class; context outlines a specific state
      it "returns an assorted array of results that match" do
        expect(Contact.by_letter("J")).to eq [@johnson, @jones]
      end
    end

    context "non-matching letter" do # , describe outlines a function of my class; context outlines a specific state
      it "only returns names with provided starting letter" do
        expect(Contact.by_letter("J")).to_not include @smith
      end
    end
end


#### Generating test data with factories

# Factories versus fixtures

# What is a fixture?
# Out of the box, Rails provides a means of quickly generating sample data called fixtures. A fixture
# is essentially a YAML-formatted file which helps create sample data
# An example fixture:
aaron:
 firstname: "Aaron"
 lastname: "Sumner"
 email: "aaron@everydayrails.com"

john:
 firstname: "John"
 lastname: "Doe"
 email: "johndoe@nobody.org"
# Then, by referencing contacts(:aaron) in a test, I’ve instantly got a fresh Contact with all attributesset

# Fixtures are bad for multiple reason, on being Rails bypasses Active Record when
# it loads fixture data into your test database. What does that mean? It means that important things
# like your models’ validations are ignored. This is bad!


# What is a factory?
# Simple, flexible, building blocks for test data. If I had to point to a single component
# that helped me see the light toward testing more than anything else, it would be Factory Girl¹¹, an
# easy-to-use and easy-to-rely-on gem for creating test data without the brittleness of fixtures.

# Create a factory in spec/factories/contact.rb
FactoryGirl.define do
  factory :contact do
    firstname "John"
    lastname "Doe"
    sequence(:email) { |n| "johndoe#{n}@example.com"} # Sequence is a handy feature provided by Factory Girl, called sequences. As you
                        # might have guessed from reading the code, a sequence will automatically increment n inside the
                        # block, yielding johndoe1@example.com, johndoe2@example.com, and so on as the factory is used to
                        # generate new contacts. Sequences are essential for any model that has a uniqueness validation.
  end
end

# test Factory in your Contact spec
it "has a valid factory" do
	expect(FactoryGirl.build(:contact)).to be_valid
end

# use Factory Girl’s build method to create a new, yet
# non-persisted, Contact. The first example’s spec assigns contact to a Contact with no firstname
# assigned. The second follows suit, replacing the factory’s default lastname with nil. Since our
# Contact model validates presence of both firstname and lastname, both of these examples expect
# to see errors.

#The first example’s spec assigns contact to a Contact with no firstname assigned.
  it "is invalid without a firstname" do
    contact = FactoryGirl.build(:contact, firstname: nil)
    expect(contact).to have(1).errors_on(:firstname)
  end

# The second follows suit, replacing the factory’s default lastname with nil.
  it "is invalid without a lastname" do
    contact = FactoryGirl.build(:contact, lastname: nil)
    expect(contact).to have(1).errors_on(:lastname)
  end

# This time, we’re creating a new Contact with specific values for firstname and lastname. Then, we’re making sure that the name method on the assigned contact returns the string we expect.
  it "returns a contact's full name as a string" do
    contact = FactoryGirl.build(:contact)
    expect(contact.name).to eq "John Doe"
  end
# In this example, we’re making sure the test object’s email attribute is not duplicate data. In order to
# do this, we need another Contact persisted in the database–so before running the expectation, we
# use FactoryGirl.create to first persist a contact with the same email address.
  it "is invalid with a duplicate email address" do
    FactoryGirl.create(:contact, email: "aaron@example.com")
    contact = FactoryGirl.build(:contact, email: "aaron@example.com")
    expect(contact).to have(1).errors_on(:email)
  end


  # Simplifying our syntax 
  # include the following in our spec_helper.rb so we don't have to keep typing FactoryGirl before our methods
#   our specs can use the shorter build(:contact) syntax. This one line of configuration
# 	also gives us create(:contact), which we’ve already used; and attributes_for(:contact) and
# 	build_stubbed(:contact), which we’ll use in subsequent chapters.
RSpec.configure do |config|
# Include Factory Girl syntax to simplify calls to factories
 config.include FactoryGirl::Syntax::Methods

# other configurations omitted ...
end


# Associations and inheritance in factories

# Create a facotory for Phone
FactoryGirl.define do
	factory :phone do
		association :contact # call to :association; that tells Factory Girl to create a new Contact for this phone to belong to if one wasn’t passed into the build (or create) method.
		phone { '123-555-1234' }
		phone_type 'home'
	end
end

# Factory Girl provides us the ability to create inherited factories, overriding attributes as necessary. In other words, if we specifically want an
# office phone in a spec, we should be able to call it with build(:office_phone) (or the longer
# FactoryGirl.build(:office_phone), if you prefer). Here’s how it looks:

FactoryGirl.define do
	 factory :phone do
		 association :contact
		 phone { '123-555-1234' }

		factory :home_phone do
			 phone_type 'home'
	 	end

		 factory :work_phone do
		 	phone_type 'work'
		 end

		 factory :mobile_phone do
		 	phone_type 'mobile'
		 end
	 end
end

# and the spec can be simplified to
it "allows two contacts to share a phone number" do
	create(:home_phone,
	phone: "785-555-1234")
	expect(build(:home_phone, phone: "785-555-1234")).to be_valid
end


# Generating better fake data
# In the last chapter, we used a sequence to make sure the contacts factory yielded unique email
# addresses. We can improve on this by providing more realistic test data to our app, using a fake
# data generator called–what else?–Faker. Faker is a Ruby port of a time-honored Perl library for
# generating fake names, addresses, sentences, and more–excellent for testing purposes
# With Faker installed, we can incorporate fake data into our factories:

# Use FAker to create names and email
require 'faker'

FactoryGirl.define do
  factory :contact do
    firstname { Faker::Name.first_name } # TODO: Why do you need a block here?
    lastname { Faker::Name.last_name }
    email { Faker::Internet.email }
  end
end

# Use faker to generate phone number
require 'faker'

FactoryGirl.define do
  factory :phone do
    association :contact
    phone { Faker::PhoneNumber.phone_number }

    factory :home_phone do
      phone_type 'home'
    end

    factory :work_phone do
      phone_type 'work'
    end

    factory :mobile_phone do
      phone_type 'mobile'
    end
  end
end
# Two important things to notice: First, we’ve required the Faker
# library to load in the first line of my factory; and second, that we pass the Faker::Internet.email
# method inside a block–Factory Girl considers this a “lazy attribute” as opposed to the staticallyadded string the factory previously had.

# TODO: ADVANCED ASSOCIATIONS. PAGE 40 - 42

## BASIC CONTROLLER SPECS

# A controller spec is broken down by controller method–each example is based off of a single action
# and, optionally, any params passed to it. Here’s a simple example:
it "redirects to the home page upon save" do
	post :create, message: FactoryGirl.attributes_for(:message) # a reminder, attributes_for() generates a hash of attributes, not an object. A factory generates test data to pass to the controller method; note the use of Factory Girl’s attributes_for option, which generates a hash of values as opposed to a Ruby object.
	expect(response).to redirect_to root_url
end
# The basic syntax of a controller spec–its HTTP method (post), controller method (:create), and, optionally, parameters being passed to the method.

# Create specs in spec/controllers/messages_contoller_spec.rb
describe MessagesController do

  describe 'GET #index' do
    it "populates an array of messages"
    it "renders the :index view"
  end

  describe 'GET #show' do
   it "assigns the requested message to @message"
   it "renders the :show template"
  end

  describe 'GET #new' do
   it "assigns a new Message to @message"
   it "renders the :new template"
  end

  describe 'GET #edit' do
    it "assigns the requested message to @message"
    it "renders the :edit template"
  end

  describe "POST #create" do
    context "with valid attributes" do
      it "saves the new message in the database"
      it "redirects to the home page"
    end

    context "with invalid attributes" do
      it "does not save the new message in the database"
      it "re-renders the :new template"
    end
  end

  describe 'PUT #update' do
    context "with valid attributes" do
      it "updates the message in the database"
      it "redirects to the message"
    end

    context "with invalid attributes" do
      it "does not update the message"
      it "re-renders the #edit template"
    end
  end

  describe 'DELETE #destroy' do
    it "deletes the message from the database"
    it "redirects to the home page"
  end
 end

 # Create a factory for messages:
 FactoryGirl.define do
  factory :message do
    name Faker::Name.name
    email Faker::Internet.email
    message Faker::Lorem.paragraph

    factory :invalid_messages do
      email nil
    end
  end
end
# Remember how we used factory inheritance to create a :home_phone, :office_phone, and :mobile_-
# phone from a parent :phone factory? We can use that same technique to create an :invalid_message
# from the base :message factory. It replaces the specified attributes (in this case, email) with its own;
# everything else will defer to the original :message factory.

# Write specs for index action
describe 'GET #index' do
	it "populates an array of messages" do
		message = create(:message)
		get :index
		expect(assigns(:messages)).to match_array [message] # Using RSpec’s assigns() method, we check that the collection (assigned to @messages) is what we’d expect it to be with RSpec’s match_array matcher. In this case, it’s looking for a single-item array containing the message created within the example.
	end

	it "renders the :index view" do
		get :index
		expect(response).to render_template :index # Makes sure that the view template index.html.erb is rendered, via response
	end
end

# The show action is similar, with a slight twist: We need to pass along an id to look up in show:
  describe 'GET #show' do
    it "assigns the requested message to @message"  do 
      message = create(:message)
      get :show, id: message # The method should also render the show.html.erb template.
      expect(assigns(:message)).to eq message # # This time, assigns() looks for @message to be assigned in the method, and to equal the message created prior to the request.
    end
   it "renders the :show template" do
     message = create(:message)
     get :show, id: message
     expect(response).to render_template :show
   end
  end

  # Right specs for the new action
  describe 'GET #new' do
   it "assigns a new Message to @message" do
     get :new
     expect(assigns(:message)).to be_a_new(Message)
   end
   it "renders the :new template" do
     get :new
     expect(response).to render_template :new
   end
  end

  # Write specs for the edit action
    describe 'GET #edit' do
    it "assigns the requested message to @message" do
      message = create(:message)
      get :edit, id: message
      expect(assigns(:message)).to eq message
    end
    it "renders the :edit template" do
      message = create(:message)
      get :edit, id: message
      expect(response).to render_template :edit
    end
  end


  # Testing POST requests

# Time to move on to our controller’s create method, accessed via POST in our RESTful app. One key
# difference from the GET methods: Instead of the :id we passed to the GET methods, we need to
# pass the equivalent of params[:message]–the contents of the form in which a user would enter a
# new message. As mentioned earlier, we’ll use Factory Girl’s attributes_for() method. Here’s the
# basic approach:

  describe "POST #create" do
    context "with valid attributes" do
      it "saves the new message in the database" do
        expect{
          post :create, message: attributes_for(:message)
        }.to change(Message, :count).by(1)
      end
      it "redirects to the home page" do
        post :create, message: attributes_for(:message)
        expect(response).to redirect_to message_path(1)
      end
    end

    context "with invalid attributes" do
      it "does not save the new message in the database" do
        expect {
          post :create, message: attributes_for(:invalid_message)
        }.to_not change(Message, :count)
      end
      it "re-renders the :new template" do
        post :create, message: attributes_for(:invalid_message)
        expect(response).to render_template :new
      end
    end

 # Testing PUT requests
 
 ############### Page 51 line 16 should be 'name' not 'firstname'
 ############### Page 52 line 8 shoudl be to_not not to

   describe 'PUT #update' do
    before :each do
      @message = create(:message, name: "Aaron Sumner",
                          email: "aaron@everydayrails.com")
    end

    it "locates the requested @message" do
      put :update, id: @message, message: attributes_for(:message)
      expect(assigns(:message)).to eq(@message)
    end

    context "valid attributes" do
      it "changes @message's attributes" do
        put :update, id: @message,
        message: attributes_for(:message,
                                   name: "A. Sumner")
        @message.reload # Note that we have to call reload on @message to check that our updates are actually persisted.
        expect(@message.name).to eq("A. Sumner")
      end

      it "redirects to the updated message" do
        put :update, id: @message, message: attributes_for(:message)
        expect(response).to redirect_to @message
      end
    end

    context "invalid attributes" do
      it "does not change @message's attributes" do
        put :update, id: @message,
        message: attributes_for(:message,
                                  name: "None of your business",
            email: "")
        @message.reload # Note that we have to call reload on @message to check that our updates are actually persisted.
        expect(@message.name).to_not eq("None of your business")
      end

      it "re-renders the edit method" do
        put :update, id: @message, message: attributes_for(:invalid_message)
        expect(response).to render_template :edit
      end
    end
  end


  # Testing DESTROY requests
describe 'DELETE #destroy' do
    before :each do
      @message = create(:message)
    end
    it "deletes the message from the database" do
      expect{
        delete :destroy , id: @message # The first expectation checks to see if the destroy method in the controller actually deleted the object (using the now-familiar expect{} proc);
      }.to change(Message, :count).by(-1)
    end
    it "redirects to the home page" do
      delete :destroy, id: @message
      expect(response).to redirect_to messages_url # the second expectation confirms that the user is redirected back to the index upon success.
    end
  end	
end
