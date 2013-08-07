# These two are the same
puts "Hello world" #=> Hello world
Kernel.puts "Hello world" #=> Hello world

#Kernel also has an open method. Without the require statement 
# for 'open-uri', it can only open local files, not download webpages.
myfile = Kernel.open("test.txt", "w")   
myfile.puts("hello world")
myfile.close

# How to see all the methods of Kernel?
Kernel.methods # type this in irb
# How to see methods of other classes?
String.methods
Fixnum.methods
Float.methods

# Add a class to the string class?
class String
   def embiggen
      "#{self.upcase}!!!" # The keyword self is used to refer to the invoking object.
   end
end      
"Wiggum".embiggen #=> "WIGGUM!!!"

# Add a method to String class that converts currency to  float
class String
   def currency_to_f
      self.gsub('$','').gsub(",",'').to_f
   end
end 
puts "$100" + "$200,345"   #=> $100$200,345
puts "$100".currency_to_f + "$200,345".currency_to_f #=> 200445.0

# How to add methods to Kernel?
def woo; puts "woooooo"; end 
# if you check Kernel.methods you will see teh woo method


# How to create a file using ruby
File.open("my_file_name.rb", "w") # need the w when opening because this indicates you are writing a file
#How to open a file to read
File.open("my_file_name.rb", "r") # By default, the open method goes into read mode. We don't need to supplying "r" in the line
#  If you try to open a filename – for writing – that doesn't yet exist, open will create an empty file of that name.
# How to open a file and write to it
File.open("my_file_name.rb").write("Hello world")

# How to use require-uri
# Without require 'open-uri', the open method would only be able to open files on the hard drive.
# The use of open with a url actually uses the open method supplied by the OpenURI library.
require "open-uri"
remote_data = open("http://www.google.com").read #need quotes around url. Need to send .read or it will return the object. Dont need File.

# how to find certain tags in source
require "open-uri"
url = "http://www.nytimes.com"
pattern = "<img"   
page = open(url).read
tags = page.scan(pattern) #the scan method will scan the document for the pattern you passed as it's parameters
puts "The site #{url} has #{tags.length} img tags"

# How to loop through a number set
(1..10).each do |a_number| # the 1..10 is actually an array with 10 numbers
    puts a_number
    sleep 1 # this gives a 1 second break between loops
end

# How to find out all the unique numbers in an ARray?
%w{3 4 5 6 6}.uniq

# How to pull xml data: http://ruby.bastardsbook.com/chapters/intro_tweet_fetch/

=begin	
This is how you make multi line comments. With the =begin and =end	
=end

# Example of Ruby's syntactic sugar
# Dont need parens
puts "Hello World"
puts("Hello World") 
# if statements can be put inline      
if 12/6 == 2
   puts "12/6 is 2"
end
puts "12/6 is 2" if 12 / 6 == 2   
# curly braces can be substituted for do...end blocks
[1,2,3,4].each do |x|
   puts(x)
end

[1,2,3,4].each{ |x| puts(x) }  


# Types of numbers
# Fixnum: You probably know this as an integer. A whole number with no decimal point, e.g. 42
# Float: This is basically a decimal number, e.g: 42.923812

# How to convert integer (ex. 3) to a float (ex. 3.0) and a float to an int?
3.to_f
3.0.to_i

#number classes:
3.class #=> Fixnum
3.5 #=> Float
Fixnum.class #=> Class

# What is Class
#Class object, as we'll see later, is the name of the data structure that defines how a datatype behaves.

# examples of String Literals:
\n # a new line
\t # a tab space
\"" # a literal quotation mark
\'' # a literal apostraphe
\\ # a literal backslash

# Substitue in a string
# use the .sub method
puts "The cat and the hat".sub("hat", "rat")   #=> The cat and the rat
puts "I own an iPad, iPhone and an iPod".gsub('i', 'my') #=>   I own an myPad, myPhone and an myPod
# .gsub replaces all the occurences of a given string

