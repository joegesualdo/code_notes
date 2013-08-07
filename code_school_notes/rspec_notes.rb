.save! # causes an exception to be raised

#Put zombie tests in spec/models/zombie_spec.rb
# Create a spec_helper.rb in the models directory
# inlclude 'require "spec_helper' in zombie.rb
# File is called a specification
# need to provide a lot of examples to test our zombies in our specifications
describe Zombie do # we use the name of the class rather than a string becuase this will test if there is a class
	it "is named Ash" do
		zombie = Zombie.new
		zombie.name.should == "Ash" # This is an expectation. Similar to assert in Test::Unit
	end
	it "has no brains" do
		zombie = Zombie.new
		zombie.brains.should < 1 # should is modifier. < is matcher
	end
end

# Types of matchers
# zombie.alive.should be_false
# zombie.alive.should_not be_true
# zombie.height.should be < 1

# What is a predicate method?
# Predicate method is a method that end with a ? and returns true or false
def hungry? 
	true
end

# Rspec has a predicate matcher
# So instead of writeing:
zombie.hungry?.should be_true
# we can wrtie
zombie.should be_hungry

# how to have test pending?
# leave the do off the end of it statement
it "is named Ash"
# Can also put x before it
xit "is named Ash" do
end
# Can also put 'pending in the example'
it "is named Ash" do
	pending
end


# LESSON 2

# how to install rspec in rails
# put gem in gemfile
group :development, test do
	gem 'rspec-rails'
end
# Then bundle
bundle
# Generate rspec files and configuations
rails g rspec install

# runnig configuartions in command line at run time
rspec --color #give you colorful output
rspec --format doucmentation #gives more verbose output
# if you dont want to runn these everytime, put them in your .rspec file that was generated during installation


# how to run rspec
rspec # running all the spec.rb files within /spec
rspec spec/models/ # running a specific directory
rspec spec/models/zombies_spec.rb # runs a specific test
rspec spec/models/zombies_spec.rb:4 # respec will find the closest example to 4th line and run it


require 'spec_helper'
describe Zombie do
	it 'is invalid without a name' do
		zombie = Zombie.new
		zombie.should_not be_valid # this is a predicate method. Calls the active record zombie.valid? method
	end
end

# more advance matchers
zombie.name.should match(/Ash Clone \d/) #takes a regular expression
# include matchers
# include can be used anywhere to see if an item is part of an array
describe Zombie do
	it 'include tweets' do
		tweet1 = Tweet.new(status: 'Uuuugghhh')
		tweet2 = Tweet.new(status: 'Arrrgggg')
		zombie = Zombie.new(name: 'Ash', tweets: [tweet1, tweet2])
		zombie.tweets.should include(tweet1)
		zombie.tweets.should include(tweet2)
	end
end
# Matcher: have
describe Zombie do
	it 'starts with two weapons' do
		zombie = Zombie.new(name: 'Ash')
		# zombie.weapons.count.should == 2
		#OR
		zombie.should have(2).weapons # better
	end
end
# can also call these have matchers
zombie.should have_at_least(2).weapons # better
zombie.should have_at_most(2).weapons # better

# Matcher change

describe Zombie do
	it 'change the number of Zombies' do
		zombie = Zombie.new(name: 'Ash')
		expect {zombie.save }.to change { Zombie.count }.by(1) # runs the change block before and after expect
		# can also call by() from() to()
		expect {zombie.save }.to change { Zombie.count }.from(0).to(1)
	end
end

# check if a method raised a specific error
describe Zombie do
	it 'raises an error if saved without a name' do
		zombie = Zombie.new
		expect { zombie.save! }.to raise_error(ActiveRecord::RecordInvalid)
		# can modify this to
		to
		not_to
		to_not
	end
end

# others
@zombie.should respond_to(hungry?) #checks it reponds to hungry
@width.should be_within(0.1).of(33.3)
@zombie.should exist # check to see if a zombie exists
@zombie.should satisfy {|zombie| zombie.hungry? } # allows you to pass a block and if returns true, expectation passes
@hungry_zombie.should be_kind_of(Person) # HugryZombie < Zombie
@status.should be_an_instance_of(String)

