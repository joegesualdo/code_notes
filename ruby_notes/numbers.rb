22.class #=> Fixnum
22.4.class #=> Float
100000000000000000000000000000000000.class #=> Bignum

1_000_000 #=> same as 1000000

2e3 #=> 2000.0 - moves the decimal over 3 places. This always returns a float
1.0e3 #=> 1000.0 - moves the decimal place over
2.0e5 #=> 200000.0

(1.0/2.0) #=> 0.5
(1/2) #=> 0 - because a fixnum returns a fixnum
(1.0/2) #=> 0.5 - Only one float is fine

Rational(2,3) #=> (2/3)
Rational('2/3') #=> (2/3) - can put a string as an argument if it's formatted correctly

Complex(2,3) #=> 2+3i
Complex('2+3i') #=> 2+3i

require 'mathn'
1/2 #=> 1/2 -- Including the mathn gem gives you a fraction as an answer, instead of 0.5


# INSTANCE METHODS
# ========================================
22.to_s #=> '22'

5.times #=> returns an enumerator which you can then cann each on
5.times {|x| puts "Number: #{x}"} #=> you can pass a block

3.upto(5) #=> returns an enumerator of numbers 3 to 5
3.upto(5) {|x| puts x}
99.downto(9)
50.step(80, 5) {|x| puts x} #=> 50 55 60 65 70 75 80

-55.abs #=> 55
-122.ab #=> 122

22.even? #=> true
43.odd? #=> true

# FLOAT INTANCE METHODS
# ========================================

33.4.to_i #=> 33
33.9.to_i #=> 33 -- rounds down automatically

33.9.round #=> 34
33.4.round #=> 33
46.3748.round(2) #=> 46.37
46.3748.round(3) #=> 46.375

# FIXNUM INSTANCE METHODS
# ===================================================
22.to_f #=> 22.0