# Can use << instead of +
x = "cafe"
puts( x << "mocha") #=> "cafemocha"

# Variables cannot have the following:
webpage-url #can't have punctuation
100baby_names #can't start with a number


# Why put variables in UPPERCASE?
# Using uppercase letters for variables is mostly for human-readibility. Anyone reading your code will expect that 
# constants aren't going to change anywhere in the program, and anyone updating your code should know not to change 
# the value of constants after their initialization. But even if they do, Ruby will only issue a warning:

# Don't have to decalare variable with var
# Ruby saves you the trouble of typing var. The upshot is that anytime you bring a new variable into existence, you have 
# to assign it a value, even if the value is nil, which is Ruby's keyword for "nothing":

# Inline assignment operations
# Ruby allows you to combine arithmetic operators with the equals sign = to do an operation upon a variable and reassign 
# 	it to the variable – all in a single line:
y = 10
y = 10 + 0.5   #=>   10.5

y += 0.5   #=>   11.0               
y *= 2   #=>   22.0
y /= 11   #=>   2.0
y -= 1   #=>   1.0

apple = "Washington"   #=> "Washington"
apple += " State"   #=> "Washington State"

# How to find the object id of a variable
x = "Hello"
puts x.object_id 

# What are in-place operations. 
# in-place operations modify the original invoking object.
quiet_version = "hello there"
loud_version = quiet_version.upcase!
puts loud_version #=> HELLO THERE
puts quiet_version #=> HELLO THERE
# Not all in-place operations have an exclamation mark. 
# That's just a typical Ruby convention to inform programmers that a given method alters the original object.

# TODO: What is the difference between puts and return

# Add return within a method block to exit out of method
def write_code(number_of_errors)
  return "No problem" if number_of_errors == 0 # if it returns, rest of program doesn't run
  badness = compute_badness(number_of_errors)
  "WTF?!  Badness = #{badness}."
end

# Make method arguments optional with defaults:
def foo_greeting(recipient = "you")
   puts "Hello there, #{recipient.upcase}!"
end      
foo_greeting#=> Hello there, YOU!

#rand function:
# When called with a number, it generates a random integer between 0 and the number you passed in:
puts rand(10) #=> 7
puts rand(100) #=> 34
# However, if you call rand without an argument, it generates a Float between 0 and 1:
puts rand #=> 0.42940609106596     
puts rand #=> 0.155213416128283
puts rand #=> 0.777773418756725

# What are RubyGems?
# RubyGems is a handy system that Ruby developers use to distribute code to each other. 
# RubyGems is how we get to use all the powerful code libraries contributed by the many developers out 
# there. When we want to use someone else's code for our programs, we typically say "let's install their gem."

# Check if RubyGem is installed
gem -v
OR 
gem --version

# How to install gems
gem install the_gem_name_here

# How to list all gems you have installed?
gem query

# How to use rest-client gem
require "rubygems" # The keyword require is how we bring in code libraries for our program to use. To access installed gems, we first require "rubygems"
require "rest-client" # Here we require the gem we want to use, "rest-client". And just like that, we can start using the RestClient class.
res = RestClient.get("http://en.wikipedia.org/wiki") # The get method of the RestClient class simply retrieves a webpage from the address you pass it using the HTTP GET protocol. This is basically what your web browser does every time you give it a standard website address.
puts res.code #=> 200
# The RestClient.get method returns an Object that contains a HTTP status code. You've probably heard of a 404 error, the status code 
# indicating that a webpage is not at the specified URL. A 200 indicates a successful GET request.

puts res.body # The RestClient response object also has a body method that contains the raw HTML or other content from the request.
#=> <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
#=> "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
#=> <html lang="en" dir="ltr" class="client-nojs" xmlns="http://www.w3.org/1999/xhtml">
#=> <head> ...

