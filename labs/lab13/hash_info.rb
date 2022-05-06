# Ask the user for personal information: first name, last name, city of birth and age. Then store that information in a hash. After that loop through the hash and display the results, for example:

# Your first name is Tam.
# Your last name is K.
# Your city of birth is Burnaby.
# Your age is 25.
# Capitalize the inputs from the user if they are capitalizable.

person = {}
puts "What is your first name?"
person[:fname] = gets.chomp().capitalize!
puts "What is your last name?"
person[:lname] = gets.chomp().capitalize!
puts "What city where you born in?"
person[:city] = gets.chomp().capitalize!
puts "How old are you?"
person[:age] = gets.chomp()
puts "Your name is #{person[:fname]} #{person[:lname]}, you were born in #{person[:city]} and you are #{person[:age]} years old."