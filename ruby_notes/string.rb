# CREATING STRINGS
# ============================================================================

'Hello world'
"Hello world"

%q/Hello world/ #=> q indicated single quotes, the delimeter can be anything, doesnt have to be //
%Q!Hello world! #=> Q indicates double quotes, the delimeter can be anything, doesnt have to be !
%Q{Hello world} #=> any character can be used after q to indicate delimeter

%{Hello world} #=> if there isnt a Q or q before the delimeter, it is equal to Q

%-Hello world- #=> is same as %Q-Hello world-, which is equal to "Hello world"

# Here document: multi-line string
<<ENDOFSTRING # This defines the terminator (the thing that ends the string)
    Hello
    World
    !
ENDOFSTRING
# The terminator must be in the first column

<<-ENDOFSTRING # The dash before the defining terminator makes it so you don't need the terminator in the first column
   Hello
   World
   !
   ENDOFSTRING

<<WOO
This
is
pretty
cool
WOO

<<-WEE
This
is
cool
too
      WEE
# The terminator didn't have to be in the first column because of the dash before the terminator definition


# INSERTING INTO STRINGS
#==============================================================================

first = %{Joe}
last = %-Gesualdo-

"Hello #{first}"

%/Hello #{first} #{last}/

# Print sequences

"Hello there %s" % first

%{Hello there %s %s} % [first, last]


# STRING METHODS
# =============================================================================

first = %:Joe:
last = "Gesualdo"

first.length
first.reverse
first * 5
first.downcase
first.delete('j')
first.index("j") # Returns the index of the FIRST occurence
first.capitalize
first.rjust(5, "a") #=> "aaJoe"
first.rjust(10, " ") #=> "      Joe"
first.succ #=> Jof
last.succ #=> Gesualdp
first.encoding #=> UTF-8

woo = "Wooooooo Weeeee"
woo.squeeze #=> "Wo We"
woo.squeeze('o') #=> "Wo Weeeee"
woo.squeeze('e') #=> "Woooooo We"
woo.squeeze('a-p') #=> "Wo We"

spacer = "Crazy      Spaces  Here"
spacer.squeeze(' ') #=> "Crazy Spaces Here"


full_name = first + " " + last
full_name = %-#{first} #{last}-

full_name.split(" ")
full_name.match(/\W\S*/) #=> returns a MatchData object, which encapsulates all the results of a pattern match
full_name.scan(/\W\S*/) #=> takes a Regex and returns an Array of everything that matches
names = %-#{full_name} #{full_name}-

names.sub("Joe", "Michael") #=> This replaces only the first occurence
names.gsub(%{Joe}, "Michael")


# Turn string into enumerator
first.lines #=> returns an enumerator of the lines which then you can call .to_a then loop through each
first.chars #=> returns an enumerator of each character which then you can call .to_a then loop through each
first.bytes #=> returns an enumertor of each character as a byte