# How to use Google maps API
# google want a browser request in this format:
http://maps.google.com/maps/api/staticmap?sensor=false&size=550x300&markers=902+Broadway+New+York,NY
# breatdown the parts of the url
http://maps.google.com/maps/api/staticmap
# This is the endpoint of the API, the base address of the service. Think of it as the location of the remote 
# script that will be reading your input and responding back. In this case, if you just visit the 
# endpoint http://maps.google.com/maps/api/staticmap without any parameters, the script won't serve anything to you.
?
# This is a delimiter that separates the endpoint from the parameters that you use to specify the details of 
# your request, such as what address you want to find.
some_key=some_value
# The parameters you pass in will be in key-value pairs. The key is the name of the property, such as size.
#  The equals sign = is how you specify the value (e.g. 300x200) for the key.
# How do you know what the keys of an API are? Read the documentation. There's no special science to it besides 
# following the instructions.
&
# Each parameter key-value pair is delimited by an ampersand

# The following are the basic parameters for the static maps API:
sensor=false
# This can either be true or false and indicates whether or not the browser is keeping track of the user's 
# geo-location. For our purposes, we leave it to false.
size=550x300
# This specifies the widthxheight dimensions of the map image that we would like.
markers=902+Broadway+New+York,NY
# This specifies the address in which we want the map image to focus around. The + sign denotes a space character in 
# the URL (this is true across all Web addresses, not just this particular API).


# How to use google's geogoding api?
http://maps.googleapis.com/maps/api/geocode/xml?address=1400+Broadway,+New+York,+NY&sensor=false
# this link returns an xml for geographical infomration
# Use an xml parser like crack to retrieve this data

# How to convert invalid characters in a URL to their proper URL-safe entities?
# For example, whitespace isn't allowed in properly-formatted URLs. So URI.encode will convert white spaces to %20:
str = "http://mysite.com?q=This string needs to be encoded!"      
puts URI.encode(str) #=> "http://mysite.com?q=This%20string%20needs%20to%20be%20encoded!"


# What is nil?
# In Ruby, the object nil is Ruby's representation of nothing. Yes, it has a class (NilClass) and several methods 
# common to all objects. But its main purpose is to indicate nothingness.
# Nothingness is not the same as 0, nor an empty string like "". It is just nothing. In other languages, 
# it's called referred to as null.
# All objects, including nil itself, has the nil? method, which tests whether or not an object is nil.
puts("hello world").nil?   #   true
42.nil?   #   false
0.nil?   #   false
"".nil?   #   false
nil.nil?   #   true 

# How to tell if an object is from a certain class?
22.is_a? Fixnum #=> true
# This is a Ruby method that can be called by any object. It returns true if the object belongs to the same Class 
# as the Class you pass as an argument intois_a?. The question mark here is just part of the method name, as if it were 
# a regular alphanumeric character.


# What is a ternary operation?
#  Ternary operation is a sort of inline if/else style that many languages have
for i in 1..100
   str = ''
   str += 'Fizz' if i%3==0
   str += 'Buzz' if i%5==0
   puts (str == '' ? i : str)
end
# puts (str == '' ? i : str)
# is the same as:
if str == ''
   puts i
else
   puts str
end


# What are blocks?
# anonymous methods. They are snippets of codes that, when provided arguments, will do something with those arguments. But, in 
# the name of brevity, these particular methods aren't worth naming.
1.upto(3) do |i| 
   puts i * 2
end 
# OR
1.upto(3){ |i| puts i * 2 }  


# Arrays
# Ruby arrays are zero-based indexed, meaning that the first item in the Array is at 
# position 0, the second item is in position 1, and so on.

# How to joing objects in an array?
puts my_first_array.join(", ") 

# The each method yields a reference to each element in the collection, rather than a reference 
# to the element's numerical index in the array.
arr.each do |x|
    puts x
end

# However, sometimes a reference to the current element's index is useful. Collections also have the 
# each_with_index method available to them:

