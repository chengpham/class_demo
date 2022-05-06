num = gets.chomp().to_i
def fibonacci(n)
    n < 2 ? n :  fibonacci(n - 1) + fibonacci(n - 2) 
 end
  puts fibonacci(num)

# def fib(n)
#     n.times.each_with_object([0,1]) { |num, obj| obj << obj[-2] + obj[-1] }
# end
# puts fib(10)