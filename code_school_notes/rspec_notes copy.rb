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
			subject {Zombie.new(vegetairan:true)} 
			it 'craves vegan brains' do
				its(:craving){should == 'vegan brains'}
			end
		end
	end
end


context 'with a veggie preference' do
	subject {Zombie.new(vegetairan:true)} 








