c = Array.new
b = [22, 'hello', {foo: bar}] #=> literal

%w{3 4 6 7 10} #=> ['3','4','6','7','10'] -- this creates strings in the array

a = [2, 4, 6, 8, 10, 12, 14]

a[-1] #=> 14
a.last #=> 14
a[-99] #=> nil
a[2,6] #=> [6,8,10,12,14]
a[-4,3] #=> [8,10,12]
a[-4,4] #=> [8, 10, 12, 14]
a[1..4] #=> [4, 6, 8, 10]
a[1...4] #=> [4, 6, 8] -- Three dots excludes the ending index
a[-4..-1] #=> [8, 10, 12, 14]

a[1] = 'bat' #=> [2, "bat", 6, 8, 10, 12, 14]

# INSTANCE METHODS
# ========================================--
a.max #=> 14
a.sort #=> sorts the array in numerical order from lowest to highest
a.sort!
a.join #=> "2468101214"
a.size #=> 7
a << 99 #=> [2, 4, 6, 8, 10, 12, 14, 99]
a.map {|x| x + 4} #=> [6, 8, 10, 12, 14, 16, 18] -- adjust each of the array entries, BUT doesn't change original array
a.map! {|x| x + 4} #=> [6, 8, 10, 12, 14, 16, 18] -- adjust each of the array entries, AND changes the original array
a.collect {|x| x + 4} #=> [6, 8, 10, 12, 14, 16, 18] -- same as map
a.collect! {|x| x + 4} #=> [6, 8, 10, 12, 14, 16, 18] -- same as map

a = [2, 4, 6, 8, 10, 12, 14, nil]
a.compact #=> [2, 4, 6, 8, 10, 12, 14] -- Removes nil values

a = [2, 2, 4, 4, 6, 8, 10, 12, 14]
a.uniq #=> [2, 4, 6, 8, 10, 12, 14] -- Returns only uniq values

a = [2, 4, 6, 8, 10, 12, 14]
a.push(99) #=> [2, 4, 6, 8, 10, 12, 14, 99]

a = [2, 4, 6, 8, 10, 12, 14, 99]
a.pop #=> returns the last item in the array, BUT also changes the original array

a = [2, 4, 6, 8, 10, 12, 14]
a.slice(0) #=> 2 -- Returns an array element at the specified index, BUT doesn't change original array
a.slice!(0) #=> 2 -- Returns an array element at the specified index, AND changes original array --  [4, 6, 8, 10, 12, 14]

a = [2, 4, 6, 8, 10, 12, 14]
a.shift #=> removes the first element in the array, AND returns the element that is returned
a.unshift(99) #=> [99, 2, 4, 6, 8, 10, 12, 14]

a = [2, 4, 6, 8, 10, 12, 14]
a.first #=> 2
a.last #=> 14
a.first(3) #=> [2,4,6]
a.last(3) #=> [10, 12, 14]

a = [[1,2], [3,4], [5,6]]
a.transpose   #=> [[1, 3, 5], [2, 4, 6]]

a = [2, 4, 6, 8, 10, 12, 14]
a.values_at(1,3) #=> [4, 8]

array = ["A", "B", "C"]
array.each_with_index {|val, index| puts "#{val} => #{index}" } #=> A => 0; B => 1; C => 2

a= [2, 4, 6, 8, 10, 12, 14]
a.reject {|x| x < 10} #=> [10, 12, 14]

a = %w{hello there you crazy, crazy big robot}
a.sort_by {|x| x.length } #=> ["you", "big", "crazy", "hello", "there", "robot"]
a.find {|x| x == 'hello' } #=> 'hello' -- Returns only the first occurence, NOT as an array
a.find_all {|x| x == 'crazy' } #=> ['crazy', 'crazy'] -- Returns all occurences as an array