# Organizing your examples
describe Zombie do
	zombie 'responds to name' do
		zombie = Zombie.new
		zombie.should respond_to(:name) # checks if there is a name method on that zombie instance
	end
end
# Same as 
describe Zombie do
	zombie 'responds to name' do
		subject.should respond_to(:name) # when you refer to subject it's going to instancitate zombie and checks to. Everytime you rund subject inside and example its going to instantiate the class in describe
										# Only going to work if your describe block has a class in it
    end
end
# We can refactor the top by
describe Zombie do
	zombie 'responds to name' do
		should respond_to(:name) # don't even need to label the subject
	end
end
# we can also write block with curly brackets
describe Zombie do
	zombie 'responds to name' {should respond_to(:name)}
end
# Now we can get rid of the duplication
describe Zombie
	it {should respond_to(:name)} #Rspec is smart enought to generate out put that is readabel
end

# its
describe Zombie do
	it {subject.name.should == 'Ash'} # if we are using a subject like this and calling a method on it
end
# Instead of calling the subject to call the method, we can use its
describe Zombie do
	its(:name) {should == 'Ash'} # we use it's to call a method on teh instance of the class
end

# Other examples of its
describe Zombie do
	its(:name) { should == 'Ash' }
	its(:weapons) {should include(weapon)}
	its(:brain) {should be_nil}
	its('tweets.size'){should == 2 } #This string is going to get evaluated and then the result is tested
end


# Nesting examples:
describe Zombie do
	it 'craves brains when hungry'
	it 'with a veggie preference still craves brains when hungry'
	it 'with a veggie preference prefers vegan brains when hungry'
end
# We can refactor this like:
describe Zombie do
	it 'craves brains when hungry'
	describe 'with a veggie preference' 
		it 'still craves brains when hungry'
		it 'prefers vegan brains when hungry'
	end
end
# we can refactor more since we have 'when hungry' at end of describptions
describe Zombie do
	describe 'when hungry'
		it 'craves brains'
		describe 'with a veggie preference' do
			it 'still craves brains'
			it 'prefers vegan brains'
		end
	end
end
# heres another way to write it. Instead of using many describe, we use context
describe Zombie do
	context 'when hungry'
		it 'craves brains'
		context 'with a veggie preference' do
			it 'still craves brains'
			it 'prefers vegan brains'
		end
	end
end

# Sometimes we want to specify what our subject is
describe Zombie do
	context 'when hungry'
		it 'craves brains'
		context 'with a veggie preference' do
			subject {Zombie.new(vegetairan:true)} # Can only have one subject per example. Example starts with describe or context
			it 'craves vegan brains' do
				its(:craving){should == 'vegan brains'}
			end
		end
	end
end

# Sometime you will need different objects for you example, but you can only have one subject per example
# how to deal with different objects? Use lets.
context 'with a veggie preference' do
	subject {Zombie.new(vegetairan:true, weapons: [axe])}
	let(:axe) { Weapon.new(name: 'axe')} 

	its(:weapons) {should include(axe)}

	it 'can use its axe' do
		subject.swing(axe).should == true # only when we call exe variable does it go an instantiate that weapon so we can use it in our exampel
	end
end

# Instead of using subject in our expectations (which can get confusting about what the subject is), you can put a lets() on top
# with :zombie, so we can call zombie in our expectation istead of subject. Then we set our subject equal to that zombie
# Basically aliasing subject to zombie
context 'with a veggie preference' do
	let(:zombie) {Zombie.new(vegetairan:true, weapons: [axe])} # change from subject to lets(:zombie)
	let(:axe) { Weapon.new(name: 'axe')} 
	subject {zombie} # set our subject equal to the zombie we instantiated above

	its(:weapons) {should include(axe)}

	it 'can use its axe' do
		zombie.swing(axe).should == true # Now we can call zombie instead of subject
	end
