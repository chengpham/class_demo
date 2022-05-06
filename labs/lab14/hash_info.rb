# Create a method, get_user_info, that when called asks the user for the following personal information: first name, last name, city of birth and age. Then, return that information as a hash.

# get_user_info
# Prompts the user a bunch of times for their information
# => { first_name: "Jon", last_name: "Snow", city_of_birth: "Winterfell", age: 26 }




def get_user_info 
    person = {}
    puts "Whats your first name?"
    person[:first_name] = gets.chomp.capitalize
    puts "Whats your last name?"
    person[:last_name] = gets.chomp.capitalize
    puts "What city where you born in?"
    person[:city_of_birth] = gets.chomp.capitalize
    puts "What is your age?"
    person[:age] = gets.chomp
    puts "#{person}"
end

get_user_info
