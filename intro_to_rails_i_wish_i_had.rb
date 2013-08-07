# Tutorial: http://www.youtube.com/watch?v=cMcEgOPza8A

# How to skip Test::unit?
rails new tasks -T

# add these to your gemfile
group :test, :development do 
 gem 'rspec-rails'
 gem 'capybara' # simulates the user. It is like your assistant
 gem 'guard-rspec' # way to automatically run your test
 gem 'growl_notify' # display notifications on mac when test runs. THIS DOESN'T SEEM TO WORK!
end

# Need to run bundle install so we can download any of these gems we dont have on our system
bundle

# How to see all the generators in rails?
rails g

# install rspec
rails g rspec:install

# we need to initialize guard to automatically run our test
bundle exec guard init rspec

# might also want to install gem install rb-fsevent so guard can detect file changes
gem install rb-fsevent

# Create an integration test
rails g integration_test tasks # Creates spec/requests/tasks_spec.rb

# Need to configure RSpec with capybara
# http://stackoverflow.com/questions/15148585/undefined-method-visit-when-using-rspec-and-capybara-in-rails
# Add this to yoru config block in spec_helper.rb
config.include Capybara::DSL

#Create a tasks controller
rails g controller Tasks

# guard will complain if we dont have a routing folder. So we need to add one
mkdir spec/routing

# Create a migration file
rails g model Task task:string # this doesn't create the database. It just creates a ruby file. To create db need to run migration

#migrate the database
bundle exec rake db:migrate

# Add launchy for to gem file under test, developement
gem 'launchy' # This gives us the ability to get a visual snap shot of whats going on






