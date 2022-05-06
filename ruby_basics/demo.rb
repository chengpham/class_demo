# puts 2+ "10.2".to_f
# print 'hello world'
# puts 2*4
# print "Hello World! \n Printing something else"
# p("Hello World! \n Printing something else")

# a=1
# puts a
# b=a+5
# puts b
# MAX_PASSWORD_ATTEMPT=5
# puts MAX_PASSWORD_ATTEMPT
# MAX_PASSWORD_ATTEMPT=6
# puts MAX_PASSWORD_ATTEMPT

# new_var="hello"
# new_var_2="world"
# c= new_var + new_var_2
# puts c

# puts 'What is your name?'
# user_name=gets
# puts "hello #{user_name}"

# puts "What is your first name?"
# first_name = gets.chomp
# puts "What is your last name?"
# last_name = gets.chomp
# puts "Hello #{first_name} #{last_name}"

# a1=1
# puts a1
# 1a = 2
# puts 1a

# a_1='working variable'
# puts a_1

# x=1
# y=x
# puts y
# puts x
# x=2
# puts y
# puts x

# my_first_string='hello there'
# my_second_string="How are you?"
# puts my_first_string
# puts my_second_string

# puts "What is your name?"
# name=gets.chomp
# puts name.capitalize
# puts name.upcase
# puts name.downcase
# puts name.reverse

# name='David'
# puts "my name is #{name}"

# my_new_string='I \'m a string'
# puts my_new_string

# puts "What is your name?"
# name = gets.chomp
# puts "Your name is #{name.capitalize}"
# puts "Your name is #{name.reverse}"


# puts "hello world".split(/ |\_|\-/).map(&:capitalize).join(" ") 

# puts "Hello World".swapcase

# puts "Hellllllllllo mmmmmmyyy namme isss".squeeze

# str="My name is David and your name is Bob"
# puts str.sub("name","title")
# puts str.gsub("name", "title")

# puts str.include? "vid"

# 1
# 10
# 100
# num = 100_300 
# puts num
# num_1=100_300_000_000
# puts num_1

# puts 1.to_f
# puts 2.59.to_i

# a=5
# b=10
# puts a+b
# puts a-b
# puts a*b
# puts a.to_f / b.to_f
# puts 3%2
# puts 2%2
# puts 2**2

# a=5
# b=3**a
# puts b

# puts "What is your first number?"
# first_num=gets.chomp
# puts "What is your second number?"
# second_num=gets.chomp
# puts first_num.to_f * second_num.to_f


# name = "hello world"
# puts name[0].upcase + name[1,name.length-1]

# puts "What year is your car?"
# year = gets.chomp.to_i

# if year>2020
#     puts "Future"
# elsif year<=2020 && year>2018
#     puts "New"
# elsif year<=2018 && year>2010
#     puts "Old"
# else puts "Very Old"
# end

# puts "What is your score?"
# score = gets.chomp.to_i

# if score<100 && score>85
#     score "A"
# elsif score>75
#     puts "B"
# elsif score>65
#     puts "C"
# elsif score>50
#     puts "C-"
# else puts "F"
# end


# temp=9
# puts "It is cold" if temp<10

# puts "What is the year of your car?"
# year=gets.to_i

# puts "The car is from future" if year>2020
# puts "The car is new" if year<=2020 && year>2017
# puts "The car is old" if year<2017 && year>2000
# puts "The car is very old" unless year> 2000

# x=1
# while x<=100
#     puts x
#     x+=1
# end
# y=50
# while y>=1
#     puts y
#     y-=1
# end

# z=1
# count = 0
# while z<=100
#     puts z if(z % 2 == 1)
#     z += 1
#     count+=1
#     break if count >= 60
# end

# x=1;
# count=0;
# while count<=30
#     puts x if(x%2==1)
#     x+=1
#     count+=1
# end

# def sum_number(n=0)
#     sum=1
#     if n == "exit"
#       return puts "Your total is: #{sum}"
#     end
#     puts "Provide a number"
#     num=gets.chomp
#     sum += num.to_f
#     sum_number(num)
#   end
# sum_number()

# result=0
# loop do
#     print "Give me a number (type exit to see the sum):"
#     input=gets.chomp
#     break if input == 'exit'
#     result += input.to_f
# end
# puts result

# puts "Enter number:"
# num=gets.chomp.to_i
# for number in 1..100
#     puts number
# end

# x=1;
# while x<=100
#     puts "#{x} FizzBuzz" if(x%3==0 && x%5==0)
#     puts "#{x} Fizz" if(x%3==0)
#     puts "#{x} Buzz" if(x%5==0)
#     puts "#{x}" unless((x%3!=0 && x%5!=0) || x%3!=0 || x%5!=0)
#     x+=1
# end

# 10.times {
#     puts "Hello CodeCore"
# }

# is_a?
# Returns true if class is the class of obj, or if class is one of the superclasses of obj or modules included in obj.
# 2.5.1 :001 > 1.is_a? Integer
#  => true 
# 2.5.1 :002 > 1.is_a? String
#  => false 
# 2.5.1 :003 > "asd".is_a? String
#  => true 
# 2.5.1 :004 > "asd".is_a? Integer
#  => false 
# 2.5.1 :005 > 