# Ruby String class comes with a `reverse` method that reverses the order of characters in a string:
# 1 | greeting = "hello"
# 2 | puts greeting.reverse # olleh
# Write a code that gives the same outcome of the reverse method. You can use any method from the Array class.

greeting = "hello world"
p greeting.split('').map{|c| c}.reverse.join('')