end

# RSpec has new syntax which will simplify our first three lines of code
context 'with a veggie preference' do
	subject(:zombie) {Zombie.new(vegetairan:true, weapons: [axe])} # you can alias zombie to subject using this line, istead of using the third
	let(:axe) { Weapon.new(name: 'axe')} 

	its(:weapons) {should include(axe)}

	it 'can use its axe' do
		zombie.swing(axe).should == true 
	end
end
# BUT if we wanted to check to see if a zombie was actually created in the database, it wouldnt work because we're not creating an instance of Zombie
# A work around for this and make sure a zombie get's created every time the lets(:zombie) gets called, you could put an ! after lets
# Which will  create a Zombie before every example no matter what
context 'with a veggie preference' do
	let!(:zombie) {Zombie.new(vegetairan:true, weapons: [axe])} # the ! after let creates and instance of Zombie and instantiate Zombie before every example
	let(:axe) { Weapon.new(name: 'axe')} 
	subject {zombie} 

	its(:weapons) {should include(axe)}

	it 'can use its axe' do
		zombie.swing(axe).should == true 
	end
end

# example spec
describe Zombie do
	it 'has no name' do
		@zombie = Zombie.create
		@zombie.name.should be_nil?
	end

	it 'craves brains' do
		@zombie = Zombie.create
		@zombie.should be_craving_brains
	end

	it 'should not be hungry after eating brains' do
		@zombie = Zombie.create
		@zombie.hungry.should be_true
		@zombie.eat(:brains)
		@zombie.hungry.should be_false
	end
end
#Refactor
describe Zombie do
	let(:zombie){Zombie.create}
	subject {zombie}
	its(:name) {should be_nil}
	it { should be_craving_brains}
	it 'should not be hungry after eating brains' do
		expect {zombie.eat(:brains)}.to change{zombie.hungry}.from(true).to(false)
		end
	end
end


#LESSON 4: Hooks and tags

#example
describe Zombie do
	let(:zombie){ Zombie.new }

	it 'is hungry' do
		zombie.hungry!
		zombie.should be_hungry
	end

	it 'craves brains' do
		zombie.hungry!
		zombie.should be_craving_brains
	end
end
#refactor the above
# can put the repeated code that's in the examples into a before block to prevent duplication
# The before block will also run in the example deeply nested in context examples
describe Zombie do
	let(:zombie){ Zombie.new }
	before (:each) {zombie.hungry!} #Same as 'before {}', dont need :each. before is run each time before an example is about to run

	it 'is hungry' do
		zombie.should be_hungry
	end

	it 'craves brains' do
		zombie.should be_craving_brains
	end
end
# Can also set block to run once before all, run after each, or run after all
before (:all) {zombie.hungry!}
after (:each) {zombie.hungry!}
after (:all) {zombie.hungry!}

# Can also set a before block only specifically to run withing a nested context
describe Zombie do
	let(:zombie){ Zombie.new }
	before (:each) {zombie.hungry!} #Same as 'before {}', dont need :each. before is run each time before an example is about to run

	it 'craves brains' do
		zombie.should brains
	end
	context 'with a vegetarian preference' do
		before {zombie.vegetarian = true} # available to all examples within this context
		it 'still craves brains' do
		end
		it 'craves vegan brains' do
		end
	end
end

# shared examples
# What if we have two specs that use the same type of behavior?
# we can extract these examples into a shared examples

# SKIP END OF VIDEO 4

# VIDEO 5: Mocks and stubs
# /zpp/models/zombie.rb
class Zombie < ActiveRecord::becuase
	has_one :weapon

	def decapitate
		weapon.slice(self, :head)
	end
end
#In the above code we need to test the slice method, but we don't want the call to weapon to be executed
# what is a stub?
# Stub is for replacing a method with code that returns a specified result
# what is a mock?
# Mock is a stub with an expectations attached to it

# in the above example, we need to stub out the method









