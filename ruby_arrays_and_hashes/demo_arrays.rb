=begin
# Creating Array in a Ruby

my_array=[] # creating an array =>[]
my_array_1=Array.new #=> []
my_array_2=Array.new(2) #=> [nil,nil]


# Accessing Elements of an array

array=[1,"hi","hello"]
array[0] #=> 1
array[1] #=> "hi"
array[-1] #=> "hello"
array[-2] #=> "hi"

a=[[1,2,3],true,"Hey","Drew"]
a[2] 
#or 
a[-2]


# Multi Dimensional Arrays

array_1=[[1,2,3],[1,2,3],[1,2,3],[1,2,3]]
array_1[2] #=> [1,2,3]
array_1[2][2] # => 3
array_1[2][1] # => 2


#  Addinge elements to an array
#  we can do it by 2 ways
# 1. push
# 2. << Shovel operator 

array=[1, "hi", "hello", "John"]
array.push('John') #=>[1, "hi", "hello", "John"]
array << 'Doe' #=> [1, "hi", "hello", "John", "Doe"] 

# .include? is used to check if the element is in array or not. it will return boolean(true or false)
array.include?(1) #=> true


# To find number of elements in an array we use following method
array=[1, "hi", "hello", "John", "Doe"] 
array.length
array.size
array.count

# Find an array method to turn a multi-dimensional array into a one dimensional array
array_1=[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]] array_1.flatten(1) # argument is used to define an extent of level that we want to flatten


array=[1, "hi", "hello", "John", "Doe"] 
array.shift #=> 1 # it will remove element from the begning
array.unshift(1) #=> 1 # it will add element at the begning



# 
# Converting string into an array

word = 'Hello codecore student'.split(' ')
# converting array to string 

words.join(' ')

# Method 1
words=["Hello", "codecore", "student"]
words= words[1],words[2],words[0]

# Method 2
num=[4,5,6,7]
num[0],num[3]=num[3],num[0] #=> [7, 5, 6, 4] # Be carefull about the index 
=end

# result=[]
# for num in 1..100
#     str=""
#     str << "FIZZ" if num % 3 ==0
#     str << "BUZZ" if num % 5 ==0
#     str << num.to_s if str.length <=0
#     result << str
# end
# p result

# 1.upto(100){ |n| puts'FizzBuzz '[i = n**4 %-15,i+13] || n}

# (1..100).each do |x|
#     x = case 
#    when (x % 3 == 0 )&& (x % 5 == 0)
#      puts "FIZZBUZZ"
#    when (x % 5 == 0)
#      puts "BUZZ"
#    when (x % 3 == 0)
#      puts "FIZZ"
#    else
#      puts x
#    end
#  end

#  input=[]
# for i in  1..100 do
#     if i%3==0 and i%5==0
#         input.push("FIZZ BUZZ")
#     elsif i%3==0
#         input.push("FIZZ")
#     elsif i%5==0
#         input.push("BUZZ")
#     else
#         input.push(i)
#     end
# end
# puts input

# num_1=[1,2,3,4,5]

# Iterating over an array using a for loop
# for val in num_1
#     puts val
# end

# num_1.each do |x|
#     puts x
#     puts x*2
# end

# arr = [1,2,3,4,5]
# arr.each do |x|
#     puts x*x
# end


# arr2 = [[1,7,3], [4,4,6], [7,2,9]]
# arr2.flatten().each do |x| puts x*x end

# names = []
# while name = gets.chomp
#     if name == 'exit'
#         break
#     else
#         names << name.capitalize!
#     end
# end
# p names

# map_array=[1,2,3,4,5]

# new_mapped_array=map_array.map do |x|
#     x*x
# end
# p new_mapped_array
# p map_array

# sentence = [['john','steve','jen'],['ate','sat on','bought'],['an apple','the couch','a toothbrush']]

# new_sentence = sentence.map do |x|
#         x[rand(x.length)]
# end
# p new_sentence.join(' ')

# Hashes
#  Creating Hashes
# my_hash={} #=> {}
# my_hash_1=Hash.new #=>{}
# my_hash_2=Hash.new(0) #=>{}

# me = {
#     "name" => "Tam",
#     "place" => "Burnaby",
#     "company" => "CodeCore"
# }
# puts me['name']

# Accessing Values form hashes

# me["name"] # => "Naveed" 
# me["place"] # => "Richmond"
# # Accessing all keys of hash
# me.keys #=> ["name", "place", "Company"] 
# # Accessing all values of hash
# me.values# => ["Naveed", "Richmond", "CodeCore"] 
# me.each do |key, value|
#     puts "#{key} - #{value}"
# end


# movie_with_director = {
#     "Forrest Gump" => "Robert Zemeckis",
#     "The Matrix" => "The Watchowskis",
#     "Pulp Fiction" => "Quintin Tarantino"
# }
# puts movie_with_director["Forrest Gump"]

# puts movie_with_director.keys

# provinces_of_canada={
#     "BC" => "Victoria",
#     "ON"=>"Torronto",
#     "MN" => "Winnipeg"
# }

# provinces_of_canada.each do |province, capital|
#     puts "#{province}- #{capital}"
# end

# my_hash = {
#     'abc'=> [1,2,3],
#     "xyz"=>[4,5]
# }

# my_array=["abc",{'a'=>1, 'b'=> 2}, false]

# cities = {
#     "BC" => ['Vancouver','Richmond'],
#     'AB' => ['Edmonton', 'Calgary'],

# }
# cities.each { |key,values|
# puts "#{key}: #{values.join(',')}"
# }

# student_list={
#     0=>{
#         "name"=>'Naveed',
#         'age'=>'35',
#         'hobbies'=>["programming","Hiking"]
#     },
#     1=>{
#         "name" => 'John',
#         "age" => 27,
#         "hobbies" => ['swim', 'hockey']
#         }

# }

# p student_list[0]


# Symbols
# They are simillar to string 
# They are immutable and are ptactical data structure for text
# Old symbol is reused instead of creating a new symbol

# We use camelCase for symbols
# But snake_case also works
# we cannot spaces in symbols e.g. :i stuff 👈🏻 Invalid symbols
# we can use quotes for creating symbols :"i stuff" 👈🏻 Will work

# course_info={
#     :name => 'CodeCore Bootcamp',
#     :lenght=> '12 weeks',
#     :location=> '626 6th Ave, New Westminster'
# }

# course_info_symbol={
#     name: 'CodeCore Bootcamp',
#     lenght: '12 weeks',
#     location: '626 6th Ave, New Westminster'
# }
# puts course_info_symbol

# personal = {
#     :username => "cheng",
#     :email => "cheng@something.com",
#     :password => "12345678"
# }
# puts personal

# bc_cities_population = { vancouver: 2135201, victoria: 316327, abbotsford: 149855, kelowna: 141767, nanaimo: 88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }

# bc_cities_population.each do |city, population|
#     p "#{city.capitalize} is a large city" if population>100_000
# end

# paragraph='Validation branding channels growth hacking bandwidth MVP. Lean startup stock creative first mover advantage twitter iPhone. Return on investment strategy stealth ramen mass market founders business plan long tail learning curve gen-z investor agile development rockstar incubator.'

# frequency_char=Hash.new(0)

# paragraph.split.each{|word|
#     word.split('').each{ |char|
#         frequency_char[char.downcase.to_sym] += 1
#     }
# }
# p frequency_char

# str = 'hello world'
# arr = Hash.new(0)
# str.split(' ').each{ |word|
#     word.split('').each{ |c|
#         arr[c] += 1
#     }
# }
# p arr