arr = ['cat', 'dog', 'pony', 'bird']
arr.each_with_index do |str, idx|
    puts "#{str} is at index #{idx} show"
end 

# How to push items to end of array?
# use the .push method
arr = ['dog', 'cat', 'bear']
arr.push('penguin', 'fox')
puts arr.join("-")   #=> dog-cat-bear-penguin-fox
puts arr[0]   # dog 
# OR
#use the <<
new_arr = ["dog", 7, 42, "cat"]
new_arr << 42
puts new_arr.join(",")   #=> dog,7,42,cat,42

# How to take an element out of an array?
# Just as with push, pop operates at the end of the array. In computer science lingo, this 
# is referred to as LIFO – Last In, First Out:
arr = ["Atlanta", "Boston", "Chicago", 42]
arr.pop   # 42
puts arr.join(', ')   #=> Atlanta, Boston, Chicago

# sort arrays
puts [8, 0, 15, -42].sort.join(', ')   #=> -42, 0, 8, 15

# How to split a string into an array
"Smith,John,Ithica,NY".split(',')   #=> ["Smith", "John", "Ithica", "NY"]      
"She sells seashells".split(' ')   #=> ['She', 'sells', 'seashells']
"She sells seashells".split('se')   #=> ["She ", "lls ", "ashells"]   

# how to get only part of the array?
# To use just part of an Array, you can use its slice method. The first argument to 
# slice is the index of the original array that you want to start the sub-array at. 
# The second argument is the number of elements to include, starting from and including 
# the element at the specified index (i.e. a second argument of 0 will return an empty array)
arr = [0,1,2,3,4,5]
puts arr.slice(3, 2).join(',')   #=> 3,4
puts arr.slice(0,1).join(',')   #=> 0
arr.slice(1,0).join(',')   #=> []

# Negative indices
arr = "160,Ninth Avenue,Apt 42,10015,New York,NY,USA".split(",") # ["160", "Ninth Avenue", "Apt 42", "10015", "New York", "NY", "USA"]
puts arr[-1]   #=> USA 

# Partial strings with arrays and ranges
puts "Hello world"[0..4] #=> Hello
puts "Synecdoche, NY"[-2..-1] #=> NY 


# Hashes
#Using each and each pair with hashs
# The each method works for a Hash. However, it converts each key-value pair into an array like so: [key, value]
{"CA"=>"California"}.each do |pair|
   puts pair[0]
   puts pair[1]
end      
#=> CA
#=> California  

# To more conveniently access keys and values of a Hash, use the each_pair method:
{'New York'=>'Knicks', 'Miami'=>'Heat', 'Boston'=>'Celtics', 
 'Dallas'=>'Mavericks'}.each_pair |key, val| do
   puts "#{key} has the #{val}"
end
#=> New York has the Knicks
#=> Miami has the Heat
#=> Boston has the Celtics
#=> Dallas has the Mavericks

# what are symbols?
# Symbols aren't strings. They have less functionality and share the same restrictive naming policies as variables 
# (basically, just use lowercase alphabet letters and underscores). But they are more lightweight and are just about 
# as readable as strings.
presidents = [
 {:last_name=>"Clinton", :first_name=>"Bill", :party=>"Democrat", :year_elected=>1992, :state_residence=>"Arkansas"}, 
 {:last_name=>"Obama", :first_name=>"Barack", :party=>"Democrat", :year_elected=>2008, :state_residence=>"Illinois"}, 
 {:last_name=>"Bush", :first_name=>"George", :party=>"Republican", :year_elected=>2000, :state_residence=>"Texas"}, 
 {:last_name=>"Lincoln", :first_name=>"Abraham", :party=>"Republican", :year_elected=>1860, :state_residence=>"Illinois"}, 
 {:last_name=>"Eisenhower", :first_name=>"Dwight", :party=>"Republican", :year_elected=>1952, :state_residence=>"New York"}
] 

# I stopped at enumerable




