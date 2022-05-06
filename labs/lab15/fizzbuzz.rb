# [Lab] FizzBuzz Class
# Build a class called FizzBuzz that takes two numbers as parameters and then have a method called run that returns a fizzbuzz array (numbers from 1 to 100, numbers divisible by the first number replaced by 'fizz' and numbers divisible by the second number replaced by 'buzz' and numbers divisible by both replaced by 'fizzbuzz'). For instance this code should work with your class:

# fb = FizzBuzz.new(3,5)
# fb.run # returns an array like: [1, 2, 'fizz', 4, 'buzz, ...
# Now modify your solution to make it flexible and be able to change the numbers after you create the object. For instance:

# fb = FizzBuzz.new(3,5)
# fb.run # returns an array: [1, 2, 'fizz', 4, 'buzz, ...
# fb.first_number = 2
# fb.second_number = 3
# fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...

class FizzBuzz
    def initialize(first_number, second_number)
        @first_number=first_number
        @second_number=second_number
        @arr=[]
    end
    attr_accessor :first_number
    attr_accessor :second_number
    def run
        (1..100).each do |x|
            x = case 
            when (x % @first_number == 0 )&& (x % @second_number == 0)
                @arr << "fizzbuzz"
            when (x % @second_number == 0)
                @arr << "buzz"
            when (x % @first_number == 0)
                @arr << "fizz"
            else
                @arr << x
            end
        end
        p @arr
    end
end

fb=FizzBuzz.new(3,5)
# fb.run
fb.first_number=2
fb.second_number=3
fb.run
